// formfy-renderer.component.ts
import {
    ChangeDetectionStrategy,
    Component, Input, OnInit
} from '@angular/core';
import {
    FormBuilder, FormControl,
    FormGroup
} from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { FormfyService } from "../../services/formfy.service";
import { FormField, FormFieldCondition } from '../../utils/models';
import {
    buildValidators
} from '../../utils/validations';
import { FormSettings } from '../../utils/form-settings';

@Component({
    selector: 'formfy-renderer',
    templateUrl: './formfy-renderer.component.html',
    standalone: false,
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormfyRendererComponent implements OnInit {
    @Input() formName = '';
    schema$!: Observable<{
        schema: { fields: any; settings: any; }; fields: FormField[]; settings: any
    }>;
    form!: FormGroup;
    fields!: FormField[];
    settings!: FormSettings;

    constructor(private svc: FormfyService, private fb: FormBuilder) { }

    ngOnInit() {
        this.loadForm();
    }

    loadForm(): void {
        this.schema$ = this.svc.getFormSchema(this.formName);
        this.schema$.subscribe(response => {
            const { fields, settings } = response.schema;

            console.log('---response---', response.schema);
            console.log('---settings---', settings);
            console.log('---fields---', fields);
            this.fields = fields;
            this.settings = settings;
            this.form = this.buildForm(fields);
            console.log('---form---', this.form);
            this.setupConditions(fields);
        });
    }

    buildForm(fields: FormField[]): FormGroup {
        const group: any = {};
        fields.forEach(f => {
            group[f.name] = new FormControl({ value: '', disabled: f.disabled ?? false }, buildValidators(f.validation));
        });
        return this.fb.group(group);
    }

    setupConditions(fields: FormField[]) {
        fields.forEach(f => {
            if (f.condition) {
                const cond = f.condition as FormFieldCondition;
                cond.rules.forEach(rule => {
                    this.form.get(rule.field)?.valueChanges.subscribe(() => this.onConditionChange(cond, f.name));
                });
                this.onConditionChange(cond, f.name);
            }
        });
    }

    onConditionChange(cond: FormFieldCondition, name: string) {
        const target = this.form.get(name)!;
        const meets = this.evaluateCondition(cond);
        if (cond.type === 'visibility') {
            meets ? target.enable({ emitEvent: false }) : target.disable({ emitEvent: false });
        } else if (cond.type === 'enable') {
            meets ? target.enable() : target.disable();
        }
    }

    evaluateCondition(cond: FormFieldCondition): boolean {
        const results = cond.rules.map(r => {
            const current = this.form.get(r.field)?.value;
            switch (r.operator) {
                case '==': return current === r.value;
                case '!=': return current !== r.value;
                case '>': return current > r.value;
                case '<': return current < r.value;
                case 'in': return Array.isArray(r.value) && r.value.includes(current);
                case 'not-in': return Array.isArray(r.value) && !r.value.includes(current);
                default: return false;
            }
        });
        return cond.logic === 'AND' ? results.every(Boolean) : results.some(Boolean);
    }

    onSubmit() {
        console.log(this.form.value);
    }
}

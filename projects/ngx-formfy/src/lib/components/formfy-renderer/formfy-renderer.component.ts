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
import { FormField, FormFieldCondition, FormFieldOption } from '../../utils/models';
import {
    buildValidators
} from '../../utils/validations';
import { FormSettings } from '../../utils/form-settings';
import { getSpacingValue, organizeFieldsIntoRows } from '../../utils/template-utils';

@Component({
    selector: 'formfy-renderer',
    templateUrl: './formfy-renderer.component.html',
    standalone: false,
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormfyRendererComponent implements OnInit {
    @Input() formName = '';
    @Input() lazySelectData: { [fieldName: string]: FormFieldOption[] } = {};
    schema$!: Observable<{
        schema: { fields: any; settings: any; }; fields: FormField[]; settings: any
    }>;
    form!: FormGroup;
    fields!: FormField[];
    settings!: FormSettings;
    rows!: FormField[][];

    getSpacingValue = getSpacingValue;

    constructor(private svc: FormfyService, private fb: FormBuilder) { }

    ngOnInit() {
        this.loadForm();
    }

    loadForm(): void {
        this.schema$ = this.svc.getFormSchema(this.formName);
        this.schema$.subscribe(response => {
            const { fields, settings } = response.schema;
            this.fields = fields;
            this.settings = settings;
            this.form = this.buildForm(fields);

            if (settings.layout == 'auto') {
                this.rows = organizeFieldsIntoRows(this.fields);

            }
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
                    this.form.get(rule.field)?.valueChanges.subscribe(() => this.onConditionChange(cond, f));
                });
                this.onConditionChange(cond, f);
            }
        });
    }

    onConditionChange(cond: FormFieldCondition, field: FormField) {
        const target = this.form.get(field.name)!;
        const meets = this.evaluateCondition(cond);

        if (cond.type === 'visibility' || (!cond.type && cond.rules?.length > 0)) {
            field.isVisible = meets;
        } else if (cond.type === 'enable') {
            field.disabled = meets
            meets ? target.enable({ emitEvent: false }) : target.disable({ emitEvent: false });
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

// input.component.ts
import {
    Component, Input, forwardRef, ChangeDetectionStrategy
} from '@angular/core';
import {
    ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { FormField } from '../../utils/models';

@Component({
    selector: 'formfy-input',
    standalone: false,
    template: `
    <div [ngClass]="field.containerClassName">
      <label *ngIf="field.label"
             hlmLabel
             [for]="field.id"
             [ngClass]="field.labelClassName">
        {{ field.label }}
      </label>

      <input
        [id]="field.id"
        [type]="field.type"
        [name]="field.name"
        hlmInput
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [placeholder]="field.placeholder"
        [autocomplete]="field.autocomplete"
        [readonly]="field.readonly"
        [disabled]="disabled"
        [attr.autofocus]="field.autofocus ? '' : null"
        [class]="field.class"
      />

      <formfy-validation-messages [field]="field"></formfy-validation-messages>
    </div>
  `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
    @Input() field!: FormField;

    value: any = '';
    disabled = false;

    // Change these from private → protected
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    writeValue(value: any): void {
        this.value = value || '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onInput(event: any): void {
        this.value = event.target.value;
        this.onChange(this.value);
    }

    onBlur(): void {
        this.onTouched();
    }
}
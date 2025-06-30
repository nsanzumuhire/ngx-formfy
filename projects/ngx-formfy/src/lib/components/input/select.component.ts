import { Component, forwardRef, ChangeDetectionStrategy } from "@angular/core";
import { InputComponent } from "./input.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'formfy-select',
  standalone: false,
  template: `
    <div [ngClass]="field.containerClassName">
      <label *ngIf="field.label" hlmLabel [for]="field.id">{{ field.label }}</label>
      <brn-select  [multiple]="!!field.multiple" placeholder="{{field.placeholder}}" 
                  [value]="value"
                  (valueChange)="onSelectChange($event)"
                  (blur)="onBlur()"
                  [disabled]="disabled">
        <hlm-select-trigger>
          <hlm-select-value />
        </hlm-select-trigger>
        <brn-select-content hlmPopoverContent>
          <hlm-option *ngFor="let o of field.options" [value]="o.value">{{ o.label }}</hlm-option>
        </brn-select-content>
      </brn-select>

      <formfy-validation-messages [field]="field"></formfy-validation-messages>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends InputComponent {
  onSelectChange(value: any) {
    this.value = value;
    this.onChange(value);
  }

}

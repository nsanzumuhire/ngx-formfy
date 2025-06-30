import { Component, forwardRef, ChangeDetectionStrategy, Input } from "@angular/core";
import { InputComponent } from "./input.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { FormFieldOption } from "../../utils/models";

@Component({
  selector: 'formfy-select',
  standalone: false,
  template: `
    <div class="w-full">
          <label *ngIf="showLabel"
        hlmLabel
        [for]="field.name"
        [ngClass]="field.labelClassName" [ngClass]="field.labelClassName">
    {{ field.label }}
    <span *ngIf="field.required" class="text-red-500">*</span>
    </label>
      <brn-select [multiple]="!!field.multiple" placeholder="{{field.placeholder}}" 
                  [value]="value"
                  (valueChange)="onSelectChange($event)"
                  (blur)="onBlur()"
                  [disabled]="disabled">
        <hlm-select-trigger  
                  [class]="'w-full'"
                  style="width: '100%'">
          <hlm-select-value />
        </hlm-select-trigger>
        <brn-select-content class="w-full" style="width: '100%'; background: white;" hlmPopoverContent>
         <ng-container *ngIf="field.lazySelectData">
            <hlm-option *ngFor="let o of lazySelectData" [value]="o.value">{{ o.label }}</hlm-option>
         </ng-container>

         <ng-container *ngIf="!field.lazySelectData">
           <hlm-option *ngFor="let o of field.options" [value]="o.value">{{ o.label }}</hlm-option>
         </ng-container>
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
  @Input() lazySelectData: FormFieldOption[] | null = null;
  onSelectChange(value: any) {
    this.value = value;
    this.onChange(value);
  }

}

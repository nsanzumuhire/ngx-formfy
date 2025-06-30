import { ChangeDetectionStrategy, Component, forwardRef } from "@angular/core";
import { InputComponent } from "./input.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'formfy-textarea',
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
      <textarea
        [id]="field.id"
        hlmInput
        [placeholder]="field.placeholder"
        [class]="'w-full'"
        [disabled]="disabled"
        [ngClass]="field.class">
        
      </textarea>
      <formfy-validation-messages [field]="field"></formfy-validation-messages>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends InputComponent { }

import { ChangeDetectionStrategy, Component, forwardRef } from "@angular/core";
import { InputComponent } from "./input.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'formfy-textarea',
  standalone: false,
  template: `
    <div [ngClass]="field.containerClassName">
      <label *ngIf="field.label" hlmLabel [for]="field.id" [ngClass]="field.labelClassName">
        {{ field.label }}
      </label>
      <textarea
        [id]="field.id"
        hlmInput
        [placeholder]="field.placeholder"
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

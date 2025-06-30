// validation-messages.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'formfy-validation-messages',
    standalone: false,
    template: `
    <div *ngIf="control?.touched && control.invalid" class="text-red-600 text-sm mt-1">
      <ng-container *ngFor="let err of errorKeys">
        <div *ngIf="control.hasError(err)">
          {{ messageFor(err) }}
        </div>
      </ng-container>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationMessagesComponent {
    @Input() control!: AbstractControl;
    @Input() field!: any; // Contains errorMessages map

    get errorKeys(): string[] {
        return Object.keys(this.control.errors || {});
    }

    messageFor(key: string): string {
        const msg = this.field.validation?.errorMessages?.[key];
        return msg ?? defaultMessages[key] ?? key;
    }
}

const defaultMessages: Record<string, string> = {
    required: 'This field is required',
    minlength: 'Too short',
    maxlength: 'Too long',
    pattern: 'Invalid format',
    min: 'Value too low',
    max: 'Value too high',
};

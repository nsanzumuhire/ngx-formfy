import { Validators, ValidatorFn } from '@angular/forms';
import { FormFieldValidation } from './models';

export function buildValidators(validation?: FormFieldValidation): ValidatorFn[] {
    const fns: ValidatorFn[] = [];
    if (!validation) return fns;
    const v = validation;

    if (v.required) fns.push(Validators.required);
    if (v.minLength != null) fns.push(Validators.minLength(v.minLength));
    if (v.maxLength != null) fns.push(Validators.maxLength(v.maxLength));
    if (v.pattern) fns.push(Validators.pattern(v.pattern));
    if (v.min != null) fns.push(Validators.min(v.min));
    if (v.max != null) fns.push(Validators.max(v.max));
    // Add async/custom logic if needed

    return fns;
}
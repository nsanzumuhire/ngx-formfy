import { NgModule } from '@angular/core';
import { HlmErrorDirective } from './hlm-error.directive';
import { HlmFormFieldComponent } from './hlm-form-field.component';
import { HlmHintDirective } from './hlm-hint.directive';

export * from './hlm-error.directive';
export * from './hlm-form-field.component';
export * from './hlm-hint.directive';

@NgModule({
	imports: [HlmFormFieldComponent, HlmErrorDirective, HlmHintDirective],
	exports: [HlmFormFieldComponent, HlmErrorDirective, HlmHintDirective],
})
export class HlmFormFieldModule { }

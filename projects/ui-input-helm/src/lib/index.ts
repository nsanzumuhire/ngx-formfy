import { NgModule } from '@angular/core';
import { HlmInputErrorDirective } from './hlm-input-error.directive';
import { HlmInputDirective } from './hlm-input.directive';

export * from './hlm-input-error.directive';
export * from './hlm-input.directive';

@NgModule({
	imports: [HlmInputDirective, HlmInputErrorDirective],
	exports: [HlmInputDirective, HlmInputErrorDirective],
})
export class HlmInputModule { }

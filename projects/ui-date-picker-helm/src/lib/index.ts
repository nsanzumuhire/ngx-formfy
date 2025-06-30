import { NgModule } from '@angular/core';
import { HlmDatePickerMultiComponent } from './hlm-date-picker-multi.component';
import { HlmDatePickerComponent } from './hlm-date-picker.component';

export * from './hlm-date-picker.token';

export * from './hlm-date-picker-multi.component';
export * from './hlm-date-picker.component';

export const HlmDatePickerImports = [HlmDatePickerComponent, HlmDatePickerMultiComponent] as const;

@NgModule({
	imports: [...HlmDatePickerImports],
	exports: [...HlmDatePickerImports],
})
export class HlmDatePickerModule { }

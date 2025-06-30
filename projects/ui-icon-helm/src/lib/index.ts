import { NgModule } from '@angular/core';
import { HlmIconDirective } from './hlm-icon.directive';

export * from './hlm-icon.directive';
export * from './hlm-icon.token';

@NgModule({
	imports: [HlmIconDirective],
	exports: [HlmIconDirective],
})
export class HlmIconModule { }

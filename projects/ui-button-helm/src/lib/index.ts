import { NgModule } from '@angular/core';
import { HlmButtonDirective } from './hlm-button.directive'
export * from './hlm-button.token';

export * from './hlm-button.directive';

@NgModule({
	imports: [HlmButtonDirective],
	exports: [HlmButtonDirective],
})
export class HlmButtonModule { }

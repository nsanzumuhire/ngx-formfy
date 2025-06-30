import { NgModule } from '@angular/core';
import { HlmLabelDirective } from './hlm-label.directive';

export * from './hlm-label.directive';

@NgModule({
	imports: [HlmLabelDirective],
	exports: [HlmLabelDirective],
})
export class HlmLabelModule { }

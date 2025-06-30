import { NgModule } from '@angular/core';

import { HlmRadioGroupComponent } from './hlm-radio-group.component';
import { HlmRadioIndicatorComponent } from './hlm-radio-indicator.component';
import { HlmRadioComponent } from './hlm-radio.component';

export * from './hlm-radio-group.component';
export * from './hlm-radio-indicator.component';
export * from './hlm-radio.component';

export const HlmRadioGroupImports = [HlmRadioGroupComponent, HlmRadioComponent, HlmRadioIndicatorComponent];

@NgModule({
	imports: [...HlmRadioGroupImports],
	exports: [...HlmRadioGroupImports],
})
export class HlmRadioGroupModule { }

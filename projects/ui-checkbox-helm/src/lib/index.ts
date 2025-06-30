import { NgModule } from '@angular/core';

import { HlmCheckboxComponent } from './hlm-checkbox.component';

export * from './hlm-checkbox.component';

export const HlmCheckboxImports = [HlmCheckboxComponent] as const;
@NgModule({
	imports: [...HlmCheckboxImports],
	exports: [...HlmCheckboxImports],
})
export class HlmCheckboxModule { }

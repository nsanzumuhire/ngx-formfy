import { ModuleWithProviders, NgModule, } from "@angular/core";
import { CommonModule } from '@angular/common'
import { FORMFY_CONFIG, FormfyConfig } from "../config/formfy.config";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { FormfyRendererComponent } from "../components/formfy-renderer/formfy-renderer.component";
import { ReactiveFormsModule } from "@angular/forms";

import { HlmFormFieldModule } from '@spartan-ng/helm/form-field';

import { HlmInputDirective } from '@spartan-ng/helm/input';
import { HlmCheckboxComponent } from '@spartan-ng/helm/checkbox';
import { HlmLabelDirective } from '@spartan-ng/helm/label';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
// import { HlmDatePickerComponent } from '@spartan-ng/helm/date-picker';
import { HlmRadioComponent, HlmRadioGroupComponent, HlmRadioIndicatorComponent } from '@spartan-ng/helm/radio-group';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { InputComponent } from "../components/input/input.component";
import { TextareaComponent } from "../components/input/textarea.component";
import { ValidationMessagesComponent } from "../components/input/validation-messages.component";
import { SelectComponent } from "../components/input/select.component";


const spartanUIDirectives = [
    HlmInputDirective,
    HlmLabelDirective,
    HlmButtonDirective,
]

const spartanUIComponents = [
    HlmCheckboxComponent,
    // HlmDatePickerComponent,
    HlmRadioComponent,
    HlmRadioGroupComponent,
    HlmRadioIndicatorComponent,
    BrnSelectImports,
    HlmSelectImports
]

const atomicComponents = [
    InputComponent,
    TextareaComponent,
    SelectComponent,
    ValidationMessagesComponent
]



@NgModule({
    declarations: [FormfyRendererComponent, atomicComponents],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HlmFormFieldModule,
        spartanUIDirectives,
        spartanUIComponents
    ],
    exports: [FormfyRendererComponent]
})
export class FormfyModule {
    static forRoot(config: FormfyConfig): ModuleWithProviders<FormfyModule> {
        return {
            ngModule: FormfyModule,
            providers: [
                { provide: FORMFY_CONFIG, useValue: config },
                // Add the standalone HTTP provider:
                provideHttpClient(withInterceptorsFromDi())
            ]
        };
    }
}

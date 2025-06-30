// projects/ngx-formfy/src/lib/formfy.providers.ts
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FORMFY_CONFIG, FormfyConfig } from '../config/formfy.config';

export function provideFormfy(config: FormfyConfig) {
    return [
        { provide: FORMFY_CONFIG, useValue: config },
        provideHttpClient(withInterceptorsFromDi())
    ];
}

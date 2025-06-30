// formfy.config.ts
import { InjectionToken } from '@angular/core';

export interface FormfyConfig {
    apiKey: string;
    projectId: string;
    baseUrl?: string;
}

export const FORMFY_CONFIG = new InjectionToken<FormfyConfig>('FORMFY_CONFIG');

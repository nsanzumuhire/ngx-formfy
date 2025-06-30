import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { FORMFY_CONFIG, FormfyConfig } from '../config/formfy.config';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormfyService {
    constructor(
        private http: HttpClient,
        @Inject(FORMFY_CONFIG) private config: FormfyConfig
    ) { }

    getFormSchema(formName: string): Observable<any> {
        // TODO: make this configurable and make sure to add testing /production envs
        const baseUrl = this.config.baseUrl || 'http://localhost:5000';

        const url = `${baseUrl}/api/forms/${this.config.projectId}/${formName}/schema`;
        const headers = { 'x-api-key': `${this.config.apiKey}` };
        return this.http.get(url, { headers });
    }
}
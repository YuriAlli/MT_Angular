import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from "rxjs";

import { environment } from 'src/environments/environment';
import { Localstorage } from '../utils/localstorage';

export abstract class BaseService {
    
    public LocalStorage = new Localstorage();
    protected UrlServiceV1: string = environment.apiUrl

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Erro Interno");
                response.error.errors = customError;
            }
        }

        console.error(response);
        return throwError(response);
    }
}
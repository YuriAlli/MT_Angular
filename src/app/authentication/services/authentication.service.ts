import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

constructor(private http: HttpClient) {
  super();
}

registrarUsuario(user: User): Observable<User> {
  let response = this.http
      .post(this.UrlServiceV1 + 'new', user, this.ObterHeaderJson())
      .pipe(
          map(this.extractData),
          catchError(this.serviceError));

  return response;
}

login(user: User): Observable<User> {
  let response = this.http
      .post(this.UrlServiceV1 + 'login', user, this.ObterHeaderJson())
      .pipe(
          map(this.extractData),
          catchError(this.serviceError));

  return response;
}

}

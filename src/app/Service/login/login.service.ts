import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.model';


const SITE_BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  loginHttpService(login:Login): Observable<HttpResponse<any>>{
    return this.httpClient.post<HttpResponse<any>>(
      `${SITE_BASE_URL}/user/login`,login
    )
  }

}

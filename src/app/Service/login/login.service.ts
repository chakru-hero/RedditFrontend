import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { environment } from 'src/environments/environment';
import { SITE_BASE_URL } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  loginHttpService(login:Login): Observable<HttpResponse<any>>{
    return this.httpClient.post<HttpResponse<any>>(
      `${environment.apiSpringUrl}/user/login`,login,
      {observe:'response'}
    )

  }

}

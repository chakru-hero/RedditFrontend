import { HttpClient,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/models/signup.model';
const SITE_BASE_URL="http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient ) { }

  signupHttpService(signup:Signup):Observable<HttpResponse<any>>{
    return this.httpClient.post<HttpResponse<any>>(
      `${SITE_BASE_URL}/user/signup`,signup,
      {observe:'response'}
    )
  }
}

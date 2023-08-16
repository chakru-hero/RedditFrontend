import {Component, Input} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Service/login/login.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent  {

      constructor(
         private loginService : LoginService,
       ) { }

hide=true;
email = new FormControl('', [Validators.required, Validators.email]);
username : string ="";
password : string ="";


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  login():void{
  
    this.loginService.loginHttpService({
     username : this.username,
     password : this.password
    }).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
    this.clear();
  }

  clear(){
    this.username ="";
    this.password = "";
    this.hide = true;
    }

}

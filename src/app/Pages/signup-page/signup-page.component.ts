import { Component } from '@angular/core';
import { FormControl,Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from 'src/app/Service/signup/signup.service';
import { Signup } from 'src/app/models/signup.model';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'form-field-error-example',
  // selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent  {

      constructor(
         private signupService : SignupService,
         private router:Router,
       ) { }

       hide=true;
       email = new FormControl('', [Validators.required, Validators.email]);
       username : string ="";
       password : string ="";
      //  signupObj : Signup | undefined;

       getErrorMessage() {
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
      }
      signup() : void{
        this.signupService.signupHttpService({
          email : this.email.value! ,
          username : this.username,
          password : this.password
        }).subscribe({
          next : (response)=>{
            if(response.status==201){
              this.router.navigate(['/login']);
            }
          },
          error : (error)=>{
            alert("try again");
            this.router.navigate(['/register'])
          }
        });
      }
}

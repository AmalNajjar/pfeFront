import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { SignUpInfo } from '../sign-up-info';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form:any={};
  isSignUpFailed=false;
  errorMessage=''; 
  Signupinfo!: SignUpInfo;
   
  isSuccessful = false;
  constructor(private authservice :AuthService,private router:Router)
{ }

  ngOnInit(): void {
  }
  onSubmit(){
   //this.Signupinfo=new SignUpInfo(this.form.username,this.form.email,this.form.password);
   this.authservice.register(this.form).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      err=>{
        this.errorMessage=err.error.messsage;
        this.isSignUpFailed=true;
        
  
    }
   )

  }
  

}

  



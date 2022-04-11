import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { LoginInfo } from '../login-info';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //user = new User();

  //erreur: number=0;
form:any={};
isLoginFailed=false;
errorMessage='';   
  constructor(private authService : AuthService,
              public router: Router,private token:TokenService) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.authService.login(new LoginInfo(this.form.username,this.form.password))
  .pipe(first()).subscribe(
    data=>{
      this.isLoginFailed=false;
      this.router.navigateByUrl('/gestionDirection')
    },
    error=>{
      this.errorMessage=error.error.messsage;
      this.isLoginFailed=true;

  })

  
}
  //onLoggedin()
  //{
    //this.authService.getUserFromDB(this.user.username).subscribe((usr:User) => {
      //if (usr.password==this.user.password){
        //this.authService.signIn(usr);
        //this.router.navigate(['/gestionDirection']);
        //}
        //else
        //this.erreur = 1;
        //},(err) => console.log(err));
        //}
        

 }



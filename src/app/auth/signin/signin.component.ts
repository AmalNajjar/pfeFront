import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormBuilder()
  }
  private initFormBuilder(): void{
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(4)]],
    })
  }
  public errorMessage(formControlName: string, email?: boolean): string | void {
    if (this.signinForm.controls[formControlName]?.errors?.required){
      return 'Champ obligatoire'
    }
  }
  public signin(): void {
    console.error("Signin");
  }
}
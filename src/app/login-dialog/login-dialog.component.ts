import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private dialogRef: MatDialogRef<AuthenticationService> 
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  hide = true;

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }

    // this.authService.login(this.loginForm.value).subscribe(res => alert(res.message));
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          // console.log(res.message);
          
          this.loginForm.reset();
          this.dialogRef.close('save');
          alert(res.message);
          this.route.navigate(['Doctor']);
        },
        error: (err) => {
          alert(err.message);
        }
      })
    }
  }

}

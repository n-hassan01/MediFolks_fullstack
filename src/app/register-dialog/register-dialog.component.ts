import { MatDialogRef } from '@angular/material/dialog';
import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  registerForm! : FormGroup;

  subjects = [
    'Heart',
    'Kidney',
    'ENT',
    'Dental',
    'Medicine',
    'Eye',
    'Gyne',
    'Nutrition',
    'Rheumatology',
    'Diabetese',
    'Orthopedics',
    'Neurology',
    'Psychiatry'

  ]

  hide = true;
  
  constructor(private signup: SignupService, private dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      expertise: new FormControl('', [Validators.required]),
      certificate_no: new FormControl('', [Validators.required]),
    })
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  addDoctor(){
    if(this.registerForm.valid){
      this.signup.addDoctor(this.registerForm.value)
      .subscribe({
        next: (res) => {
          alert(res.message);
          console.log(res.message);
          
          this.registerForm.reset();
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert('error!');
        }
      })
    }
    console.log(this.registerForm.value);
  }

}

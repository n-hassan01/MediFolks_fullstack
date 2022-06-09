import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {

  requestForm!: FormGroup;

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

  constructor(private request: RequestService, private dialogRef: MatDialogRef<RequestDialogComponent>) { }

  ngOnInit(): void {
    this.requestForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    })
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  onSubmit(){
    if(this.requestForm.valid){
      this.request.makeRequest(this.requestForm.value)
      .subscribe({
        next: (res) => {
          alert('Your request accepted');
          
          this.requestForm.reset();
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert('error!');
        }
      })
  }
  }
}

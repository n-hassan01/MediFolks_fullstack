import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  volunteers = [
    'Doctors',
    'Clinics',
    'Hospitals',
    'NGOs'
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '30%',
    });
  }
  
}

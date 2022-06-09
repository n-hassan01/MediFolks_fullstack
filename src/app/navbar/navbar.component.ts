import { Component, OnInit } from '@angular/core';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faRightToBracket = faRightToBracket;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '20%',
    });
  }

}

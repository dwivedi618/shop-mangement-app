
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-with-action',
  templateUrl: './alert-with-action.component.html',
  styleUrls: ['./alert-with-action.component.scss']
})
export class AlertWithActionComponent implements OnInit {
  local_data: string;
  message: any;
  alertTitle: any;

  status: number;
  action: any;

  constructor(
    public snackBar: MatDialog,
    public snackBarRef: MatDialogRef<AlertWithActionComponent>,

    @Optional() @Inject(MAT_DIALOG_DATA) public data: string) { 
      // this.local_data = data;
      if(data){
        this.message = data['message'];
        this.action = data['action'] ;
        this.alertTitle = data['alertTitle']  ;

      }
      console.log(data,this.alertTitle,this.message,this.action);

    }



  ngOnInit(): void {
  }
 
}
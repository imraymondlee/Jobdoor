import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  title:string;
  body:string;

  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.title = data.title;
    this.body = data.body;
  }

  ngOnInit() {
  }

  accept() {
      this.dialogRef.close(true);
  }

  cancel() {
      this.dialogRef.close();
  }

}

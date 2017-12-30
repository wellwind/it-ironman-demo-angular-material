import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPostConfirmDialogComponent } from '../add-post-confirm-dialog/add-post-confirm-dialog.component';

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.css']
})
export class AddPostDialogComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  doPost() {
    this.dialog.open(AddPostConfirmDialogComponent);
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { AfterPostNotifyComponent } from '../after-post-notify/after-post-notify.component';

@Component({
  selector: 'app-add-post-confirm-dialog',
  templateUrl: './add-post-confirm-dialog.component.html',
  styleUrls: ['./add-post-confirm-dialog.component.css']
})
export class AddPostConfirmDialogComponent implements OnInit {
  get title(){
    return this.data.title;
  }
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any, private snackBar: MatSnackBar) {}

  ngOnInit() {}

  confirm() {
    this.dialog.closeAll();
    this.snackBar.open('已新增部落格文章', '我知道了');
    this.snackBar.openFromComponent(AfterPostNotifyComponent);
  }
}

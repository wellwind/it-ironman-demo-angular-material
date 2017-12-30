import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-after-post-notify',
  templateUrl: './after-post-notify.component.html',
  styleUrls: ['./after-post-notify.component.css']
})
export class AfterPostNotifyComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  closeSnackBar() {
    this.snackBar.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  progress = 60;
  strokeWidth = 1;
  diameter = 100;
  posts$: Observable<any>;

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.posts$ = this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .map(posts => {
        return posts.slice(0, 6);
      })
      .delay(1500);

    this.dialog.afterAllClosed.subscribe(() => {
      console.log('目前已經沒有dialog了');
    });

    this.dialog.afterOpen.subscribe((dialogRef: MatDialogRef<any>) => {
      console.log(`新的dialog已開啟：${dialogRef.id}`);
      console.log(`目前已開啟 ${this.dialog.openDialogs.length} 個dialog了`);
    });
  }

  showAddPostDialog() {
    this.dialog.open(AddPostDialogComponent);
  }
}

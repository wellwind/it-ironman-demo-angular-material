import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  emailsDataSource = new MatTableDataSource<any>();
  totalCount: number;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1').subscribe(data => {
      this.totalCount = data.items.length;
      this.emailsDataSource.data = data.items;
      this.emailsDataSource.paginator = this.paginator;
    });
  }

  replay(emailRow) {
    console.log('回覆信件', emailRow);
  }

  delete(emailRow) {
    console.log('刪除信件', emailRow);
  }
}

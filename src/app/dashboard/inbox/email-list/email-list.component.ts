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
    this.getIssuees(0, 10);

    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      this.getIssuees(page.pageIndex, page.pageSize);
    });
  }

  getIssuees(pageIndex, pageSize) {
    this.httpClient
      .get<any>(`https://api.github.com/search/issues?q=repo:angular/material2&page=${pageIndex + 1}&per_page=${pageSize}`)
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource.data = data.items;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }

  replay(emailRow) {
    console.log('回覆信件', emailRow);
  }

  delete(emailRow) {
    console.log('刪除信件', emailRow);
  }
}

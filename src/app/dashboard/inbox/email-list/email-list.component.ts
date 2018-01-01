import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, PageEvent, MatSort, Sort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;

  currentPage: PageEvent;
  currentSort: Sort;
  currentFilterData: string;
  emailsDataSource = new MatTableDataSource<any>();
  totalCount: number;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getIssuees();

    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage = page;
      this.getIssuees();
    });

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => {
        // 準備要提供給API的filter資料
        this.currentFilterData = (this.filter.nativeElement as HTMLInputElement).value;
        this.getIssuees();
        // 後端篩選就不需要指定filter了
        // this.emailsDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
      });

    // 後端篩選就用不到filterPredicate了
    // this.emailsDataSource.filterPredicate = (data: any, filter: string): boolean => {
    //   return data.title.indexOf(filter) !== -1;
    // };
  }

  changeSort(sortInfo: Sort) {
    if (sortInfo.active === 'created_at') {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssuees();
  }

  getIssuees() {
    const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    if (this.currentSort.direction) {
      targetUrl = `${targetUrl}&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }
    if (this.currentFilterData) {
      targetUrl = `${targetUrl}&q=${this.currentFilterData}+in:title`;
    }
    this.httpClient.get<any>(targetUrl).subscribe(data => {
      this.totalCount = data.total_count;
      this.emailsDataSource.data = data.items;
      // 從後端進行排序時，不用指定sort
      // this.emailsDataSource.sort = this.sortTable;
      // 從後端取得資料時，就不用指定data srouce的paginator了
      // this.emailsDataSource.paginator = this.paginator;
    });
  }

  reply(emailRow) {
    console.log('回覆信件', emailRow);
  }

  delete(emailRow) {
    console.log('刪除信件', emailRow);
  }
}

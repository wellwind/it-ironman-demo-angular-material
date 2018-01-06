import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-observe-content-demo',
  templateUrl: './cdk-observe-content-demo.component.html',
  styleUrls: ['./cdk-observe-content-demo.component.css']
})
export class CdkObserveContentDemoComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit() {}

  projectContentChanged($event: MutationRecord[]) {
    ++this.count;
    console.log(`資料變更，第${this.count}次`);
    console.log($event);
  }
}

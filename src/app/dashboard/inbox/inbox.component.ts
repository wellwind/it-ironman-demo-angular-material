import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  tabIndex = 0;
  constructor() {}

  ngOnInit() {}

  tabFocusChange($event: MatTabChangeEvent) {
    console.log(`focus變更，index：${$event.index}`);
  }

  tabSelectedIndexChange($event: number) {
    console.log(`selectedIndex變更，index：${$event}`);
  }

  tabSelectedTabChange($event: MatTabChangeEvent) {
    console.log(`selectedTab變更，index：${$event.index}`);
  }
}

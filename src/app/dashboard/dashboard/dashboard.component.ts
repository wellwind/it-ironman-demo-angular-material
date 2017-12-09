import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
      console.log(`選單狀態：${result.type}`);
    });
  }

  opened() {
    console.log('芝麻開門');
  }

  closed() {
    console.log('芝麻關門');
  }
}

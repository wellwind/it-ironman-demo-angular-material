import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult, MatSidenavContent } from '@angular/material';
import { Direction } from '@angular/cdk/bidi';
import { Observable } from 'rxjs/Observable';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bidiMode = 'ltr';
  theme = 'custom-theme-1';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    // const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    // console.log(`小螢幕(600px以下)？${isSmallScreen}`);

    this.breakpointObserver.observe('(orientation: portrait)').subscribe(result => {
      console.log(`portrait: ${result.matches}`);
    });
    this.breakpointObserver.observe('(orientation: landscape)').subscribe(result => {
      console.log(`landscape: ${result.matches}`);
    });

    this.breakpointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait]).subscribe(result => {
      console.log(`Handset: ${result.matches}`);
    });

    console.log(this.scrollDispatcher.scrollContainers);
    this.scrollDispatcher.scrolled(1000).subscribe((scrollable: CdkScrollable) => {
      console.log('發生scroll了，來源為：');
      console.log(scrollable.getElementRef());
    });

    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  toggleTheme() {
    const originalTheme = this.theme;
    this.theme = this.theme === 'custom-theme-1' ? 'custom-theme-2' : 'custom-theme-1';
    this.overlayContainer.getContainerElement().classList.remove(originalTheme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: any) => {
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

  logDirChange($event: Direction) {
    console.log(`dir被改變了 => ${$event}`);
  }
}

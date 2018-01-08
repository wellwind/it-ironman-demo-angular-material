import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import { MatTabChangeEvent, MatButton } from '@angular/material';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  @ViewChild('overlayMenuList') overlayMenuList: TemplateRef<any>;
  @ViewChild('originFab') originFab: MatButton;
  overlayRef: OverlayRef;
  tabIndex = 0;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    const strategy = this.overlay
      .position()
      // .connectedTo(this.originFab._elementRef, { originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' });
      .global()
      .width('500px')
      .height('100px')
      .centerHorizontally()
      .centerVertically();


    const config = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: strategy
    });
    this.overlayRef = this.overlay.create(config);

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }

  displayMenu() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(new TemplatePortal(this.overlayMenuList, this.viewContainerRef));
    }
  }

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

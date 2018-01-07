import { AfterViewChecked, Component, OnInit, ViewChild, ViewChildren, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatIconRegistry, MatRipple } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Portal, CdkPortal, TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Portal4Component } from './portal4/portal4.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(MatRipple) ripple: MatRipple;
  @ViewChildren(CdkPortal) templatPortals: QueryList<CdkPortal>;
  @ViewChild('template') template3: TemplateRef<any>;
  currentPortal: Portal<any>;
  displayFocusTrap = false;
  displayContent = 999;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg')
    );

    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.ripple.launch(0, 0);
  }

  triggerRipple() {
    const point1 = this.ripple.launch(0, 0, { color: 'pink', centered: true, persistent: true, radius: 50 });
    const point2 = this.ripple.launch(0, 0, { color: 'yellow', centered: true, persistent: true, radius: 20 });

    setTimeout(() => {
      point1.fadeOut();
    }, 500);
  }

  clearRipple() {
    this.ripple.fadeOutAll();
  }

  changePortal1() {
    this.currentPortal = this.templatPortals.first;
  }

  changePortal2() {
    this.currentPortal = this.templatPortals.last;
  }

  changePortal3() {
    // 使用TemplatePortal把一般的TemplateRef包裝起來
    this.currentPortal = new TemplatePortal(this.template3, this.viewContainerRef);

  changePortal4() {
    this.currentPortal = new ComponentPortal(Portal4Component);
  }
}

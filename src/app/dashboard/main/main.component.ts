import {
  AfterViewChecked,
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  TemplateRef,
  ViewContainerRef,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  Inject
} from '@angular/core';
import { MatIconRegistry, MatRipple } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Portal, CdkPortal, TemplatePortal, ComponentPortal, PortalInjector, CdkPortalOutlet, DomPortalOutlet } from '@angular/cdk/portal';
import { Portal4Component, PORTAL4_INJECT_DATA } from './portal4/portal4.component';
import { DOCUMENT } from '@angular/common';
import { Platform, getSupportedInputTypes } from '@angular/cdk/platform';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(MatRipple) ripple: MatRipple;
  @ViewChildren(CdkPortal) templatPortals: QueryList<CdkPortal>;
  @ViewChild('template') template3: TemplateRef<any>;
  name = 'wellwind';
  currentPortal: Portal<any>;
  displayFocusTrap = false;
  displayContent = 999;
  domPortalOutlet: DomPortalOutlet;
  supportInputTypes = getSupportedInputTypes();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    public platform: Platform
  ) {}

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
    this.templatPortals.first.context = { nameInObject: this.name };
    this.currentPortal = this.templatPortals.first;
  }

  changePortal2() {
    this.currentPortal = this.templatPortals.last;
  }

  changePortal3() {
    // 使用TemplatePortal把一般的TemplateRef包裝起來
    this.currentPortal = new TemplatePortal(this.template3, this.viewContainerRef, { nameInObject: this.name });
  }

  changePortal4() {
    this.currentPortal = new ComponentPortal(Portal4Component, undefined, this._createInjector());
  }

  private _createInjector(): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(PORTAL4_INJECT_DATA, { nameInObject: this.name });

    return new PortalInjector(this.injector, injectionTokens);
  }

  createOutletOutOfApp() {
    const element = this.document.createElement('div');
    element.innerHTML = '<br>我在&ltapp-root&gt;之外';
    this.document.body.appendChild(element);
    this.domPortalOutlet = new DomPortalOutlet(element, this.componentFactoryResolver, this.appRef, this.injector);
  }

  addTemplatePortal() {
    this.domPortalOutlet.attachTemplatePortal(this.templatPortals.last);
  }
}

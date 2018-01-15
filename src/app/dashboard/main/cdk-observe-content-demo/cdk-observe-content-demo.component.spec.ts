import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkObserveContentDemoComponent } from './cdk-observe-content-demo.component';

describe('CdkObserveContentDemoComponent', () => {
  let component: CdkObserveContentDemoComponent;
  let fixture: ComponentFixture<CdkObserveContentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkObserveContentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkObserveContentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

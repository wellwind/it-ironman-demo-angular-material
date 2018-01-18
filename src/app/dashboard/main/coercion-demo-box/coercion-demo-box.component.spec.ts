import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoercionDemoBoxComponent } from './coercion-demo-box.component';

describe('CoercionDemoBoxComponent', () => {
  let component: CoercionDemoBoxComponent;
  let fixture: ComponentFixture<CoercionDemoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoercionDemoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoercionDemoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

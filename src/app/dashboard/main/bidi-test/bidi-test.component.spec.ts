import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidiTestComponent } from './bidi-test.component';

describe('BidiTestComponent', () => {
  let component: BidiTestComponent;
  let fixture: ComponentFixture<BidiTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidiTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

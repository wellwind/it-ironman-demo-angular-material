import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Portal4Component } from './portal4.component';

describe('Portal4Component', () => {
  let component: Portal4Component;
  let fixture: ComponentFixture<Portal4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Portal4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Portal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

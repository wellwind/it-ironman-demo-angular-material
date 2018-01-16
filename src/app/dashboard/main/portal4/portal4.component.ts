import { Component, OnInit, InjectionToken, Inject } from '@angular/core';

export const PORTAL4_INJECT_DATA = new InjectionToken<any>('portal4-inject-data');

@Component({
  selector: 'app-portal4',
  templateUrl: './portal4.component.html',
  styleUrls: ['./portal4.component.css']
})
export class Portal4Component implements OnInit {
  get name() {
    return this.data.nameInObject;
  }

  constructor(@Inject(PORTAL4_INJECT_DATA) private data: any) {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-coercion-demo-box',
  templateUrl: './coercion-demo-box.component.html',
  styleUrls: ['./coercion-demo-box.component.css']
})
export class CoercionDemoBoxComponent implements OnInit {
  private _display: boolean;

  @Input()
  get display(): boolean {
    return this._display;
  }
  set display(value: boolean) {
    console.log(value);
    this._display = coerceBooleanProperty(value);
  }

  constructor() {}

  ngOnInit() {}
}

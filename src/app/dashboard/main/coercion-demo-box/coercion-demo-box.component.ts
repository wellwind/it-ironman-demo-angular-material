import { Component, OnInit, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';

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

  private _height: number;

  @Input()
  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = coerceNumberProperty(value);
  }

  constructor() {}

  ngOnInit() {}
}

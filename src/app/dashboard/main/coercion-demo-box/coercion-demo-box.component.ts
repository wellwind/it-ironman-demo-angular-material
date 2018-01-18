import { Component, OnInit, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty, coerceArray } from '@angular/cdk/coercion';

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

  private _values: string[];

  @Input()
  get values(): string[] {
    return this._values;
  }

  set values(value: string[]) {
    this._values = coerceArray<string>(value);
  }

  constructor() {}

  ngOnInit() {}
}

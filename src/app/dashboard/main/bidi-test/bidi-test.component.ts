import { Component, OnInit } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-bidi-test',
  templateUrl: './bidi-test.component.html',
  styleUrls: ['./bidi-test.component.css']
})
export class BidiTestComponent implements OnInit {
  constructor(private directionality: Directionality) {}

  ngOnInit() {
    console.log(`目前dir: ${this.directionality.value}`);
    this.directionality.change.subscribe((dir: Direction) => {
      console.log(`component的dir被改變了: ${dir}`);
    });
  }
}

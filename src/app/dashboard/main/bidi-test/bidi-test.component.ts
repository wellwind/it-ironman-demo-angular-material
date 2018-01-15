import { Component, OnInit, ElementRef } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-bidi-test',
  templateUrl: './bidi-test.component.html',
  styleUrls: ['./bidi-test.component.css']
})
export class BidiTestComponent implements OnInit {
  constructor(private directionality: Directionality, private scrollDispatcher: ScrollDispatcher, private elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.scrollDispatcher.getAncestorScrollContainers(this.elementRef));
    this.scrollDispatcher.ancestorScrolled(this.elementRef, 1000).subscribe((scrollable: CdkScrollable) => {
      console.log('祖先發生scroll了，來源為：');
      console.log(scrollable.getElementRef());
    });

    console.log(`目前dir: ${this.directionality.value}`);
    this.directionality.change.subscribe((dir: Direction) => {
      console.log(`component的dir被改變了: ${dir}`);
    });
  }
}

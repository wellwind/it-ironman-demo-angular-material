import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule]
})
export class SharedMaterialModule {}

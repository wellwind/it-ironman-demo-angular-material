import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule } from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatIconModule, MatButtonModule, MatButtonToggleModule, MatRippleModule]
})
export class SharedMaterialModule {}

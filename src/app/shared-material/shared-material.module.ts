import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule], // 先import
  exports: [MatButtonModule] // 在export
})
export class SharedMaterialModule {}

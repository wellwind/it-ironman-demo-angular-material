import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedMaterialModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

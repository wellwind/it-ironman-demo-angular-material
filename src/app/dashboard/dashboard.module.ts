import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { AddPostDialogComponent } from './blog/add-post-dialog/add-post-dialog.component';
import { AddPostConfirmDialogComponent } from './blog/add-post-confirm-dialog/add-post-confirm-dialog.component';
import { AfterPostNotifyComponent } from './blog/after-post-notify/after-post-notify.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailListComponent } from './inbox/email-list/email-list.component';
import { SurveyInputDirective } from './survey/survey-input.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DashboardRoutingModule, SharedMaterialModule],
  declarations: [
    DashboardComponent,
    MainComponent,
    SurveyComponent,
    BlogComponent,
    AddPostDialogComponent,
    AddPostConfirmDialogComponent,
    AfterPostNotifyComponent,
    InboxComponent,
    EmailListComponent,
    SurveyInputDirective
  ],
  exports: [DashboardComponent],
  entryComponents: [AddPostDialogComponent, AddPostConfirmDialogComponent, AfterPostNotifyComponent]
})
export class DashboardModule {}

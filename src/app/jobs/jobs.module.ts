import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListJobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [ListJobsComponent]
})
export class JobsModule { }

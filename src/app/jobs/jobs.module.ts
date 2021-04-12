import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { CardJobComponent } from './card-job/card-job.component';

@NgModule({
  declarations: [ListJobsComponent, CardJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  exports: [ListJobsComponent, CardJobComponent]
})
export class JobsModule { }

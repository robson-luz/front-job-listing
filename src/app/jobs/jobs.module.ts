import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { CardJobComponent } from './card-job/card-job.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListJobsComponent, CardJobComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [ListJobsComponent, CardJobComponent]
})
export class JobsModule { }

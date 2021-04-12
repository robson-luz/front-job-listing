import { DomSanitizer } from '@angular/platform-browser';
import { Job } from './../model/jobs.model';
import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobsData: Job;

  constructor(private jobsService: JobsService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  sanitize(base64string)
  {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ base64string);
  }

  private loadJobs() {
    this.jobsService.listJobs().subscribe(data => {
      this.jobsData = data;
    });
  }

}

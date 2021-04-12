import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full'},
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then(module => module.JobsModule)
  },
  {
    path: 'people',
    loadChildren: async () => (await import('./people/people.module')).PeopleModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

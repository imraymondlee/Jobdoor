import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { AllJobsComponent } from './components/all-jobs/all-jobs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post-job', component: PostJobComponent },
  { path: 'all-jobs', component: AllJobsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

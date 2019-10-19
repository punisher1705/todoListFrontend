import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashViewComponent } from './dash-view/dash-view.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [DashViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([ 
      { path: 'dash', component: DashViewComponent }
    ]),
  ]
})
export class DashboardModule { }

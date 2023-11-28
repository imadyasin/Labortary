import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BookslotComponent } from './bookslot/bookslot.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
   },
  {
    path:'mainpage',
    component:MainpageComponent
  },
  {
    path:'report',
    component:ReportComponent
  },

  {
    path:'bookslot',
    component:BookslotComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

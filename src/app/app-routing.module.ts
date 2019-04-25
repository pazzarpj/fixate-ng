import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionCardComponent } from './instruction-card/instruction-card.component'
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

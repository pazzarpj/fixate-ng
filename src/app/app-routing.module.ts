import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionCardComponent } from './instruction-card/instruction-card.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestRunnerComponent } from './test-runner/test-runner.component'
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'testrunner',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TestRunnerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

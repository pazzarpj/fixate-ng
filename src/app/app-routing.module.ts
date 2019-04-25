import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRunnerComponent } from './test-runner/test-runner.component'
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component'

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
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TestRunnerComponent
      }
    ]

  },
  {
    path: '**',
    component: LayoutComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

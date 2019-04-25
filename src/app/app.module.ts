import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module'
import { CovalentModule } from './modules/covalent.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructionCardComponent } from './instruction-card/instruction-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TestRunnerComponent } from './test-runner/test-runner.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestTreeComponent } from './test-tree/test-tree.component';
import { MatTreeModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InstructionCardComponent,
    DashboardComponent,
    HeaderComponent,
    TestRunnerComponent,
    LayoutComponent,
    NotFoundComponent,
    TestTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CovalentModule,
    MatTreeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

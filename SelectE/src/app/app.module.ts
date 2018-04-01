import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EService } from './selectE.service';
import { ExpertsComponent } from './experts/experts.component'

@NgModule({
  declarations: [
    AppComponent,ExpertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     RouterModule,
    FormsModule,
    HttpModule,
  ],
  providers: [EService],
  bootstrap: [AppComponent]
})
export class AppModule { }

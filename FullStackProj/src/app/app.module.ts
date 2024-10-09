import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataCompComponent } from './Components/show-data-comp/show-data-comp.component';
import { AddCourseComponent } from './Components/add-course/add-course.component';

import { FormsModule} from '@angular/forms';
import { EditCourseComponent } from './Components/edit-course/edit-course.component'
@NgModule({
  declarations: [
    AppComponent,
    ShowDataCompComponent,
    AddCourseComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

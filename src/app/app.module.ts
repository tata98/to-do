import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './parent/to-do/to-do.component';
import { DoneComponent } from './parent/done/done.component';
import { InProgressComponent } from './parent/in-progress/in-progress.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, ToDoComponent, DoneComponent, InProgressComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

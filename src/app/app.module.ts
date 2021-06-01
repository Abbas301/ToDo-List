import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { HerosComponent } from './heros/heros.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HospitalComponent } from './hospital/hospital.component';
import { ChartsModule } from 'ng2-charts';
import { SearchPipe } from './search.pipe';
import { MoviesComponent } from './movies/movies.component';
import { SpinnerComponent } from './spinner/spinner.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputsComponent,
    AboutusComponent,
    LoginComponent,
    HerosComponent,
    HospitalComponent,
    SearchPipe,
    MoviesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

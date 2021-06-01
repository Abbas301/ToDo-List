import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HerosComponent } from './heros/heros.component';
import { HomeComponent } from './home/home.component';
import { HospitalComponent } from './hospital/hospital.component';
import { InputsComponent } from './inputs/inputs.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"inputs",component:InputsComponent},
  {path:"login",component:LoginComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"movies",component:MoviesComponent},
  {path:"heros",component:HerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

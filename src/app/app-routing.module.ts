import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOmeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
{path: 'home', component: HOmeComponent }, 
{path: 'alugar/:id/:number', component: ReserveComponent },
{path: 'adicionar/carro', component: CarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {RegisterComponent} from './register/register.component';
import {PokemonMapComponent} from './pokemon-map/pokemon-map.component';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'map', component: PokemonMapComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidRouteComponent } from '../../components/invalid-route/invalid-route.component';
import { CardsContainerComponent } from '../../components/cards-container/cards-container.component';
import { CardDetailsComponent } from '../../components/card-details/card-details.component';
import { SpellDetailsComponent } from '../../components/spell-details/spell-details.component';
import { TrapDetailsComponent } from '../../components/trap-details/trap-details.component';

const routes = [
  {path: '', component: CardsContainerComponent},
  {path: 'details/monster/:name', component: CardDetailsComponent},
  {path: 'details/spell/:name', component: SpellDetailsComponent},
  {path: 'details/trap/:name', component: TrapDetailsComponent},
  {path: '**', component: InvalidRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

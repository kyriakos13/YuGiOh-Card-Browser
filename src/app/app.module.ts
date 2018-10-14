import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './modules/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';
import { SpellDetailsComponent } from './components/spell-details/spell-details.component';
import { TrapDetailsComponent } from './components/trap-details/trap-details.component';
import { HttpCardsService } from './services/http-cards.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    CardsContainerComponent,
    CardComponent,
    CardDetailsComponent,
    InvalidRouteComponent,
    SpellDetailsComponent,
    TrapDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [HttpCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, ChangeDetectorRef, OnChanges, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../../services/card.service';
import { Card } from '../../common/models/card';
import { Router } from '@angular/router';
import { HttpCardsService } from '../../services/http-cards.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  cards: Observable<Card[]>;
  numOfCards: number;
  filter = false;

  constructor(
    private cardService: CardService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private httpCardService: HttpCardsService) { }

  // get only the card_name from mock-data
  ngOnInit() {
    this.cards = this.cardService.getAllCards();
    // this.updateCards();
  }
  redirect(card: Card) {
    const link = `/details/${card.card}/${card.name}`;
    this.router.navigate([link]);
  }

  toggle(event) {
    this.filter = !this.filter;
  }

  updateCards() {
    this.cards = this.cardService.cards;
  }

  update(event) {
    this.updateCards();
  }

  search(event) {
    this.updateCards();
  }
}

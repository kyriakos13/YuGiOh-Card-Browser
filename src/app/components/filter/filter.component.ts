import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardType } from '../../common/enums/card-type';
import { CardService } from '../../services/card.service';
import { HttpCardsService } from '../../services/http-cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: CardType[];
  monster: boolean;
  spell: boolean;
  trap: boolean;

  @Output() updateEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private cardService: CardService,
    private httpCardService: HttpCardsService
    ) { }

  ngOnInit() {
    this.categories = this.httpCardService.avalaibleTypes;
    this.prepareFilters();
  }

  update() {
    const arr = [];
    if (this.monster) {
      arr.push(CardType.Monster);
    }
    if (this.spell) {
      arr.push(CardType.Spell);
    }
    if (this.trap) {
      arr.push(CardType.Trap);
    }
    this.categories = arr;
    this.cardService.updateTypes(this.categories);
    this.updateEvent.emit(null);
  }

  toggleMonster() {
    this.monster = !this.monster;
    this.update();
  }
  toggleSpell() {
    this.spell = !this.spell;
    this.update();
  }
  toggleTrap() {
    this.trap = !this.trap;
    this.update();
  }

  private prepareFilters() {
    if (this.categories.includes(CardType.Monster)) {
      this.monster = false;
    }
    if (this.categories.includes(CardType.Spell)) {
      this.spell = false;
    }
    if (this.categories.includes(CardType.Trap)) {
      this.trap = false;
    }
  }
}

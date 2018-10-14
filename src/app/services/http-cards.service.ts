import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardType } from '../common/enums/card-type';
import { Card } from '../common/models/card';
import { Observable } from 'rxjs';
import { merge } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpCardsService {
  private api = 'http://52.57.88.137/api/card_data/';
  cards: Observable<Card[]>;
  allowedTypes = [CardType.Monster, CardType.Spell, CardType.Trap];
  avalaibleTypes: CardType[] = [CardType.Monster, CardType.Spell, CardType.Trap];

  constructor(
    private http: HttpClient
  ) { }

  getAllCards() {
   return this.http.get<Card[]>(this.api + 'all');
  }

  getByName(name: string): Observable<Card> {
    const replaced = name.replace(/ /g, '%20');
    const urlapi = this.api + replaced;
    console.log(urlapi);
    console.log(this.http.get<Card>(urlapi));
    return this.http.get<Card>(urlapi);
  }

}

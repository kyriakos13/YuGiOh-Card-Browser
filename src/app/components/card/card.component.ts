import { Component, OnInit, Input } from '@angular/core';
import { HttpCardsService } from '../../services/http-cards.service';
import { Card } from '../../common/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: Card;
  @Input('name') name: string;
  @Input('image') image: string;

  constructor( private http: HttpCardsService,) { }

  ngOnInit() {
    this.http.getByName(this.name)
      .subscribe((data: Card) => {
        this.card = data['data'];
      });

  }

}

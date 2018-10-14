import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { HttpCardsService } from '../../services/http-cards.service';
import { Observable } from 'rxjs';
import { Card } from '../../common/models/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  card: Card;
  constructor(
    private http: HttpCardsService,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.http.getByName(name)
      .subscribe((data: Card) => {
        this.card = data['data'];
      });
    this.confirmCard();
   console.log(this.card.name);
   console.log(this.card['data']);
  }

  private confirmCard() {
   // if (!this.card) {
    //  this.router.navigate(['/invalid']);
 //   }
}
}

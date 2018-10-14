import { Component, OnInit } from '@angular/core';
import { Card } from '../../common/models/card';
import { HttpCardsService } from '../../services/http-cards.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-trap-details',
  templateUrl: './trap-details.component.html',
  styleUrls: ['./trap-details.component.css']
})
export class TrapDetailsComponent implements OnInit {

  card: Card;
  constructor(
    private http: HttpCardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.http.getByName(name)
      .subscribe((data: Card) => {
        this.card = data['data'];
      });
    }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  text: string;
  @Output('toggleEvent') toggleEvent: EventEmitter<any> = new EventEmitter();
  @Output('searchEvent') searchEvent: EventEmitter<any> = new EventEmitter();
  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  toggle() {
    this.toggleEvent.emit('null');
  }

  search() {
    this.cardService.search(this.text);
    this.searchEvent.emit(null);
  }
}

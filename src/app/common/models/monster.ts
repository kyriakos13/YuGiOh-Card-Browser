import { Attribute } from '../enums/attributes';
import { Type } from '../enums/types';
import { Card } from './card';
import { CardType } from '../enums/card-type';

export class Monster extends Card { 
  name: string;
  card: CardType = CardType.Monster;

  constructor(name: string) {
    super();
    this.name = name;
  }

}

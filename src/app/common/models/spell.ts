import { SpellType } from '../enums/spell-types';
import { Card } from './card';
import { CardType } from '../enums/card-type';
export class Spell extends Card {
  name: string;
  image: string;
  text: string;
  property: SpellType;
  card: CardType = CardType.Spell;

  constructor(
    name: string,
    image: string,
    text: string,
    property: SpellType
    ) {
      super();
      this.name = name;
      this.image = image;
      this.text = text;
      this.property = property;
    }
}

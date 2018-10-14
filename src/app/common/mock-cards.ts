import { Monster } from './models/monster';
import { Card } from './models/card';
import { SpellType } from './enums/spell-types';
import { Spell } from './models/spell';
import {Trap} from './models/trap';
import { TrapType } from './enums/trap-types';

export const MockCards: Card[] = [
  new Monster('Infernoid Antra'),
  new Monster('Infernoid Attondel'),
  new Monster('Infernoid Decatron'),
  new Monster('Infernoid Devyaty'),
  new Monster('Infernoid Harmadik'),
  new Monster('Infernoid Onuncu'),
  new Monster('Infernoid Patrulea'),
  new Monster('Infernoid Pirmais'),
  new Monster('Infernoid Seitsemas'),
  new Spell('Burial from a Different Dimension', 'sdfsd', 'sdfsd', SpellType.Normal),
  new Spell('Charge of the Light Brigade', 'sdfsd', 'sdfsd', SpellType.Normal),
  new Monster('Lyla, Lightsworn Sorceress'),
  new Spell('Monster Gate', 'sdfsd', 'sdfsd', SpellType.Normal),
  new Spell('One for One', 'sdfsd', 'sdfsd', SpellType.Normal),
  new Monster('Raiden, Hand of the Lightsworn'),
  new Spell('Reasoning', 'sdfsd', 'sdfsd', SpellType.Normal),
  new Trap('Time-Space Trap Hole', '', '', TrapType.Normal),
  new Trap('Torrential Tribute', 'sdfsd', 'sdfsd', TrapType.Normal),
  new Spell('Upstart Goblin', 'sdfsd', 'sdfsd', SpellType.Normal),
  new Spell('Void Seer', 'sdfsd', 'sdfsd', SpellType.Normal),
];


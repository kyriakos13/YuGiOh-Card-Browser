import { TestBed, inject } from '@angular/core/testing';
import { HttpCardsService } from './http-cards.service';

describe('HttpCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCardsService]
    });
  });

  it('should be created', inject([HttpCardsService], (service: HttpCardsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return heroes', () => {
    const heroesRequest = service.getHeroes();
    heroesRequest.subscribe(( heroes ) => {
      expect(heroes.length).toBe(9);
    })
  });
});

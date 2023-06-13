import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardV2Component } from './pokemon-card-v2.component';

describe('PokemonCardV2Component', () => {
  let component: PokemonCardV2Component;
  let fixture: ComponentFixture<PokemonCardV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardV2Component]
    });
    fixture = TestBed.createComponent(PokemonCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

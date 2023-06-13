import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoPokemonComponent } from './equipo-pokemon.component';

describe('EquipoPokemonComponent', () => {
  let component: EquipoPokemonComponent;
  let fixture: ComponentFixture<EquipoPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoPokemonComponent]
    });
    fixture = TestBed.createComponent(EquipoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

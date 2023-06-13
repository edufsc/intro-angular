import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompraComponent } from './lista-compra.component';

describe('ListaCompraComponent', () => {
  let component: ListaCompraComponent;
  let fixture: ComponentFixture<ListaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCompraComponent]
    });
    fixture = TestBed.createComponent(ListaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

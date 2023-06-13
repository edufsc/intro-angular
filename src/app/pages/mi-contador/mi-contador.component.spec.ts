import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiContadorComponent } from './mi-contador.component';

describe('MiContadorComponent', () => {
  let component: MiContadorComponent;
  let fixture: ComponentFixture<MiContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiContadorComponent]
    });
    fixture = TestBed.createComponent(MiContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

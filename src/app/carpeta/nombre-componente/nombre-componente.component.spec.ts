import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreComponenteComponent } from './nombre-componente.component';

describe('NombreComponenteComponent', () => {
  let component: NombreComponenteComponent;
  let fixture: ComponentFixture<NombreComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreComponenteComponent]
    });
    fixture = TestBed.createComponent(NombreComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

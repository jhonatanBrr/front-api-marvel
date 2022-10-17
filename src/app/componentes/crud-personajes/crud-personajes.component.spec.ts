import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPersonajesComponent } from './crud-personajes.component';

describe('CrudPersonajesComponent', () => {
  let component: CrudPersonajesComponent;
  let fixture: ComponentFixture<CrudPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearPersonajeComponent } from './dialog-crear-personaje.component';

describe('DialogCrearPersonajeComponent', () => {
  let component: DialogCrearPersonajeComponent;
  let fixture: ComponentFixture<DialogCrearPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

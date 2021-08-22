import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraProductosComponent } from './registra-productos.component';

describe('RegistraProductosComponent', () => {
  let component: RegistraProductosComponent;
  let fixture: ComponentFixture<RegistraProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenciaIfComponent } from './sentencia-if.component';

describe('SentenciaIfComponent', () => {
  let component: SentenciaIfComponent;
  let fixture: ComponentFixture<SentenciaIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenciaIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenciaIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

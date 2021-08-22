import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenciaForComponent } from './sentencia-for.component';

describe('SentenciaForComponent', () => {
  let component: SentenciaForComponent;
  let fixture: ComponentFixture<SentenciaForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenciaForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenciaForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

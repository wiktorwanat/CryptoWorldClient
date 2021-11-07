import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyCardComponent } from './cryptocurrency-card.component';

describe('CryptocurrencyCardComponent', () => {
  let component: CryptocurrencyCardComponent;
  let fixture: ComponentFixture<CryptocurrencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

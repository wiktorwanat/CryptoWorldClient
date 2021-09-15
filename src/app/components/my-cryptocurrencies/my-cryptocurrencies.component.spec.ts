import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyCryptocurrenciesComponent} from './my-cryptocurrencies.component';

describe('MyCryptocurrenciesComponent', () => {
  let component: MyCryptocurrenciesComponent;
  let fixture: ComponentFixture<MyCryptocurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCryptocurrenciesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeFormComponent } from './exchange-form.component';

describe('ExchangeFormComponent', () => {
  let component: ExchangeFormComponent;
  let fixture: ComponentFixture<ExchangeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeFormComponent]
    });
    fixture = TestBed.createComponent(ExchangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input } from '@angular/core';
import { CurrencyModel } from '../core/models/Currency.interface';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  @Input() currencyInfo?: CurrencyModel;
  constructor() { }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, lastValueFrom } from 'rxjs';
import { CurrencyModel } from '../core/models/Currency.interface';
import { CurrencyService } from '../services/currency.service';
import { loadCurrencies, loadedCurrencies } from '../state/actions/currency.actions';
import { selectLoading, selectListCurrency } from '../state/selectors/currency.selectors';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  currencies:CurrencyModel[] = [];

  loading$: Observable<boolean> = new Observable();
  currencies$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
    private currencyService: CurrencyService) {
  }

  async ngOnInit(): Promise<void> {
    await this.loadCurrencies();
  }

  async loadCurrencies() {
    this.currencies = [];
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadCurrencies());

    let USDPrice: CurrencyModel = await lastValueFrom(this.currencyService.getCurrency('USD'));
    let BRLPrice: CurrencyModel = await lastValueFrom(this.currencyService.getCurrency('BRL'));

    this.currencies.push(USDPrice, BRLPrice);

    this.store.dispatch(loadedCurrencies(
      {currency: this.currencies}
    ));

    this.currencies$ = this.store.select(selectListCurrency);
  }
}

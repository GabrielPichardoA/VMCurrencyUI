import { CurrencyModel } from './../../core/models/Currency.interface';
import { createAction, props } from '@ngrx/store';

export const loadCurrencies = createAction(
  '[Currency list] Load currencies'
);

export const loadedCurrencies = createAction(
  '[Currency list] Loaded success',
  props<{ currency: CurrencyModel[] }>()
);

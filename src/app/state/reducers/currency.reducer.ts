import { createReducer, on } from '@ngrx/store';
import { loadCurrencies, loadedCurrencies } from '../actions/currency.actions';
import { CurrencyState } from 'src/app/core/models/Currency.state';

export const initialState: CurrencyState = { loading: false, currency: [] }

export const currencyReducer = createReducer(
  initialState,
  on(loadCurrencies, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedCurrencies, (state, currency) => {
    return { ...state, loading: false, currency: currency.currency }
  })
);

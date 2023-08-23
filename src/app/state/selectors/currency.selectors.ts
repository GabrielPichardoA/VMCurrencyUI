import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CurrencyState } from 'src/app/core/models/Currency.state';

export const selectCurrencyFeature = (state: AppState) => state.currency;

export const selectListCurrency = createSelector(
  selectCurrencyFeature,
  (state: CurrencyState) => state.currency
);

export const selectLoading = createSelector(
  selectCurrencyFeature,
  (state: CurrencyState) => state.loading
);

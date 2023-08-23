import { ActionReducerMap } from "@ngrx/store";
import { CurrencyModel } from "../core/models/Currency.interface";
import { CurrencyState } from "../core/models/Currency.state";
import { currencyReducer } from "./reducers/currency.reducer";

export interface AppState {
  currency: CurrencyState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  currency: currencyReducer
}

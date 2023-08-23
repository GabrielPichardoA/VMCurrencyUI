import { CurrencyModel } from "./Currency.interface";

export interface CurrencyState {
  loading:boolean,
  currency:ReadonlyArray<CurrencyModel>;
}

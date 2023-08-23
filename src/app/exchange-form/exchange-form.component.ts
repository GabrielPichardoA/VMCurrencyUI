import { ExchangeService } from './../services/exchange.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent {
  constructor(private fb: FormBuilder, private exchangeService: ExchangeService) {}
  exchangeModel?: any;
  exchangeServiceResponse?: any;
  error?: string;
  options: string[] = ['USD', 'BRL'];

  get userId() {
    return this.formPurchase.get('userId') as FormControl;
  }

  get currencyCode() {
    return this.formPurchase.get('currencyCode') as FormControl;
  }

  get amount() {
    return this.formPurchase.get('amount') as FormControl;
  }

  formPurchase = this.fb.group({
    'userId': ['', Validators.required],
    'currencyCode': ['', Validators.required],
    'amount': ['', [Validators.required, Validators.min(0)]]
  })

  async process() {
    this.exchangeModel = this.formPurchase.value;
    await this.exchangeService.doPurchase(this.exchangeModel).subscribe(data => {
      this.exchangeServiceResponse = data;
      this.error = '';
    },
    (error) => {
      this.exchangeServiceResponse = ''
      this.error = error;
    })
    console.log(this.exchangeServiceResponse)
  }
}

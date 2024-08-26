import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Pipe({
  name: 'CurrencyPipe',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  transform(
    value: number,
    locale: string,
    currency: string,
    currencyCode?: string,
    digitsInfo?: string
  ): string {
    return formatCurrency(value, locale, currency, currencyCode, digitsInfo);
  }
}

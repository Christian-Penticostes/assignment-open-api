import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';

@Controller('currency-converter')
export class CurrencyConverterController {
  constructor(private readonly currencyConverterService: CurrencyConverterService) {}

  @Post()
  async convert(
    @Body('amount') amount: number,
    @Body('from') from: string,
    @Body('to') to: string,
  ) {
    if (typeof amount !== 'number' || isNaN(amount) || amount <= 0) {
      return { error: 'Invalid amount provided.' };
    }

    try {
      const convertedAmount = await this.currencyConverterService.convertCurrency(
        amount,
        from,
        to,
      );
      return { amount: convertedAmount, from, to };
    } catch (error) {
      return { error: error.message };
    }
  }
}

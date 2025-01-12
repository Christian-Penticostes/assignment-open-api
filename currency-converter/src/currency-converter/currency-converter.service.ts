import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyConverterService {
  private readonly apiUrl = 'https://api.exchangeratesapi.io/v1/latest';
  private readonly apiKey = 'dd4abbf70a2c7b9c5938dd55dcb02996'; 

  async convertCurrency(
    amount: number,
    from: string,
    to: string,
  ): Promise<number> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          access_key: this.apiKey,
          symbols: `${from},${to}`, // Ensure both 'from' and 'to' rates are fetched
        },
      });

      const rates = response.data.rates;
      if (!rates[from] || !rates[to]) {
        throw new Error(`Unable to find rate for currencies: ${from} or ${to}`);
      }

      // Convert using both rates relative to the default base (EUR)
      const rateFrom = rates[from];
      const rateTo = rates[to];
      const conversionRate = rateTo / rateFrom;

      return amount * conversionRate;
    } catch (error) {
      throw new Error(`Error fetching conversion rates: ${error.message}`);
    }
  }
}

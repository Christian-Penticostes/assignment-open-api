import { CurrencyConverterService } from './currency-converter.service';
export declare class CurrencyConverterController {
    private readonly currencyConverterService;
    constructor(currencyConverterService: CurrencyConverterService);
    convert(amount: number, from: string, to: string): Promise<{
        amount: number;
        from: string;
        to: string;
        error?: undefined;
    } | {
        error: any;
        amount?: undefined;
        from?: undefined;
        to?: undefined;
    }>;
}

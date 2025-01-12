export declare class CurrencyConverterService {
    private readonly apiUrl;
    private readonly apiKey;
    convertCurrency(amount: number, from: string, to: string): Promise<number>;
}

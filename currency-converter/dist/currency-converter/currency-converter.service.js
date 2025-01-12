"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConverterService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let CurrencyConverterService = class CurrencyConverterService {
    constructor() {
        this.apiUrl = 'https://api.exchangeratesapi.io/v1/latest';
        this.apiKey = 'dd4abbf70a2c7b9c5938dd55dcb02996';
    }
    async convertCurrency(amount, from, to) {
        try {
            const response = await axios_1.default.get(this.apiUrl, {
                params: {
                    access_key: this.apiKey,
                    symbols: `${from},${to}`,
                },
            });
            const rates = response.data.rates;
            if (!rates[from] || !rates[to]) {
                throw new Error(`Unable to find rate for currencies: ${from} or ${to}`);
            }
            const rateFrom = rates[from];
            const rateTo = rates[to];
            const conversionRate = rateTo / rateFrom;
            return amount * conversionRate;
        }
        catch (error) {
            throw new Error(`Error fetching conversion rates: ${error.message}`);
        }
    }
};
exports.CurrencyConverterService = CurrencyConverterService;
exports.CurrencyConverterService = CurrencyConverterService = __decorate([
    (0, common_1.Injectable)()
], CurrencyConverterService);
//# sourceMappingURL=currency-converter.service.js.map
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyConverterService } from './currency-converter/currency-converter.service';
import { CurrencyConverterController } from './currency-converter/currency-converter.controller';

@Module({
  imports: [],
  controllers: [AppController, CurrencyConverterController],
  providers: [AppService, CurrencyConverterService],
})
export class AppModule {}

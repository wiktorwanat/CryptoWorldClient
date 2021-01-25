import { CryptocurrencyDetails } from './cryptocurrencyDetails.model';

export class Cryptocurrency{
    id !: string;
    name !: string;
    symbol !: string;
    actualPrice !: string;
    marketCap !: number;
    percent_change_1h !: number;
    percent_change_24h !: number;
    percent_change_7d !: number;
    volume24h !: number;
    cryptocurrencyDetails !: CryptocurrencyDetails;
}
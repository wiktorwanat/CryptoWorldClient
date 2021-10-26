
export class CryptocurrencyHistoricalValue{
  id !: string;
  historicalValues !: HistoricalValue[];
}

export class HistoricalValue{
  time !: string;
  value !: number;
}

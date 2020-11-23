import { coinData } from './CoinData.type';

export type CoinrankingapiRes = {
    data : {
        base: {
            sign: string,
            symbol: string
        },
        coins: coinData[],
        stats: {
            base: string
            limit: number,
            offset: number,
            order: string,
            total: number,
            total24hVolume: number,
            totalExchanges: number,
            totalMarketCap: number,
            totalMarkets: number,
        }
    },
    status: string
}
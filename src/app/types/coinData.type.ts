export type coinData = {
    "id": number,
    "uuid": string,
    "slug": string,
    "symbol": string,
    "name": string,
    "description": string,
    "color": string,
    "iconType": string,
    "iconUrl": string,
    "websiteUrl": string,
    "socials": 
        {
        "name": string,
        "url": string,
        "type": string
        }[],
    "links": {
        "name": string,
        "url": string,
        "type": string
        }[],
    "confirmedSupply": boolean,
    "numberOfMarkets": number,
    "numberOfExchanges": number,
    "type": string,
    "volume": number,
    "marketCap": number,
    "price": string,
    "circulatingSupply": number,
    "totalSupply": number,
    "approvedSupply": true,
    "firstSeen": number,
    "listedAt": number,
    "change": number,
    "rank": number,
    "history": string[],
    "allTimeHigh": {
        "price": string,
        "timestamp": number
    },
    "penalty": Boolean
}
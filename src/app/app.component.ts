import { Component } from '@angular/core';
import { coinData } from './types/CoinData.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto';


  dataArr: coinData[] = [
    {
      "id": 1,
      "uuid": "Qwsogvtv82FCd",
      "slug": "bitcoin-btc",
      "symbol": "BTC",
      "name": "Bitcoin",
      "description": "<p>Bitcoin (BTC) is the first decentralized digital currency that can be sent through the internet globally, without using an intermediary; such as financial institutions, like a (central) bank or agency. The Bitcoin transactions are controlled by many of its users, instead of a few entities. The processing of these transactions is called ‘mining’; new Bitcoin transactions, known as blocks, are added to the record of past transactions on the blockchain. In return, they get awarded with Bitcoin.</p>\n<h3>The goal of Bitcoin</h3>\n<p>Bitcoin was invented as a new electronic cash system that’s fully peer-to-peer, with no third party as an intermediary. Bitcoin was created because of a few main concerns of the inventor, like manipulation of the money supply, with inflation as result; profitable monopolies and oligopolies in financial services, such as the high fees for international money transfers; and tracking the money used by people.</p>\n<h3>Who built Bitcoin</h3>\n<p>In 2008, Bitcoin was invented by an anonymous person or group named Satoshi Nakamoto. In 2009, Bitcoin was released as open-source software. Nakamoto’s real identity is still unknown, although there are many theories about who it might be. Decentralization is one of Bitcoin’s most important principles, and that’s why this anonymity is perfectly in line.</p>\n<h3>The technology of Bitcoin</h3>\n<p>The Bitcoin blockchain is a database, the so-called ‘ledger’, that consists of Bitcoin transaction records. For new transactions to be added to the ledger, the nodes must agree that the transaction is real and valid. The blockchain is public and contains records of all the transactions taking place.</p>",
      "color": "#f7931A",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
      "websiteUrl": "https://bitcoin.org",
      "socials": [
        {
          "name": "r/bitcoin",
          "url": "https://www.reddit.com/r/bitcoin/",
          "type": "reddit"
        },
        {
          "name": "bitcoin/bitcoin",
          "url": "https://github.com/bitcoin/bitcoin",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "bitcoin.org",
          "type": "website",
          "url": "https://bitcoin.org"
        },
        {
          "name": "r/bitcoin",
          "url": "https://www.reddit.com/r/bitcoin/",
          "type": "reddit"
        },
        {
          "name": "bitcoin/bitcoin",
          "url": "https://github.com/bitcoin/bitcoin",
          "type": "github"
        },
        {
          "name": "blockchain.com",
          "url": "https://www.blockchain.com/explorer",
          "type": "explorer"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 19759,
      "numberOfExchanges": 327,
      "type": "coin",
      "volume": 25014908412,
      "marketCap": 278474162160,
      "price": "15021.5036275302",
      "circulatingSupply": 18538368,
      "totalSupply": 18538368,
      "approvedSupply": true,
      "firstSeen": 1330214400000,
      "listedAt": 1330214400,
      "change": -2.13,
      "rank": 1,
      "history": [
        "15348.191231599",
        "15446.6300066755",
        "15567.0743339388",
        "15484.058229308",
        "15378.0037113131",
        "15354.603654194",
        "15322.8169880141",
        "15478.3381936886",
        "15472.7197781632",
        "15545.9708002348",
        "15511.7680989959",
        "15498.3894633605",
        "15437.5401567316",
        "15390.2600613415",
        "15439.7005471411",
        "15409.0349090621",
        "15384.8589856469",
        "15298.3689155139",
        "15423.1713527891",
        "15448.9392916731",
        "15505.8539901769",
        "15632.1108884373",
        "15404.7822698933",
        "15298.4873130554",
        "15140.775243554",
        "14974.2673279431",
        "15021.5036275302"
      ],
      "allTimeHigh": {
        "price": "19500.47124838819",
        "timestamp": 1513555200000
      },
      "penalty": false
    },
    {
      "id": 2,
      "uuid": "razxDUgYGNAdQ",
      "slug": "ethereum-eth",
      "symbol": "ETH",
      "name": "Ethereum",
      "description": "<p>Ethereum (ETH) is a global, public decentralized blockchain designed to run peer-to-peer smart contracts. It allows developers to deploy all sorts of decentralized applications (Dapps), without the interference of third parties. Ethereum is also used for its own cryptocurrency ether. Ethereum is now the world’s second-most valued cryptocurrency platform.</p>\n<h3>The goal of Ethereum</h3>\n<p>Ethereum is created as a blockchain platform on which other applications could be built on top of. Most of the online services, businesses and enterprises are built on a centralized system of governance. Ethereum aims to decentralize the existing client-server model; servers and clouds are replaced by so-called nodes, run by volunteers from all over the world. Ethereum’s vision is that it would enable this same functionality to people anywhere around the world, enabling them to compete to offer services on top of this infrastructure.</p>\n<h3>Who built Ethereum</h3>\n<p>Ethereum was initially described in a white paper by Vitalik Buterin. In 2014, Buterin and the other co-founders launched a campaign where they sold ether (Ethereum tokens) to raise money to build their vision. Since the launch of the white paper in 2015, the platform has grown fast, and these days there are hundreds of developers involved.</p>",
      "color": "#3C3C3D",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
      "websiteUrl": "https://www.ethereum.org",
      "socials": [
        {
          "name": "ethereum",
          "url": "https://twitter.com/ethereum",
          "type": "twitter"
        },
        {
          "name": "ethereum",
          "url": "https://www.reddit.com/r/ethereum/",
          "type": "reddit"
        },
        {
          "name": "ethtrader",
          "url": "https://www.reddit.com/r/ethtrader/",
          "type": "reddit"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=428589.0",
          "type": "bitcointalk"
        },
        {
          "name": "YouTube",
          "url": "https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g",
          "type": "youtube"
        },
        {
          "name": "ethereumproject",
          "url": "https://facebook.com/ethereumproject",
          "type": "facebook"
        },
        {
          "name": "ethereum",
          "url": "https://github.com/ethereum",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.ethereum.org",
          "type": "website",
          "url": "https://www.ethereum.org"
        },
        {
          "name": "ethereum",
          "url": "https://twitter.com/ethereum",
          "type": "twitter"
        },
        {
          "name": "ethereum",
          "url": "https://www.reddit.com/r/ethereum/",
          "type": "reddit"
        },
        {
          "name": "ethtrader",
          "url": "https://www.reddit.com/r/ethtrader/",
          "type": "reddit"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=428589.0",
          "type": "bitcointalk"
        },
        {
          "name": "YouTube",
          "url": "https://www.youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g",
          "type": "youtube"
        },
        {
          "name": "ethereumproject",
          "url": "https://facebook.com/ethereumproject",
          "type": "facebook"
        },
        {
          "name": "ethereum",
          "url": "https://github.com/ethereum",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 14468,
      "numberOfExchanges": 317,
      "type": "coin",
      "volume": 9765089430,
      "marketCap": 49673736791,
      "price": "440.4870694906",
      "circulatingSupply": 112770022.62059024,
      "totalSupply": 113357024.4365,
      "approvedSupply": true,
      "firstSeen": 1438905600000,
      "listedAt": 1438905600,
      "change": -2.61,
      "rank": 2,
      "history": [
        "452.272596645",
        "455.0284948106",
        "457.3159927584",
        "454.6568974434",
        "452.147390218",
        "450.7622211515",
        "449.8537556906",
        "454.0749877889",
        "454.666793094",
        "456.0476302492",
        "455.3827565925",
        "454.0674361848",
        "452.5212905762",
        "451.1108922968",
        "452.2106093702",
        "451.2660435877",
        "449.8568656872",
        "446.3096122899",
        "449.5157963403",
        "451.73897639",
        "453.3434599084",
        "454.8173686107",
        "449.679038907",
        "447.0244649058",
        "443.5943362068",
        "438.3025284349",
        "440.4870694906"
      ],
      "allTimeHigh": {
        "price": "1353.5489580569788",
        "timestamp": 1515888000000
      },
      "penalty": false
    },
    {
      "id": 8,
      "uuid": "HIVsRcGKkPFtW",
      "slug": "tetherusd-usdt",
      "symbol": "USDT",
      "name": "Tether USD",
      "description": "<p>Tether (USDT) has pegged its USDT tokens to the price of the US dollar by using blockchain technology. Tether belongs to the category cryptocurrencies called stablecoins that aims to keep cryptocurrency valuations stable, in opposition to other cryptocurrencies, such as Bitcoin and Ethereum.</p>\n<h3>The goal of Tether</h3>\n<p>Tether was designed to build a bridge between cryptocurrencies and fiat currencies, with the benefits of cross-border payments facilitated by blockchain technology. Its purpose is to provide a token that represents a fiat currency at a 1:1 ratio, with in this case US dollar.</p>\n<h3>Who started Tether</h3>\n<p>In July 2014, Tether was first launched as RealCoin. Later it was rebranded as Tether in November 2014 by Tether Ltd., the company that is responsible for maintaining the reserve amounts of fiat currency. It started trading in February 2015. The project was initially founded by Bitcoin Foundation director Brock Pierce, software engineer Craig Sellars, and entrepreneur Reeve Collins.</p>",
      "color": "#22a079",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
      "websiteUrl": "https://tether.to/",
      "socials": [
        {
          "name": "tether_to",
          "url": "https://twitter.com/tether_to",
          "type": "twitter"
        },
        {
          "name": "r/tether",
          "url": "https://www.reddit.com/r/tether/",
          "type": "reddit"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/tether.to",
          "type": "facebook"
        }
      ],
      "links": [
        {
          "name": "www.linkedin.com",
          "url": "https://www.linkedin.com/company/tether",
          "type": "linkedin"
        },
        {
          "name": "tether.to",
          "url": "https://tether.to/",
          "type": "website"
        },
        {
          "name": "tether_to",
          "url": "https://twitter.com/tether_to",
          "type": "twitter"
        },
        {
          "name": "r/tether",
          "url": "https://www.reddit.com/r/tether/",
          "type": "reddit"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/tether.to",
          "type": "facebook"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 10385,
      "numberOfExchanges": 221,
      "type": "coin",
      "volume": 29719069913,
      "marketCap": 17288015885,
      "price": "1.001229234",
      "circulatingSupply": 17266790959.029747,
      "totalSupply": 17424900874.16,
      "approvedSupply": true,
      "firstSeen": 1420761600000,
      "listedAt": 1420761600,
      "change": 0.09,
      "rank": 3,
      "history": [
        "1.0002835483",
        "1.0008138688",
        "1.0003925229",
        "1.0000994314",
        "0.999650514",
        "0.9994966227",
        "0.9994461012",
        "0.9996966907",
        "1.0000247372",
        "1.0026327738",
        "1.0037800737",
        "1.0012607824",
        "1.0011800767",
        "1.0010623388",
        "1.0009964135",
        "1.0011852308",
        "1.0013077831",
        "1.0013358213",
        "1.0010175813",
        "1.0007159893",
        "1.0007234242",
        "1.0007215034",
        "1.0006405402",
        "0.9986530725",
        "1.0003062548",
        "1.001441332",
        "1.001229234"
      ],
      "allTimeHigh": {
        "price": "2.00000000065111",
        "timestamp": 1469145600000
      },
      "penalty": false
    },
    {
      "id": 3,
      "uuid": "-l8Mn2pVlRs-p",
      "slug": "xrp-xrp",
      "symbol": "XRP",
      "name": "XRP",
      "description": "<p>Ripple is both a digital currency (XRP) and an open payment network within which that currency is transferred. Ripple connects banks from all around the world, to provide immediate cross-border transactions with fewer intermediaries. Ripple aims to provide both parties an end-to-end visibility throughout the transactions. The main purpose of XRP is to make it possible to exchange cryptocurrencies and fiat.</p>\n<h3>The goal of XRP</h3>\n<p>XRP is built on bitcoin’s decentralized digital currency approach. XRP aims to be a payment ecosystem, providing a low commission currency exchange with fast international transactions.</p>\n<h3>Who started XRP</h3>\n<p>XRP was first released in 2012 by a company named OpenCoin, with co-founders CEO Chris Larsen and CTO Jed McCaleb. Both co-founders have a background in bitcoin, as well as the other developers working on the XRP protocol.</p>",
      "color": "#000000",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
      "websiteUrl": "https://ripple.com",
      "socials": [
        {
          "name": "ripple",
          "url": "https://twitter.com/ripple",
          "type": "twitter"
        },
        {
          "name": "r/ripple",
          "url": "https://www.reddit.com/r/ripple/",
          "type": "reddit"
        },
        {
          "name": "ripplevideo1",
          "url": "https://www.youtube.com/user/ripplevideo1",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/ripplepay",
          "type": "facebook"
        },
        {
          "name": "interledger/five-bells-demo",
          "url": "https://github.com/interledger/five-bells-demo",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "ripple.com",
          "type": "website",
          "url": "https://ripple.com"
        },
        {
          "name": "ripple",
          "url": "https://twitter.com/ripple",
          "type": "twitter"
        },
        {
          "name": "r/ripple",
          "url": "https://www.reddit.com/r/ripple/",
          "type": "reddit"
        },
        {
          "name": "ripplevideo1",
          "url": "https://www.youtube.com/user/ripplevideo1",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/ripplepay",
          "type": "facebook"
        },
        {
          "name": "interledger/five-bells-demo",
          "url": "https://github.com/interledger/five-bells-demo",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 837,
      "numberOfExchanges": 199,
      "type": "coin",
      "volume": 1236647456,
      "marketCap": 10947261866,
      "price": "0.2482956675",
      "circulatingSupply": 44089620959,
      "totalSupply": 99990976125,
      "approvedSupply": true,
      "firstSeen": 1421798400000,
      "listedAt": 1421798400,
      "change": -2.51,
      "rank": 4,
      "history": [
        "0.2546850487",
        "0.2554796885",
        "0.2562164333",
        "0.2548656159",
        "0.2541667556",
        "0.2535896757",
        "0.2527254994",
        "0.2537261118",
        "0.2536736835",
        "0.2549320987",
        "0.2537734113",
        "0.2534028535",
        "0.2526779161",
        "0.251819341",
        "0.2526594231",
        "0.2513957378",
        "0.2508639521",
        "0.2505197738",
        "0.2518242756",
        "0.2521033727",
        "0.2531643771",
        "0.2532522136",
        "0.2506870408",
        "0.2500859446",
        "0.2481114334",
        "0.247148524",
        "0.2482956675"
      ],
      "allTimeHigh": {
        "price": "3.1592207876597747",
        "timestamp": 1515369600000
      },
      "penalty": false
    },
    {
      "id": 4,
      "uuid": "ZlZpzOJo43mIo",
      "slug": "bitcoincash-bch",
      "symbol": "BCH",
      "name": "Bitcoin Cash",
      "description": "<p>Bitcoin Cash (BCH) is a hard fork of bitcoin. It’s an electronic cash platform that allows peer-to-peer online cash payments to be made without the clearance of a clearinghouse. One of the most pressing issues for bitcoin has always been its scalability; the size of a block of transactions was limited to one MB. Bitcoin Cash was initiated to increase this block size.</p>\n<h3>The goal of Bitcoin Cash</h3>\n<p>Bitcoin cash is very similar to bitcoin and also used as a payment system. Bitcoin Cash allows faster transaction times and lower transaction fees; it enabled the increase of the block size from one MB to eight MB. Its overall goal is to increase the number of transactions that can be processed by the network.</p>\n<h3>Who started Bitcoin Cash</h3>\n<p>Bitcoin Cash was officially released in August 2017, as a result of a discussion about the scalability of Bitcoin; the community had some concerns about Bitcoin’s ability to process the large number of transactions on the Bitcoin network. Looking for a solution, the community was divided into two groups. Unable to find a compromise, a hard fork was implemented, and Bitcoin Cash was created.</p>",
      "color": "#8dc451",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/By8ziihX7/bch.svg",
      "websiteUrl": "https://www.bitcoincash.org/",
      "socials": [
        {
          "name": "bitcolncash",
          "url": "https://twitter.com/bitcolncash",
          "type": "twitter"
        },
        {
          "name": "r/bitcoincash",
          "url": "https://www.reddit.com/r/bitcoincash/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=2040221.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/bitcoincashorg",
          "type": "facebook"
        },
        {
          "name": "bitcoin-abc",
          "url": "https://github.com/Bitcoin-ABC/bitcoin-abc",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.bitcoincash.org",
          "type": "website",
          "url": "https://www.bitcoincash.org/"
        },
        {
          "name": "bitcolncash",
          "url": "https://twitter.com/bitcolncash",
          "type": "twitter"
        },
        {
          "name": "r/bitcoincash",
          "url": "https://www.reddit.com/r/bitcoincash/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=2040221.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/bitcoincashorg",
          "type": "facebook"
        },
        {
          "name": "bitcoin-abc",
          "url": "https://github.com/Bitcoin-ABC/bitcoin-abc",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 919,
      "numberOfExchanges": 221,
      "type": "coin",
      "volume": 1284942844,
      "marketCap": 4862030636,
      "price": "262.039067043",
      "circulatingSupply": 18554602.14679983,
      "totalSupply": 18554602.14679983,
      "approvedSupply": true,
      "firstSeen": 1541808000000,
      "listedAt": 1541808000,
      "change": -3.16,
      "rank": 5,
      "history": [
        "270.5987229667",
        "271.050719156",
        "271.3293367543",
        "268.6595040846",
        "267.8500375815",
        "268.0241463467",
        "267.9635719851",
        "269.8581948437",
        "270.9587228861",
        "270.2603292124",
        "268.3091316486",
        "268.0125063274",
        "267.1902647076",
        "266.447603566",
        "267.6284401956",
        "267.0212888505",
        "266.8858487859",
        "266.2706990662",
        "269.9281375257",
        "270.5333719519",
        "270.5869489249",
        "269.1577092131",
        "264.9457690785",
        "265.2973001024",
        "262.6567566523",
        "260.8022595507",
        "262.039067043"
      ],
      "allTimeHigh": {
        "price": "508.54130064281685",
        "timestamp": 1541808000000
      },
      "penalty": false
    },
    {
      "id": 59,
      "uuid": "VLqpJwogdhHNb",
      "slug": "chainlink-link",
      "symbol": "LINK",
      "name": "Chainlink",
      "description": "<p>Chainlink (LINK) is aiming to become a fully decentralized oracle network. It functions like a bridge between smart contracts and off-chain applications, to grant access to off-chain resources like data feeds, web APIs or retail payments for example. Chainlink is built on the Ethereum blockchain.</p>\n<h3>The goal of Chainlink</h3>\n<p>Chainlink connects smart contracts to external systems and APIs. It functions as a secure blockchain middleware and decentralized oracle network that provides support in connecting smart contracts with critical resources of external data and other external software systems. Chainlink nodes (connection points in a network) offer API's that allow the conclusion of smart contract agreements and streaming of data feeds to and from blockchain networks. The LINK token is used to pay for off-chain resources demanded by a smart contract.</p>\n<h3>Who built Chainlink</h3>\n<p>Chainlink, which is headquartered in the Cayman Islands, was founded in 2014 by Sergey Nazarov and Steve Ellis. The parent company of Chainlink is called SmartContract, a blockchain company.</p>",
      "color": "#4680b0",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/9NOP9tOem/chainlink.svg",
      "websiteUrl": "https://chain.link/",
      "socials": [],
      "links": [
        {
          "name": "blog.chain.link",
          "url": "https://blog.chain.link/chainlink-chinese-communities/",
          "type": "wechat"
        },
        {
          "name": "chain.link",
          "url": "https://chain.link/",
          "type": "website"
        },
        {
          "name": "smart_contract",
          "url": "https://twitter.com/smart_contract",
          "type": "twitter"
        },
        {
          "name": "chainlinkofficial",
          "url": "https://t.me/chainlinkofficial",
          "type": "telegram"
        },
        {
          "name": "r/chainlink",
          "url": "https://www.reddit.com/r/chainlink/",
          "type": "reddit"
        },
        {
          "name": "discord.com",
          "url": "https://discord.com/invite/aSK4zew",
          "type": "discord"
        },
        {
          "name": "www.youtube.com",
          "url": "https://www.youtube.com/chainlinkofficial",
          "type": "youtube"
        },
        {
          "name": "smartcontractkit/chainlink",
          "url": "https://github.com/smartcontractkit/chainlink",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 358,
      "numberOfExchanges": 135,
      "type": "coin",
      "volume": 1242388276,
      "marketCap": 4800177295,
      "price": "12.292086797",
      "circulatingSupply": 390509550.91374743,
      "totalSupply": 1000000000,
      "approvedSupply": true,
      "firstSeen": 1505952000000,
      "listedAt": 1505952000,
      "change": -3.42,
      "rank": 6,
      "history": [
        "12.7269386048",
        "12.7768151208",
        "12.9054407962",
        "12.816248352",
        "12.7078056363",
        "12.6117528949",
        "12.4583495518",
        "12.6505630854",
        "12.7139345668",
        "12.7225788605",
        "12.6062768241",
        "12.5295795803",
        "12.422399592",
        "12.3887982366",
        "12.4441167175",
        "12.3805768169",
        "12.3756798373",
        "12.2503855684",
        "12.4682349669",
        "12.6213409721",
        "12.7205217876",
        "12.6952342185",
        "12.4430007271",
        "12.3820553838",
        "12.3241591723",
        "12.2101232746",
        "12.292086797"
      ],
      "allTimeHigh": {
        "price": "19.18524039142146",
        "timestamp": 1597536000000
      },
      "penalty": false
    },
    {
      "id": 71983,
      "uuid": "25W7FG7om",
      "slug": "polkadot-dot",
      "symbol": "DOT***",
      "name": "Polkadot",
      "description": "<p>Polkadot (DOT) is built to connect private and association chains, public and permissionless networks, oracles, and future technologies that are yet to be created. Polkadot aims to provide an internet where independent blockchains can swap information and transactions in a reliable way via the Polkadot relay chain.</p>\n<h3>The goal of Polkadot</h3>\n<p>Polkadot is created to enable a completely decentralized web where users are in control. Polkadot has to make it easier to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, the creators seek to free society from its reliance on a broken web where its large institutions can’t violate its users' trust.</p>\n<h3>Who built Polkadot</h3>\n<p>Polkadot is a project by Web3 Foundation, a Swiss Foundation founded to facilitate a fully functional and user-friendly decentralized web. The Web3 Foundation is partnering with entities to build Polkadot and support development.</p>\n<h3>The technology of Polkadot</h3>\n<p>Polkadot allows arbitrary data to be transferred across blockchains; Polkadot can transfer this data across public, open, permissionless blockchains as well as private, permissioned blockchains.This enables developers to build applications that get authorized data from a private blockchain and use it on a public blockchain.</p>",
      "color": "#d64cA8",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/RsljYqnbu/polkadot.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "polkadot.network",
          "url": "https://polkadot.network/",
          "type": "website"
        },
        {
          "name": "polkadot.network/blog",
          "url": "https://polkadot.network/blog",
          "type": "website"
        },
        {
          "name": "polkadotnetwork",
          "url": "https://twitter.com/polkadotnetwork",
          "type": "twitter"
        },
        {
          "name": "polkadotofficial",
          "url": "https://t.me/polkadotofficial",
          "type": "telegram"
        },
        {
          "name": "r/dot",
          "url": "https://www.reddit.com/r/dot",
          "type": "reddit"
        },
        {
          "name": "Medium",
          "url": "https://medium.com/polkadot-network",
          "type": "medium"
        },
        {
          "name": "YouTube",
          "url": "https://www.youtube.com/channel/UCB7PbjuZLEba_znc7mEGNgw",
          "type": "youtube"
        },
        {
          "name": "polkadot",
          "url": "https://github.com/paritytech/polkadot",
          "type": "github"
        },
        {
          "name": "polkadot.subscan.io",
          "url": "https://polkadot.subscan.io/",
          "type": "explorer"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 83,
      "numberOfExchanges": 50,
      "type": "coin",
      "volume": 304361959,
      "marketCap": 4368207832,
      "price": "4.3192722564",
      "circulatingSupply": 1011329588.0236108,
      "totalSupply": 1011329588.0236108,
      "approvedSupply": true,
      "firstSeen": 1598365200000,
      "listedAt": 1598365200,
      "change": -0.93,
      "rank": 7,
      "history": [
        "4.3596053429",
        "4.3792708191",
        "4.3994122848",
        "4.3552080337",
        "4.3178329316",
        "4.3478267269",
        "4.3285852361",
        "4.3680577254",
        "4.3738978588",
        "4.398034106",
        "4.4113519983",
        "4.4093955277",
        "4.3875920431",
        "4.3629097127",
        "4.3681084972",
        "4.3540956873",
        "4.337672552",
        "4.3068586832",
        "4.344470991",
        "4.3666878455",
        "4.3874712569",
        "4.4071845439",
        "4.333767119",
        "4.3268006435",
        "4.2935332062",
        "4.2765743057",
        "4.3192722564"
      ],
      "allTimeHigh": {
        "price": "6.435886703375472",
        "timestamp": 1598918400000
      },
      "penalty": false
    },
    {
      "id": 7,
      "uuid": "D7B1x_ks7WhV5",
      "slug": "litecoin-ltc",
      "symbol": "LTC",
      "name": "Litecoin",
      "description": "<p>Litecoin is a peer-to-peer decentralized digital currency with an instant, near zero-cost payment service to peers across the world. It features a faster transaction confirmation status, along with a refined storage competency. The average block mining speed in Litecoin is 2.5 minutes, compared to bitcoin’s 10 minutes.</p>\n<h3>The goal of Litecoin</h3>\n<p>Litecoin wants to provide a more decentralized mining network, faster transaction processing times, lower transaction fees and less scarcity. The price of each litecoin is cheaper than bitcoin, and transactions are easier, because there are more Litecoins that can be created by mining. Litecoin is often referred to ‘silver’, whilst Bitcoin is compared with ‘gold.’</p>\n<h3>Who started Litecoin</h3>\n<p>In October 2011, litecoin was released via an open-source client on GitHub. (A client is a piece of software that accesses a service made available by a server.) It is basically a fork of the Bitcoin Core client. Charlie Lee is the managing director of the Litecoin Foundation. He’s an ex-Google employee who had the vision to create a lighter version of Bitcoin.</p>",
      "color": "#345d9d",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/BUvPxmc9o/ltcnew.svg",
      "websiteUrl": "https://litecoin.org",
      "socials": [
        {
          "name": "litecoinproject",
          "url": "https://twitter.com/litecoinproject",
          "type": "twitter"
        },
        {
          "name": "Telegram",
          "url": "https://web.telegram.org/#/im?p=@litecoin",
          "type": "telegram"
        },
        {
          "name": "r/litecoin",
          "url": "https://www.reddit.com/r/litecoin/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=47417.0",
          "type": "bitcointalk"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/uc8unj4yczgc5e7sb_cckdgg",
          "type": "youtube"
        },
        {
          "name": "ltcfoundation",
          "url": "http://www.instagram.com/ltcfoundation",
          "type": "instagram"
        }
      ],
      "links": [
        {
          "name": "litecoin.org",
          "type": "website",
          "url": "https://litecoin.org"
        },
        {
          "name": "litecoinproject",
          "url": "https://twitter.com/litecoinproject",
          "type": "twitter"
        },
        {
          "name": "Telegram",
          "url": "https://web.telegram.org/#/im?p=@litecoin",
          "type": "telegram"
        },
        {
          "name": "r/litecoin",
          "url": "https://www.reddit.com/r/litecoin/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=47417.0",
          "type": "bitcointalk"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/uc8unj4yczgc5e7sb_cckdgg",
          "type": "youtube"
        },
        {
          "name": "ltcfoundation",
          "url": "http://www.instagram.com/ltcfoundation",
          "type": "instagram"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 2932,
      "numberOfExchanges": 270,
      "type": "coin",
      "volume": 1581104192,
      "marketCap": 3867791794,
      "price": "58.3424240804",
      "circulatingSupply": 66294670.73346589,
      "totalSupply": 66294670.73347135,
      "approvedSupply": true,
      "firstSeen": 1382572800000,
      "listedAt": 1382572800,
      "change": -4.28,
      "rank": 8,
      "history": [
        "60.952865632",
        "61.2149217068",
        "61.5194201245",
        "61.2369852023",
        "61.0093094615",
        "60.8613214171",
        "60.4955743267",
        "60.8926909777",
        "61.0818634579",
        "61.3524749158",
        "61.2352348326",
        "60.8246446888",
        "60.5675993706",
        "60.1716766408",
        "60.345447713",
        "60.178038801",
        "60.1017430918",
        "59.9028381402",
        "60.5720600204",
        "60.981571183",
        "61.087099539",
        "60.8657637689",
        "59.6470937907",
        "59.3410816385",
        "58.7045604887",
        "58.0828039218",
        "58.3424240804"
      ],
      "allTimeHigh": {
        "price": "356.5915738792805",
        "timestamp": 1513728000000
      },
      "penalty": false
    },
    {
      "id": 14,
      "uuid": "WcwrkfNI4FUAe",
      "slug": "binancecoin-bnb",
      "symbol": "BNB",
      "name": "Binance Coin",
      "description": "<p>Binance Coin (BNB) is used for trading on the Binance exchange. When using Binance Coin you will receive a discount on the fees you need to pay. Binance aims to create a Decentralized Exchange (DEX) where Binance coin will function as the underlying token. Binance Coin is built on the Ethereum blockchain.</p>\n<h3>The goal of Binance Coin</h3>\n<p>Binance Coin was initially created as a utility token that allows users to pay for trading fees at a discounted rate on the Binance exchange. This trading fee discount offered by the token during Binance’s first year, was the first of many use cases of Binance Coin that has grown Binance’s global ecosystem. Since the start, Binance Coin has increasingly developed its functions and use cases. It became one of the most widely-used utility tokens in the blockchain space. Binance Coin can also be used to pay for travel costs, like flight and hotel bookings, buying virtual gifts, and using a credit card.</p>\n<h3>Who started Binance Coin</h3>\n<p>In 2017, Binance Coin was launched by Binance. It was first issued and launched during an Initial Coin Offering (ICO) crowdfunding event. Changpeng Zhao, who goes by CZ, is the founder and CEO of Binance. Binance is headquartered in Tokyo, Japan.</p>",
      "color": "#e8b342",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
      "websiteUrl": "https://www.binance.com/?ref=35424440",
      "socials": [],
      "links": [
        {
          "name": "www.binance.com",
          "type": "website",
          "url": "https://www.binance.com/?ref=35424440"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 603,
      "numberOfExchanges": 103,
      "type": "coin",
      "volume": 619242763,
      "marketCap": 3487768548,
      "price": "27.7485119896",
      "circulatingSupply": 125692092.94727854,
      "totalSupply": 140345602,
      "approvedSupply": true,
      "firstSeen": 1503014400000,
      "listedAt": 1503014400,
      "change": -2.56,
      "rank": 9,
      "history": [
        "28.476673637",
        "28.4939436332",
        "28.6098723261",
        "28.5108927342",
        "28.3768169288",
        "28.2714925908",
        "28.1118642872",
        "28.2413644255",
        "28.3635830908",
        "28.5263310008",
        "28.7016031544",
        "28.6651140937",
        "28.4499665313",
        "28.3796031764",
        "28.3856564244",
        "28.3044423063",
        "28.237464717",
        "28.1515003636",
        "28.3173705494",
        "28.4755713701",
        "28.4714906303",
        "28.432640565",
        "28.2075229386",
        "28.0524941101",
        "27.8135619803",
        "27.6106996551",
        "27.7485119896"
      ],
      "allTimeHigh": {
        "price": "37.77723478000876",
        "timestamp": 1561161600000
      },
      "penalty": false
    },
    {
      "id": 9,
      "uuid": "qzawljRxB5bYu",
      "slug": "cardano-ada",
      "symbol": "ADA",
      "name": "Cardano",
      "description": "<p>Cardano (ADA) is a decentralised public blockchain and cryptocurrency project and is fully open source. Cardano is built in the secure Haskell programming language. Cardano is developing a smart contract platform which seeks to deliver lots of advanced features. It claims to be the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach.</p>\n<h3>The goal of Cardano</h3>\n<p>In 2015, the Cardano project began as an effort to change the way cryptocurrencies are designed and developed. The overall focus beyond a particular set of innovations is to provide a more balanced and sustainable ecosystem that better accounts for the needs of its users as well as other systems seeking integration. Cardano did not begin with a comprehensive roadmap or even an authoritative white paper. It started with a collection of design principles, engineering best practices and avenues for exploration. The Cardano platform now features decentralized applications and contracts that operate at low cost in a secure and scalable way.</p>\n<h3>Who started Cardano</h3>\n<p>Cardano was launched in 2017, and founded by Charles Hoskinson, co-founder of Ethereum. Charles said he wanted to provide a more balanced and sustainable ecosystem for cryptocurrencies. The development team consists of a large global collective of expert engineers and researchers.</p>",
      "color": "#3cc8c8",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/ryY28nXhW/ada.svg",
      "websiteUrl": "https://www.cardano.org/en/home/",
      "socials": [
        {
          "name": "cardano",
          "url": "https://twitter.com/cardano",
          "type": "twitter"
        },
        {
          "name": "r/cardano",
          "url": "https://www.reddit.com/r/cardano/",
          "type": "reddit"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucbq9vgfezru1yri1zdcttgg",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/groups/cardanocommunity",
          "type": "facebook"
        },
        {
          "name": "input-output-hk/cardano-sl",
          "url": "https://github.com/input-output-hk/cardano-sl",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.cardano.org",
          "type": "website",
          "url": "https://www.cardano.org/en/home/"
        },
        {
          "name": "cardano",
          "url": "https://twitter.com/cardano",
          "type": "twitter"
        },
        {
          "name": "r/cardano",
          "url": "https://www.reddit.com/r/cardano/",
          "type": "reddit"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucbq9vgfezru1yri1zdcttgg",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/groups/cardanocommunity",
          "type": "facebook"
        },
        {
          "name": "input-output-hk/cardano-sl",
          "url": "https://github.com/input-output-hk/cardano-sl",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 193,
      "numberOfExchanges": 77,
      "type": "coin",
      "volume": 348165402,
      "marketCap": 3195716026,
      "price": "0.1027149086",
      "circulatingSupply": 31112484745,
      "totalSupply": 31112484745,
      "approvedSupply": true,
      "firstSeen": 1506902400000,
      "listedAt": 1506902400,
      "change": -4.15,
      "rank": 10,
      "history": [
        "0.1071668251",
        "0.1069876118",
        "0.1071686969",
        "0.1067601882",
        "0.1063219284",
        "0.1062944607",
        "0.1057286316",
        "0.1059822077",
        "0.1064636812",
        "0.1070657496",
        "0.1067087053",
        "0.1059513614",
        "0.104835469",
        "0.1039651104",
        "0.1042359532",
        "0.1040140872",
        "0.1041280008",
        "0.1036269065",
        "0.1048809153",
        "0.1054429479",
        "0.1057160258",
        "0.1055746938",
        "0.1042072727",
        "0.1036953642",
        "0.1029499898",
        "0.1022348453",
        "0.1027149086"
      ],
      "allTimeHigh": {
        "price": "1.1958838420370697",
        "timestamp": 1515110400000
      },
      "penalty": false
    },
    {
      "id": 5858,
      "uuid": "Mtfb0obXVh59u",
      "slug": "wrappedether-weth",
      "symbol": "WETH",
      "name": "Wrapped Ether",
      "description": "WETH (Wrapped Ethereum) is a token that represents an ERC-20 version of ETH on the Ethereum blockchain. Every WETH is 1:1 backed by real ETH.",
      "color": "#303030",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/KIviQyZlt/weth.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [],
      "confirmedSupply": true,
      "numberOfMarkets": 352,
      "numberOfExchanges": 6,
      "type": "coin",
      "volume": 219924880,
      "marketCap": 3035634039,
      "price": "435.7660217106",
      "circulatingSupply": 6966201.787689989,
      "totalSupply": 6966201.810238894,
      "approvedSupply": true,
      "firstSeen": 1515974400000,
      "listedAt": 1600259445,
      "change": -3.47,
      "rank": 11,
      "history": [
        "451.4206777647",
        "452.9437279522",
        "456.1489358772",
        "454.2026954948",
        "451.4897855764",
        "450.3537160861",
        "449.1081186089",
        "452.9558056482",
        "454.3366365663",
        "454.7538438569",
        "454.8361659959",
        "453.3453300072",
        "451.3450629411",
        "449.6799070159",
        "450.5221246684",
        "450.0259142399",
        "448.8722027056",
        "445.0039543138",
        "447.2878505519",
        "446.4726191886",
        "447.0352782422",
        "448.1274226678",
        "444.2463798368",
        "441.4315222263",
        "438.7989582655",
        "434.0108136102",
        "435.7660217106"
      ],
      "allTimeHigh": {
        "price": "1326.7587556498438",
        "timestamp": 1516060800000
      },
      "penalty": false
    },
    {
      "id": 5331,
      "uuid": "9K7m6ufraZ6gh",
      "slug": "hex-hex",
      "symbol": "HEX",
      "name": "HEX",
      "description": "<p>HEX (HEX) is designed as a store of value for a Certificate of Deposit on the blockchain as used in traditional financial markets. HEX is also designed to leverage off the emerging DeFi. HEX is designed and launched by Richard Heart on 2 December 2019.</p>\n<h3>The goal of HEX</h3>\n<p>HEX is an ERC20 token launched on the Ethereum network. HEX is designed to be a store of value to replace the Certificate of Deposit as the blockchain counterpart of that financial product used in traditional financial markets. HEX is also designed to leverage off the emerging DeFi (Decentralised Finance) ecosystem in cryptocurrencies within the Ethereum network.</p>\n<h3>The technology of HEX</h3>\n<p>HEX uses the Ethereum network for the transaction layer (sending and receiving HEX tokens, as well as interacting with the HEX smart contract), whilst the consensus code and staking mechanism is contained in the HEX smart contract.</p>\n<h3>Staking HEX</h3>\n<p>HEX allows a user to stake his or her HEX coins for a share of the new HEX coin issuance, or inflation and contains features designed to incentivize behaviors that encourage price appreciation and disincentivize behaviors that encourage harm to the price. The HEX smart contract penalizes stakers for ending their stake early and rewards them for staking larger amounts of HEX for longer periods. HEX is distributed to Bitcoin holders by way of a snapshot of the Bitcoin UTXO set that occurred on 2 December 2019 at block height 606227. The distribution of HEX to Bitcoin holders is 10,000 HEX per 1 BTC. Bitcoin holders are able to claim HEX only during the first year of launch. During this period, HEX is also obtained in exchange for ETH through interacting with the HEX smart contract. At the end of the first year of launch, all HEX coins that were not claimed by Bitcoin holders are distributed to the rest of the HEX users who have stakes that are active. The maximum possible annual inflation of HEX is designed to be 3.69% after the first year of launch.</p>",
      "color": "#ffcd00",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/iseN4Am58/hex-vector.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "hex.com",
          "url": "https://hex.com/",
          "type": "website"
        },
        {
          "name": "HEXCrypto",
          "url": "https://twitter.com/HEXCrypto",
          "type": "twitter"
        },
        {
          "name": "HEXcrypto",
          "url": "https://t.me/HEXcrypto",
          "type": "telegram"
        },
        {
          "name": "hexcrypto",
          "url": "https://hexcrypto.reddit.com/",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discord.gg/CA8jVuF",
          "type": "discord"
        },
        {
          "name": "HexCrypto",
          "url": "https://youtube.com/HexCrypto?sub_confirmation=1",
          "type": "youtube"
        },
        {
          "name": "HEXcrypto",
          "url": "https://www.facebook.com/HEXcrypto",
          "type": "facebook"
        },
        {
          "name": "HEXcrypto",
          "url": "https://www.instagram.com/HEXcrypto",
          "type": "instagram"
        },
        {
          "name": "bitcoinHEX",
          "url": "https://github.com/bitcoinHEX",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 24,
      "numberOfExchanges": 18,
      "type": "coin",
      "volume": 6822988,
      "marketCap": 2985547506,
      "price": "0.0074199381",
      "circulatingSupply": 402368250399.1038,
      "totalSupply": 409406665506.15283,
      "approvedSupply": true,
      "firstSeen": 1589361480000,
      "listedAt": 1589361480,
      "change": -6.32,
      "rank": 12,
      "history": [
        "0.0079207444",
        "0.0079783281",
        "0.0079805095",
        "0.0079409132",
        "0.0078191052",
        "0.0075869993",
        "0.0073116649",
        "0.0070790161",
        "0.0072760321",
        "0.0073328089",
        "0.0074172693",
        "0.0075186675",
        "0.0075307762",
        "0.0074988699",
        "0.0073072045",
        "0.0070836771",
        "0.007013573",
        "0.0070106662",
        "0.0072517195",
        "0.0074639634",
        "0.0073222802",
        "0.0073435601",
        "0.0073275919",
        "0.0072335094",
        "0.0072548243",
        "0.007243002",
        "0.0074199381"
      ],
      "allTimeHigh": {
        "price": "0.013744848517665057",
        "timestamp": 1604275200000
      },
      "penalty": false
    },
    {
      "id": 4875,
      "uuid": "VcMY11NONHSA0",
      "slug": "bitcoinsv-bsv",
      "symbol": "BSV",
      "name": "Bitcoin SV",
      "description": "<p>Bitcoin Satoshi Vision (BSV), or short said Bitcoin SV, is a fork from Bitcoin Cash. This project is called Satoshi Vision or SV, because it aims to restore the Bitcoin protocol, by creating a stable, scalable, and secure payment method.</p>\n<h3>The goal of Bitcoin SV</h3>\n<p>The Bitcoin SV team beliefs the changes made to Bitcoin in its early days, competed with Satoshi Nakamoto’s vision; they think Bitcoin must be restored to its original form, as described in the Bitcoin whitepaper. Bitcoin SV aims to provide a good choice for miners and allow projects to build websites and applications on it.</p>\n<h3>Who started Bitcoin SV</h3>\n<p>Bitcoin SV supporters first followed the Bitcoin Cash fork in 2017, because they thought it would be in line with Satoshi Nakamoto's original vision. Later they found this fork wasn’t actually in line with this vision. Now there were two teams; Bitcoin ABC, the core team of Bitcoin Cash, and team nChain. Team nChain started Bitcoin SV, led by Craig Wright, who later claimed several times he is actually Satoshi Nakamoto.</p>",
      "color": "#eab300",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/388ehh6kq/bitcoin-sv-1.svg",
      "websiteUrl": "https://bitcoinsv.io/",
      "socials": [
        {
          "name": "bitcoinsvnode",
          "url": "https://twitter.com/bitcoinsvnode",
          "type": "twitter"
        },
        {
          "name": "bitcoin-sv/bitcoin-sv",
          "url": "https://github.com/bitcoin-sv/bitcoin-sv",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "bitcoinsv.io",
          "type": "website",
          "url": "https://bitcoinsv.io/"
        },
        {
          "name": "bitcoinsvnode",
          "url": "https://twitter.com/bitcoinsvnode",
          "type": "twitter"
        },
        {
          "name": "bitcoin-sv/bitcoin-sv",
          "url": "https://github.com/bitcoin-sv/bitcoin-sv",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 317,
      "numberOfExchanges": 110,
      "type": "coin",
      "volume": 536731473,
      "marketCap": 2942375867,
      "price": "158.5887086458",
      "circulatingSupply": 18553501.64442325,
      "totalSupply": 18553501.64442325,
      "approvedSupply": true,
      "firstSeen": 1541808000000,
      "listedAt": 1541808000,
      "change": -4.23,
      "rank": 13,
      "history": [
        "165.5966639694",
        "166.3775785153",
        "167.2012594619",
        "166.2738673628",
        "165.9707496469",
        "165.5291785812",
        "165.4429447213",
        "166.5023281505",
        "166.8596021491",
        "166.6254648541",
        "166.1176071615",
        "165.5905388075",
        "164.5332160337",
        "163.3503407106",
        "163.8246571749",
        "163.5062034985",
        "163.5842114539",
        "163.2756012758",
        "164.128189312",
        "164.5534660296",
        "164.5996304836",
        "164.7700927485",
        "162.0168091194",
        "160.5444401377",
        "159.5924900092",
        "158.1206525479",
        "158.5887086458"
      ],
      "allTimeHigh": {
        "price": "371.24602840278504",
        "timestamp": 1581465600000
      },
      "penalty": false
    },
    {
      "id": 1760,
      "uuid": "aKzUVe4Hh_CON",
      "slug": "usdc-usdc",
      "symbol": "USDC",
      "name": "USDC",
      "description": "<p>USDC (USDC) provides a fully collateralized US dollar stable coin, and is based on the open-source asset-backed stable coin framework developed by CENTRE. The project is the result of a collaboration between Circle and Coinbase.</p>\n<h3>The goal of USDC</h3>\n<p>According to the project, a price-stable currency such as the US dollar (and similar stable currencies such as EUR, GBP, JPY, RMB, etc.) is critical for enabling mainstream adoption of blockchain technology for payments. And also to support maturation in financial contracts built on smart contract platforms, such as tokenized securities, loans, and property.</p>\n<h3>USDC technology</h3>\n<p>Users who onboard through a USDC issuer can transfer funds into the system; the issuer then executes a series of commands with the CENTRE network to verify, mint, and approve USDC tokens, and the user can transfer those tokens elsewhere as they see fit (subject to the token’s compliance controls).</p>",
      "color": null,
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
      "websiteUrl": "https://www.centre.io/usdc",
      "socials": [
        {
          "name": "centre_io",
          "url": "https://twitter.com/centre_io",
          "type": "twitter"
        },
        {
          "name": "centre-blog",
          "url": "https://medium.com/centre-blog",
          "type": "medium"
        },
        {
          "name": "centrehq/centre-tokens",
          "url": "https://github.com/centrehq/centre-tokens",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.centre.io",
          "type": "website",
          "url": "https://www.centre.io/usdc"
        },
        {
          "name": "centre_io",
          "url": "https://twitter.com/centre_io",
          "type": "twitter"
        },
        {
          "name": "centre-blog",
          "url": "https://medium.com/centre-blog",
          "type": "medium"
        },
        {
          "name": "centrehq/centre-tokens",
          "url": "https://github.com/centrehq/centre-tokens",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 748,
      "numberOfExchanges": 116,
      "type": "coin",
      "volume": 718655158,
      "marketCap": 2879359975,
      "price": "1.0014693661",
      "circulatingSupply": 2875135349.11619,
      "totalSupply": 2875141350.359361,
      "approvedSupply": true,
      "firstSeen": 1539043200000,
      "listedAt": 1539043200,
      "change": 0.25,
      "rank": 14,
      "history": [
        "0.9990211",
        "0.9998317607",
        "0.9990523271",
        "0.9971477704",
        "1.0035855193",
        "1.0009540363",
        "0.9986329293",
        "0.998366221",
        "0.9981412648",
        "0.9994669285",
        "0.9998628047",
        "0.998141477",
        "0.9965560909",
        "0.9980708966",
        "0.9975376934",
        "0.9964850672",
        "0.9968751474",
        "1.0013863929",
        "0.9968474827",
        "0.9964503879",
        "0.9971244803",
        "0.9969719002",
        "0.9961140012",
        "0.9986736797",
        "0.9948621758",
        "0.9996257451",
        "1.0014693661"
      ],
      "allTimeHigh": {
        "price": "1.0915990536815214",
        "timestamp": 1597622400000
      },
      "penalty": false
    },
    {
      "id": 5,
      "uuid": "iAzbfXiBBKkR6",
      "slug": "eos-eos",
      "symbol": "EOS",
      "name": "EOS",
      "description": "<p>EOS is an operating system on the blockchain that runs decentralized applications for businesses. The main focus of the platform is the performance and scalability of smart contracts and transaction throughput. EOS is built to be horizontally scalable so that in the future it can handle thousands of business apps.</p>\n<h3>The goal of EOS</h3>\n<p>EOS is created to fix problems found in blockchain-based systems. EOS focusses on speed, flexibility, and scalability. EOS will also allow smart contracts to be built on top of it, which will allow developers to release decentralized apps (Dapps). EOS purpose is to build a platform that functions like an operating system.</p>\n<h3>Who started EOS</h3>\n<p>EOS was developed by the private company called Block.One, which is also involved in lots of other blockchain and business projects. Its white paper was published in 2017. Dan Larimer, the co-founder, and the EOS-developers’ crew launched the project that aimed to create a platform to perform much faster transactions with fewer fees.</p>",
      "color": "#443f54",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/PqOYrWSje/eos2.svg",
      "websiteUrl": "https://eos.io/",
      "socials": [
        {
          "name": "block_one_",
          "url": "https://twitter.com/block_one_",
          "type": "twitter"
        },
        {
          "name": "r/eos",
          "url": "https://www.reddit.com/r/eos/",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/zbabdrm",
          "type": "discord"
        },
        {
          "name": "eosio",
          "url": "https://medium.com/eosio",
          "type": "medium"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=1904415.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/eosblockchain",
          "type": "facebook"
        },
        {
          "name": "eosio",
          "url": "http://github.com/eosio",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "eos.io",
          "type": "website",
          "url": "https://eos.io/"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/eos",
          "type": "website"
        },
        {
          "name": "block_one_",
          "url": "https://twitter.com/block_one_",
          "type": "twitter"
        },
        {
          "name": "r/eos",
          "url": "https://www.reddit.com/r/eos/",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/zbabdrm",
          "type": "discord"
        },
        {
          "name": "eosio",
          "url": "https://medium.com/eosio",
          "type": "medium"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=1904415.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/eosblockchain",
          "type": "facebook"
        },
        {
          "name": "eosio",
          "url": "http://github.com/eosio",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 632,
      "numberOfExchanges": 150,
      "type": "coin",
      "volume": 933198434,
      "marketCap": 2311538083,
      "price": "2.4908795304",
      "circulatingSupply": 928000754.4006001,
      "totalSupply": 1024320555.1398,
      "approvedSupply": true,
      "firstSeen": 1498694400000,
      "listedAt": 1498694400,
      "change": -1.58,
      "rank": 15,
      "history": [
        "2.5308151536",
        "2.5383941314",
        "2.5537148578",
        "2.5439473868",
        "2.5343635829",
        "2.5255278419",
        "2.5221782977",
        "2.537233328",
        "2.5387866911",
        "2.5493462648",
        "2.5410410952",
        "2.5339393897",
        "2.5259570899",
        "2.5182419548",
        "2.5241343398",
        "2.518765417",
        "2.5181912769",
        "2.5142340985",
        "2.5307136285",
        "2.5306412937",
        "2.5311593219",
        "2.5295776505",
        "2.5087492291",
        "2.5055865764",
        "2.4932377351",
        "2.4771926172",
        "2.4908795304"
      ],
      "allTimeHigh": {
        "price": "20.618763559581794",
        "timestamp": 1525046400000
      },
      "penalty": false
    },
    {
      "id": 10,
      "uuid": "3mVx2FX_iJFp5",
      "slug": "monero-xmr",
      "symbol": "XMR",
      "name": "Monero",
      "description": "<p>Monero (XMR) is a cryptocurrency which focuses on being untraceable and private. It differs from Bitcoin's in a few key ways, but is very similar to Bitcoin: it’s an anonymous version of Bitcoin. It can be used to buy and sell things, and be exchanged for other coins or tokens.</p>\n<h3>The goal of Monero</h3>\n<p>The privacy features of Monero gives it its most value. No one can link Monero cryptocurrency transactions to a person. Monero is also created for its fungibility, all Monero coins are identical and mutually interchangeable. Monero has dynamic scalability, which means it has no “pre-set” block size limit. Monero has ASIC resistance and multiple keys.</p>\n<h3>Who started Monero</h3>\n<p>Bytecoin, launched in 2012, was the precursor of Monero. It was the first digital currency that was written using a technology called CryptoNote. CryptoNote is the spine of most of the privacy-based cryptocurrencies that exist, including Monero. However, there were a few issues with Bytecoin, which lead to a group of seven developers to fork the Bytecoin blockchain. The new currency would be known as Bitmonero, later named Monero. Five of the seven developers decided to stay anonymous. Only two of these Monero developers are known: Riccardo Spagni and David Latapie.</p>",
      "color": "#ff7519",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/Syz-oSd_Z/xmr.svg",
      "websiteUrl": "https://getmonero.org/",
      "socials": [
        {
          "name": "monerocurrency",
          "url": "https://twitter.com/monerocurrency",
          "type": "twitter"
        },
        {
          "name": "bitmonero",
          "url": "https://telegram.me/bitmonero",
          "type": "telegram"
        },
        {
          "name": "r/monero",
          "url": "https://reddit.com/r/monero",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=583449.0",
          "type": "bitcointalk"
        }
      ],
      "links": [
        {
          "name": "getmonero.org",
          "type": "website",
          "url": "https://getmonero.org/"
        },
        {
          "name": "monero",
          "url": "https://twitter.com/monero",
          "type": "twitter"
        },
        {
          "name": "bitmonero",
          "url": "https://telegram.me/bitmonero",
          "type": "telegram"
        },
        {
          "name": "r/monero",
          "url": "https://reddit.com/r/monero",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=583449.0",
          "type": "bitcointalk"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 643,
      "numberOfExchanges": 101,
      "type": "coin",
      "volume": 326588884,
      "marketCap": 2062318182,
      "price": "116.1678688391",
      "circulatingSupply": 17752913.974210087,
      "totalSupply": 17752913.974210087,
      "approvedSupply": true,
      "firstSeen": 1422489600000,
      "listedAt": 1422489600,
      "change": -0.93,
      "rank": 16,
      "history": [
        "117.2524706616",
        "117.7618447418",
        "118.5547584963",
        "118.7715294473",
        "118.7825566308",
        "118.7806467199",
        "118.4162558814",
        "119.5314119241",
        "119.589136352",
        "120.4795615788",
        "119.8187245157",
        "119.7156329678",
        "118.8216051786",
        "117.3942547775",
        "117.4347630837",
        "116.7908616005",
        "116.1398908647",
        "114.6888962806",
        "116.097682195",
        "116.2274298215",
        "116.6772525323",
        "116.7612810096",
        "115.3657887745",
        "115.6014376319",
        "115.1484844367",
        "114.6975645037",
        "116.1678688391"
      ],
      "allTimeHigh": {
        "price": "447.98507184923585",
        "timestamp": 1515369600000
      },
      "penalty": false
    },
    {
      "id": 10607,
      "uuid": "x4WXHge-vvFY",
      "slug": "wrappedbtc-wbtc",
      "symbol": "WBTC***",
      "name": "Wrapped BTC",
      "description": "WBTC is a community-focused initiative to bring bitcoin to Ethereum as a 1:1 backed token. The custody of the bitcoin reserves is taken care of by BitGo.",
      "color": null,
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/o3-8cvCHu/wbtc[1].svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "wbtc.network",
          "url": "https://wbtc.network/",
          "type": "website"
        },
        {
          "name": "WrappedBTC",
          "url": "https://twitter.com/WrappedBTC",
          "type": "twitter"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 46,
      "numberOfExchanges": 12,
      "type": "coin",
      "volume": 27618862,
      "marketCap": 1851084320,
      "price": "14999.3826317443",
      "circulatingSupply": 123410.70068239,
      "totalSupply": 123410.70068239,
      "approvedSupply": true,
      "firstSeen": 1549894980000,
      "listedAt": 1549894980,
      "change": -0.93,
      "rank": 17,
      "history": [
        "15140.485731898",
        "15227.4210115657",
        "15362.5465971894",
        "15299.2809170925",
        "15169.9390658816",
        "15122.000436706",
        "15084.403371773",
        "15217.4280841638",
        "15237.0217993364",
        "15294.8109377568",
        "15276.8005232217",
        "15259.102673542",
        "15413.021703158",
        "15370.3006054894",
        "15404.5234962906",
        "15389.8857707649",
        "15362.6679750758",
        "15271.3271942109",
        "15373.5073640706",
        "15427.0288111227",
        "15495.2529676635",
        "15594.4297101278",
        "15404.1580099977",
        "15285.282215309",
        "15130.2184058349",
        "14972.367597432",
        "14999.3826317443"
      ],
      "allTimeHigh": {
        "price": "54341.35886263373",
        "timestamp": 1563580800000
      },
      "penalty": false
    },
    {
      "id": 11,
      "uuid": "qUhEFk1I61atv",
      "slug": "tron-trx",
      "symbol": "TRX",
      "name": "TRON",
      "description": "<p>TRON is an entertainment data platform, using the features of blockchain and peer-to-peer network technology. The platform enables content creators to create freely moveable digital assets. By using blockchain technology and distributed storage TRON aims to be completely decentralized. Tron has grown to become one of the largest cryptocurrencies in the world.</p>\n<h3>The goal of TRON</h3>\n<p>Tron is created to bridge the gap between content creators and content consumers by eliminating the middleman. The result is an overall cost reduction for the consumer and improved collection through direct receipts for the content producer, which offers a win-win situation.</p>\n<h3>Who started TRON</h3>\n<p>In 2017, Tron was launched by a nonprofit organization called the Tron Foundation, based in Singapore. The founder and CEO of Tron is Justin Sun, who is also CEO of BitTorrent and the former chief representative of Ripple. Justin has become one of the most controversial figures in the blockchain space, known for his elaborate marketing tactics.</p>",
      "color": "#eb0029",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/behejNqQs/trx.svg",
      "websiteUrl": "https://tron.network/index?lng=en",
      "socials": [
        {
          "name": "tronfoundation",
          "url": "https://twitter.com/tronfoundation",
          "type": "twitter"
        },
        {
          "name": "tronnetworken",
          "url": "https://t.me/tronnetworken",
          "type": "telegram"
        },
        {
          "name": "r/tronix",
          "url": "https://www.reddit.com/r/tronix/",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/gsrgstd",
          "type": "discord"
        },
        {
          "name": "@tronfoundation",
          "url": "https://medium.com/@tronfoundation",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/uc5opogrq02ik-0t9skse_ka",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/tronfoundation-144555002795817/",
          "type": "facebook"
        },
        {
          "name": "tronfoundation",
          "url": "https://www.instagram.com/tronfoundation",
          "type": "instagram"
        },
        {
          "name": "tronprotocol",
          "url": "https://github.com/tronprotocol",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "tron.network",
          "type": "website",
          "url": "https://tron.network/index?lng=en"
        },
        {
          "name": "tronfoundation",
          "url": "https://twitter.com/tronfoundation",
          "type": "twitter"
        },
        {
          "name": "tronnetworken",
          "url": "https://t.me/tronnetworken",
          "type": "telegram"
        },
        {
          "name": "r/tronix",
          "url": "https://www.reddit.com/r/tronix/",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/gsrgstd",
          "type": "discord"
        },
        {
          "name": "@tronfoundation",
          "url": "https://medium.com/@tronfoundation",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/uc5opogrq02ik-0t9skse_ka",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/tronfoundation-144555002795817/",
          "type": "facebook"
        },
        {
          "name": "tronfoundation",
          "url": "https://www.instagram.com/tronfoundation",
          "type": "instagram"
        },
        {
          "name": "tronprotocol",
          "url": "https://github.com/tronprotocol",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 526,
      "numberOfExchanges": 140,
      "type": "coin",
      "volume": 519364468,
      "marketCap": 1653909568,
      "price": "0.0250061046",
      "circulatingSupply": 66140232427,
      "totalSupply": 99281283754,
      "approvedSupply": true,
      "firstSeen": 1505260800000,
      "listedAt": 1505260800,
      "change": -2,
      "rank": 18,
      "history": [
        "0.0255166197",
        "0.0255581354",
        "0.0256026303",
        "0.0254957882",
        "0.0254202623",
        "0.0253665636",
        "0.0252752286",
        "0.0253607938",
        "0.0254150983",
        "0.0255065141",
        "0.0254609139",
        "0.0253801287",
        "0.0252999028",
        "0.0252414711",
        "0.0253467696",
        "0.0252744601",
        "0.0252605414",
        "0.0251540705",
        "0.0253170751",
        "0.0255014786",
        "0.0255499079",
        "0.025432762",
        "0.0251952347",
        "0.0251038529",
        "0.0249694815",
        "0.0248775294",
        "0.0250061046"
      ],
      "allTimeHigh": {
        "price": "0.2180392689957852",
        "timestamp": 1515196800000
      },
      "penalty": false
    },
    {
      "id": 6,
      "uuid": "f3iaFeCKEmkaZ",
      "slug": "stellar-xlm",
      "symbol": "XLM",
      "name": "Stellar",
      "description": "<p>Stellar is an open-source, decentralized payment protocol that allows fast, cross-border payments between any pair of currencies, at almost no cost. Its native asset, originally known as Stellar, was later called Lumens (XLM). XLM powers the Stellar network and all of its operations.</p>\n<h3>The goal of Stellar</h3>\n<p>Stellar makes it possible to create, send, and trade digital representations of all forms of money: dollars, pesos, bitcoin, pretty much anything. It’s designed so all the world’s financial systems can work together on a single network. With this financial system they fight poverty and help develop individual potential. Stellar is useful and valuable because it is capable of hosting thousands of exchanges between currencies and tokens per second.</p>\n<h3>Who started Stellar</h3>\n<p>In 2014, Jed McCaleb, founder of Mt. Gox and co-founder of Ripple, launched the network system Stellar with former lawyer Joyce Kim. The nonprofit Stellar Development Foundation was created in collaboration with Stripe CEO Patrick Collison, later in 2014. This foundation employs technologists, scientists, designers, and businesspeople, all dedicated to building a more inclusive global marketplace. Their goal is to unlock the world’s economic potential by making money more fluid and people more empowered.</p>",
      "color": "#000000",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/78CxK1xsp/Stellar_symbol_black_RGB.svg",
      "websiteUrl": "https://www.stellar.org/",
      "socials": [
        {
          "name": "stellarorg",
          "url": "https://twitter.com/stellarorg",
          "type": "twitter"
        },
        {
          "name": "r/stellar",
          "url": "https://www.reddit.com/r/stellar",
          "type": "reddit"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=1428573.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/stellarfoundation",
          "type": "facebook"
        },
        {
          "name": "stellar",
          "url": "https://github.com/stellar",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.stellar.org",
          "type": "website",
          "url": "https://www.stellar.org/"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/stellar",
          "type": "website"
        },
        {
          "name": "stellarorg",
          "url": "https://twitter.com/stellarorg",
          "type": "twitter"
        },
        {
          "name": "r/stellar",
          "url": "https://www.reddit.com/r/stellar",
          "type": "reddit"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=1428573.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/stellarfoundation",
          "type": "facebook"
        },
        {
          "name": "stellar",
          "url": "https://github.com/stellar",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 719,
      "numberOfExchanges": 124,
      "type": "coin",
      "volume": 146841532,
      "marketCap": 1603603136,
      "price": "0.0793645921",
      "circulatingSupply": 20205523566.63592,
      "totalSupply": 49999999738.63592,
      "approvedSupply": true,
      "firstSeen": 1484611200000,
      "listedAt": 1484611200,
      "change": -2.86,
      "rank": 19,
      "history": [
        "0.0816975365",
        "0.0820035619",
        "0.0821689632",
        "0.0820253024",
        "0.0819620702",
        "0.0819727059",
        "0.0814705553",
        "0.0816914729",
        "0.0816531541",
        "0.0817936008",
        "0.0815335378",
        "0.080958553",
        "0.0806601411",
        "0.0806798625",
        "0.0809372448",
        "0.0808035732",
        "0.0805104447",
        "0.0801684317",
        "0.0809486725",
        "0.0811209175",
        "0.081299337",
        "0.0812843671",
        "0.0798440897",
        "0.0796450704",
        "0.0791675505",
        "0.0786405084",
        "0.0793645921"
      ],
      "allTimeHigh": {
        "price": "0.8388618719671962",
        "timestamp": 1515110400000
      },
      "penalty": false
    },
    {
      "id": 18,
      "uuid": "fsIbGOEJWbzxG",
      "slug": "tezos-xtz",
      "symbol": "XTZ",
      "name": "Tezos",
      "description": "<p>Tezos (XTZ) is a smart contract platform that uses blockchain voting to be self-governing by its token holders. Also, the platform aims to boost the security of smart contracts through formal verification of code. The creators of Tezos believe that a decentralized system must be decentralized at all levels; all the decisions must be taken decentralized, especially the proposals to improve or change the project.</p>\n<h3>The goal of Tezos</h3>\n<p>Tezos focusses on three main issues; smart contract safety, long-term upgradability, and open participation. Tezos is designed to provide the code correctness and safety that is necessary for assets and other important use cases. Tezos has a so-called modular architecture, which refers to the design of a system composed of separate components that can be connected together. Together with its formal upgrade mechanism, Tezos’ allows the network to adopt and propose innovations very smoothly. All stakeholders may participate in network upgrades by evaluating, proposing, or approving changes.</p>\n<h3>Who started Tezos</h3>\n<p>Since 2014, co-founders (while being a couple) Arthur Breitman and Kathleen Breitman, have been developing Tezos with a core group of developers. In 2017, the Tezos Foundation headquartered in Switzerland raised $232 million in just two weeks in a fundraiser. It became one of the biggest ICOs.</p>",
      "color": "#2c7df7",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/HkLUdilQ7/xtz.svg",
      "websiteUrl": "https://www.tezos.com",
      "socials": [
        {
          "name": "tezos",
          "url": "https://twitter.com/tezos",
          "type": "twitter"
        },
        {
          "name": "r/tezos",
          "url": "https://www.reddit.com/r/tezos/",
          "type": "reddit"
        },
        {
          "name": "@tezos",
          "url": "https://medium.com/@tezos",
          "type": "medium"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=715818.0",
          "type": "bitcointalk"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucmexyclrgsifqs_sqmeolqq",
          "type": "youtube"
        },
        {
          "name": "tezos/tezos",
          "url": "https://github.com/tezos/tezos",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "tezos.com",
          "url": "https://www.tezos.com",
          "type": "website"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/tezos",
          "type": "website"
        },
        {
          "name": "Earn Tezos",
          "url": "https://www.coinbase.com/earn/tezos",
          "type": "website"
        },
        {
          "name": "Rewards Calculator",
          "url": "https://stake.fish/tezos/calculator/",
          "type": "website"
        },
        {
          "name": "mytezosbaker.com",
          "url": "https://mytezosbaker.com/",
          "type": "website"
        },
        {
          "name": "Baking Cycles Bot",
          "url": "https://twitter.com/tezosalerts",
          "type": "website"
        },
        {
          "name": "tezos",
          "url": "https://twitter.com/tezos",
          "type": "twitter"
        },
        {
          "name": "tezosplatform",
          "url": "https://t.me/tezosplatform",
          "type": "telegram"
        },
        {
          "name": "TezosAnnouncements",
          "url": "https://t.me/TezosAnnouncements",
          "type": "telegram"
        },
        {
          "name": "r/tezos",
          "url": "https://www.reddit.com/r/tezos/",
          "type": "reddit"
        },
        {
          "name": "@tezos",
          "url": "https://medium.com/@tezos",
          "type": "medium"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=715818.0",
          "type": "bitcointalk"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucmexyclrgsifqs_sqmeolqq",
          "type": "youtube"
        },
        {
          "name": "tezos/tezos",
          "url": "https://github.com/tezos/tezos",
          "type": "github"
        },
        {
          "name": "tzstats.com",
          "url": "https://tzstats.com",
          "type": "explorer"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 156,
      "numberOfExchanges": 64,
      "type": "coin",
      "volume": 95431815,
      "marketCap": 1543374391,
      "price": "2.0592509734",
      "circulatingSupply": 749483385.600095,
      "totalSupply": 855764353.774447,
      "approvedSupply": true,
      "firstSeen": 1530662400000,
      "listedAt": 1530662400,
      "change": -3.35,
      "rank": 20,
      "history": [
        "2.1306775618",
        "2.129703078",
        "2.1311154314",
        "2.1123710971",
        "2.1008759343",
        "2.0900693204",
        "2.0708669334",
        "2.0863711344",
        "2.0874260637",
        "2.0933829388",
        "2.0987029202",
        "2.0859875701",
        "2.0699847475",
        "2.0642938836",
        "2.0649794082",
        "2.0621999153",
        "2.0643541659",
        "2.06535727",
        "2.1037334796",
        "2.1187292961",
        "2.137527943",
        "2.1309043972",
        "2.1007389959",
        "2.0915365514",
        "2.0738457685",
        "2.0430820886",
        "2.0592509734"
      ],
      "allTimeHigh": {
        "price": "4.222439340048133",
        "timestamp": 1597276800000
      },
      "penalty": false
    },
    {
      "id": 10296,
      "uuid": "65PHZTpmE55b",
      "slug": "cryptocomchain-cro",
      "symbol": "CRO",
      "name": "Crypto.com Chain",
      "description": null,
      "color": "#01275d",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/2o91jm73M/cro.svg",
      "websiteUrl": "https://crypto.com",
      "socials": [],
      "links": [
        {
          "name": "crypto.com",
          "type": "website",
          "url": "https://crypto.com"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 124,
      "numberOfExchanges": 46,
      "type": "coin",
      "volume": 44435300,
      "marketCap": 1475632287,
      "price": "0.0697434977",
      "circulatingSupply": 21157990866.57991,
      "totalSupply": 100000000000,
      "approvedSupply": true,
      "firstSeen": 1548953220000,
      "listedAt": 1548953220,
      "change": -6.2,
      "rank": 21,
      "history": [
        "0.0743568642",
        "0.0752618305",
        "0.0761115136",
        "0.0754992725",
        "0.0745830988",
        "0.0743509978",
        "0.0740940638",
        "0.0745886033",
        "0.074595459",
        "0.0747837473",
        "0.0746443717",
        "0.0744178406",
        "0.0739546986",
        "0.0736547177",
        "0.0738601937",
        "0.0735477391",
        "0.0732976868",
        "0.072722065",
        "0.0732085356",
        "0.0732726703",
        "0.0733995786",
        "0.0736975223",
        "0.0726298039",
        "0.071909355",
        "0.0709261604",
        "0.069887688",
        "0.0697434977"
      ],
      "allTimeHigh": {
        "price": "0.18109891356945151",
        "timestamp": 1598918400000
      },
      "penalty": false
    },
    {
      "id": 1524,
      "uuid": "PDKcptVnzJTmN",
      "slug": "okb-okb",
      "symbol": "OKB",
      "name": "OKB",
      "description": "<p>OKB (OKB)  is a global utility token issued by the OK Blockchain Foundation, set to connect prospective digital asset projects to OKEx users as well as professional investors, creating an OKEx ecosystem that helps to advance the development of blockchain technology and the digital asset industry. Within the OKEx Exchange, OKB is used as a utility token that allows users to receive discounts when paying for their trading fees.</p>\n<h3>The goal of OKB</h3>\n<p>OKB is a global utility token issued by OKEx and is the native coin of the OKChain blockchain. OKB is used to pay transaction fees, and also used in the decentralized apps (Dapps) developed on OKChain. OKB is now used also in several other use cases, both within and outside the OKEx ecosystem.</p>\n<h3>Who started OKB</h3>\n<p>In 2014, OKEx was created in China, by CRO Tim Byun, COO Andy Cheung, and Director Lennix Lai. Later, the OKEx operations team was secretly developing a blockchain of their own; in 2019 they launched OKChain blockchain mainnet. OKB has since moved from ERC-20 to OKChain and has grown to be accepted and used in various use cases.</p>",
      "color": "#2d60e0",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/BJcjC5rCQ/Okex.svg",
      "websiteUrl": "https://www.okex.com/activity/okbBoss",
      "socials": [
        {
          "name": "okex",
          "url": "https://twitter.com/okex",
          "type": "twitter"
        },
        {
          "name": "okex_announcements",
          "url": "https://t.me/okex_announcements",
          "type": "telegram"
        },
        {
          "name": "okexofficial_en",
          "url": "https://t.me/okexofficial_en",
          "type": "telegram"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/1418774981516264",
          "type": "facebook"
        }
      ],
      "links": [
        {
          "name": "www.okex.com",
          "type": "website",
          "url": "https://www.okex.com/activity/okbBoss"
        },
        {
          "name": "okex",
          "url": "https://twitter.com/okex",
          "type": "twitter"
        },
        {
          "name": "okex_announcements",
          "url": "https://t.me/okex_announcements",
          "type": "telegram"
        },
        {
          "name": "okexofficial_en",
          "url": "https://t.me/okexofficial_en",
          "type": "telegram"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/1418774981516264",
          "type": "facebook"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 132,
      "numberOfExchanges": 36,
      "type": "coin",
      "volume": 49047619,
      "marketCap": 1269225452,
      "price": "4.6067873023",
      "circulatingSupply": 275512058.43,
      "totalSupply": 300000000,
      "approvedSupply": true,
      "firstSeen": 1538524800000,
      "listedAt": 1538524800,
      "change": -1.65,
      "rank": 22,
      "history": [
        "4.683918422",
        "4.6964248885",
        "4.6859496372",
        "4.6816205911",
        "4.6635888636",
        "4.6616255677",
        "4.6529485593",
        "4.6707913855",
        "4.676143036",
        "4.6746030042",
        "4.6732360979",
        "4.680067665",
        "4.6593233985",
        "4.6199994265",
        "4.5630192636",
        "4.5685233271",
        "4.5958537926",
        "4.6128988138",
        "4.6833099802",
        "4.6642834797",
        "4.6650453726",
        "4.6507136071",
        "4.6172324609",
        "4.6169300238",
        "4.6408163309",
        "4.6142791385",
        "4.6067873023"
      ],
      "allTimeHigh": {
        "price": "7.056194853319747",
        "timestamp": 1582070400000
      },
      "penalty": false
    },
    {
      "id": 14755,
      "uuid": "mqtUpyBxu8O8",
      "slug": "leo-leo",
      "symbol": "LEO*",
      "name": "LEO",
      "description": "<p>LEO (LEO) is a utility token issued by parent company iFinex. The token is intended for the use on the Bitfinex exchange and other trading platforms managed by iFinex. The token aims to strengthen the Bitfinex community and optimize the platform’s operations.</p>\n<h3>The goal of Leo</h3>\n<p>LEO is created to make the platform run on a more attractive option for its holders by introducing a whole range of planned benefits for them. As first, the LEO token will support the reduction of taker and lending fees for the use of trading platforms, products and services offered by the iFinex. Second, as LEO is the utility token found at the heart of the Bitfinex ecosystem, it is supposed to optimize the trading processes taking place in it. And proceeds from the LEO token initial exchange offering should help the organizers improve their business prospects.</p>\n<h3>Who started Leo</h3>\n<p>In 2012, Bitfinex was founded as a peer-to-peer Bitcoin-focused exchange, making it one of the older exchange players in the blockchain industry. In May 2019, its core team, which also managed the LEO token project, numbered more than 100 professionals. In line with the company’s stated philosophy of favoring quality over quantity, the headcount of those strictly working on the development does not go above 25.</p>",
      "color": "#063f35",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/12EKqY08r/leo.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "www.bitfinex.com",
          "url": "https://www.bitfinex.com/",
          "type": "website"
        },
        {
          "name": "bitfinex",
          "url": "https://twitter.com/bitfinex",
          "type": "twitter"
        },
        {
          "name": "bitfinex1",
          "url": "https://www.facebook.com/bitfinex1",
          "type": "facebook"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 31,
      "numberOfExchanges": 14,
      "type": "coin",
      "volume": 10501033,
      "marketCap": 1265518995,
      "price": "1.2835304663",
      "circulatingSupply": 985967243,
      "totalSupply": 995239762,
      "approvedSupply": true,
      "firstSeen": 1561471620000,
      "listedAt": 1561471620,
      "change": 0.43,
      "rank": 23,
      "history": [
        "1.2780702936",
        "1.2799085879",
        "1.2820183424",
        "1.2828593513",
        "1.2810574794",
        "1.2806175437",
        "1.2816670762",
        "1.2822734663",
        "1.2840553606",
        "1.2843852249",
        "1.2814620445",
        "1.282019367",
        "1.2815410971",
        "1.2842818242",
        "1.283093294",
        "1.2821122992",
        "1.2825275917",
        "1.2828160886",
        "1.2832351787",
        "1.2833016288",
        "1.2841517127",
        "1.2833383648",
        "1.2808928099",
        "1.2831457749",
        "1.2822763671",
        "1.2834721057",
        "1.2835304663"
      ],
      "allTimeHigh": {
        "price": "1.9049718995580334",
        "timestamp": 1561507200000
      },
      "penalty": false
    },
    {
      "id": 4966,
      "uuid": "Knsels4_Ol-Ny",
      "slug": "cosmos-atom",
      "symbol": "ATOM*",
      "name": "Cosmos",
      "description": "<p>Cosmos is a secure & scalable blockchain ecosystem where thousands of dApps interoperate to create the foundation for a new token economy. The network is made of many independent blockchains that utilize Byzantine fault-tolerant (BFT) consensus mechanisms, including Tendermint BFT. (BFT is the feature of a distributed network to reach consensus even when some of the nodes in the network fail to respond or respond with incorrect information.) Each individual blockchain maintains control of its own governance but is interoperable with other blockchains in the network. Blockchains not using BFT algorithms can be connected to the Cosmos network via “adaptor” blockchains.</p>\n<h3>The goal of Cosmos</h3>\n<p>Cosmos was not designed for one particular use case, but to be adaptable to suit many different use cases. The project tries to solve several blockchain problems, focussing on scalability, usability and interoperability. Cosmos aims to create what they describe as the “‘Internet of Blockchains”, a network of blockchains able to communicate with each other in a decentralized way. ATOm is the native staking token of the Cosmos Hub, however, it’s not the sole asset of the Hub or the entire network. The Cosmos Hub is a “multi-asset” blockchain and other blockchains in the network can have their own native assets.</p>",
      "color": "#5064fb",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/HJzHboruM/atom.svg",
      "websiteUrl": "https://cosmos.network",
      "socials": [
        {
          "name": "cosmos",
          "url": "https://twitter.com/cosmos",
          "type": "twitter"
        },
        {
          "name": "cosmosproject",
          "url": "https://t.me/cosmosproject",
          "type": "telegram"
        },
        {
          "name": "r/cosmosnetwork",
          "url": "https://reddit.com/r/cosmosnetwork",
          "type": "reddit"
        },
        {
          "name": "Medium",
          "url": "https://blog.cosmos.network/",
          "type": "medium"
        },
        {
          "name": "CosmosProject",
          "url": "https://www.youtube.com/c/CosmosProject",
          "type": "youtube"
        }
      ],
      "links": [
        {
          "name": "cosmos.network",
          "type": "website",
          "url": "https://cosmos.network"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/cosmos",
          "type": "website"
        },
        {
          "name": "Rewards calculator",
          "url": "https://stake.fish/en/cosmos/calculator/",
          "type": "website"
        },
        {
          "name": "Validators leaderboard",
          "url": "https://cosmos.fish/leaderboard",
          "type": "website"
        },
        {
          "name": "cosmos",
          "url": "https://twitter.com/cosmos",
          "type": "twitter"
        },
        {
          "name": "cosmosproject",
          "url": "https://t.me/cosmosproject",
          "type": "telegram"
        },
        {
          "name": "r/cosmosnetwork",
          "url": "https://reddit.com/r/cosmosnetwork",
          "type": "reddit"
        },
        {
          "name": "Medium",
          "url": "https://blog.cosmos.network/",
          "type": "medium"
        },
        {
          "name": "CosmosProject",
          "url": "https://www.youtube.com/c/CosmosProject",
          "type": "youtube"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 95,
      "numberOfExchanges": 38,
      "type": "coin",
      "volume": 55876343,
      "marketCap": 1143635377,
      "price": "4.7945920073",
      "circulatingSupply": 238526109.3463,
      "totalSupply": 260368298.1563,
      "approvedSupply": true,
      "firstSeen": 1552520100000,
      "listedAt": 1552520100,
      "change": -1.4,
      "rank": 24,
      "history": [
        "4.8628926982",
        "4.8576735744",
        "4.8571842804",
        "4.8462907759",
        "4.7973747573",
        "4.7650471118",
        "4.759910102",
        "4.788432304",
        "4.7929379597",
        "4.8085736313",
        "4.8021329305",
        "4.7771602863",
        "4.7174153946",
        "4.7061077932",
        "4.7219166417",
        "4.7204654653",
        "4.7300848822",
        "4.7061594267",
        "4.7856098618",
        "4.849816732",
        "4.8643531413",
        "4.8518948814",
        "4.7788189325",
        "4.7565329013",
        "4.7264607373",
        "4.7235393152",
        "4.7945920073"
      ],
      "allTimeHigh": {
        "price": "8.21290730008476",
        "timestamp": 1598313600000
      },
      "penalty": false
    },
    {
      "id": 15,
      "uuid": "cVaOmQWainv7g",
      "slug": "neo-neo",
      "symbol": "NEO",
      "name": "NEO",
      "description": "<p>Neo (NEO) is a distributed smart economy network that utilizes blockchain technology and digital identity. The platform allows digitizing assets and making them self-managed by using smart contracts.</p>\n<h3>The goal of NEO</h3>\n<p>Neo is designed to digitize assets using smart contracts, aiming to bring blockchain to the masses.</p>\n<h3>Who started NEO</h3>\n<p>In 2014, NEO was first launched as Antshares by Da Hongfei,  by Da HongFei and Erik Zhang. In 2017 the project was rebranded as NEO. NEO has an active development team with both in-house developers in charge of developing the platform and a strong community of third-party developers, who develop the decentralized apps (DApps).</p>\n<h3>Neo technology</h3>\n<p>NEO is a unique blockchain algorithm, supporting decentralized commerce, identification, and digitization of various assets. It integrates blockchain technology with the digital identity, creating ways for physical assets like money or company shares assets to be digitized and exchanged over the NEO network in a peer-to-peer manner. NEO wants to create a platform on which other decentralized applications can be built by allowing users to execute smart contracts on their blockchain, thus increasing the spread of the blockchain technology.</p>",
      "color": "#aedb00",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/MgUNVQCeN/neo.svg",
      "websiteUrl": "https://neo.org/",
      "socials": [
        {
          "name": "neo_blockchain",
          "url": "https://twitter.com/neo_blockchain",
          "type": "twitter"
        },
        {
          "name": "r/neo",
          "url": "https://www.reddit.com/r/neo/",
          "type": "reddit"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/neosmartecon/",
          "type": "facebook"
        },
        {
          "name": "neo-project",
          "url": "https://github.com/neo-project",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "neo.org",
          "type": "website",
          "url": "https://neo.org/"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/neo",
          "type": "website"
        },
        {
          "name": "neo_blockchain",
          "url": "https://twitter.com/neo_blockchain",
          "type": "twitter"
        },
        {
          "name": "r/neo",
          "url": "https://www.reddit.com/r/neo/",
          "type": "reddit"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/neosmartecon/",
          "type": "facebook"
        },
        {
          "name": "neo-project",
          "url": "https://github.com/neo-project",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 350,
      "numberOfExchanges": 105,
      "type": "coin",
      "volume": 312818723,
      "marketCap": 1082183696,
      "price": "14.9887569611",
      "circulatingSupply": 72199696,
      "totalSupply": 100000000,
      "approvedSupply": true,
      "firstSeen": 1501891200000,
      "listedAt": 1501891200,
      "change": -3.31,
      "rank": 25,
      "history": [
        "15.5014418062",
        "15.5154556653",
        "15.5853821768",
        "15.5117053729",
        "15.47242051",
        "15.4304605966",
        "15.2928665926",
        "15.384698725",
        "15.4283285253",
        "15.4892084663",
        "15.416827377",
        "15.3079276835",
        "15.2379061588",
        "15.1902961569",
        "15.2097114705",
        "15.163515876",
        "15.1602106344",
        "15.0908782357",
        "15.2416846582",
        "15.3006968921",
        "15.3784394343",
        "15.3900805664",
        "15.2040369832",
        "15.118438618",
        "14.9907051048",
        "14.9264810323",
        "14.9887569611"
      ],
      "allTimeHigh": {
        "price": "169.67828825811074",
        "timestamp": 1516060800000
      },
      "penalty": false
    },
    {
      "id": 74500,
      "uuid": "ymQub4fuB",
      "slug": "filecoin-fil",
      "symbol": "FIL",
      "name": "Filecoin",
      "description": "Filecoin (FIL) is a decentralized storage network designed to store humanity's most important information.",
      "color": "#0090ff",
      "iconType": "pixel",
      "iconUrl": "https://cdn.coinranking.com/vUmvv-IQA/FIL3-filecoin.svg?size=48x48",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "WeChat",
          "url": "https://weixin.qq.com/r/1xz54Y-EctINrcuC90nF",
          "type": "wechat"
        },
        {
          "name": "discuss.filecoin.io",
          "url": "https://discuss.filecoin.io/",
          "type": "website"
        },
        {
          "name": "riot.im",
          "url": "https://riot.im/app/#/group/+filecoin:matrix.org",
          "type": "website"
        },
        {
          "name": "Filecoin",
          "url": "https://twitter.com/Filecoin",
          "type": "twitter"
        },
        {
          "name": "filecoin",
          "url": "https://www.reddit.com/r/filecoin",
          "type": "reddit"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 75,
      "numberOfExchanges": 46,
      "type": "coin",
      "volume": 189719236,
      "marketCap": 933307499,
      "price": "31.0510242846",
      "circulatingSupply": 30057221,
      "totalSupply": null,
      "approvedSupply": true,
      "firstSeen": 1602840240000,
      "listedAt": 1602839473,
      "change": 1.2,
      "rank": 26,
      "history": [
        "30.6813854135",
        "30.7479599815",
        "30.754193009",
        "30.6333093665",
        "30.5693338409",
        "30.5876794492",
        "30.461815712",
        "30.5878586435",
        "30.6740411677",
        "30.6644533113",
        "30.5962971109",
        "30.5106504315",
        "30.4481752987",
        "30.4783850187",
        "30.5642419566",
        "30.5290488874",
        "30.5473060063",
        "30.5546154591",
        "30.8823399292",
        "31.2542403496",
        "31.3374222474",
        "31.2587108609",
        "30.9444389517",
        "31.0233333469",
        "30.9119740833",
        "30.8726718856",
        "31.0510242846"
      ],
      "allTimeHigh": {
        "price": "50.33272963287289",
        "timestamp": 1602806400000
      },
      "penalty": false
    },
    {
      "id": 17,
      "uuid": "DZtb-6X8yCx0h",
      "slug": "nem-xem",
      "symbol": "XEM",
      "name": "NEM",
      "description": "NEM is a configurable blockchain which implements an enterprise blockchain data system, whilst minimizing its complexity to integrate seamlessly with other existing systems.",
      "color": "#67b2e8",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/Bkvu9rOOZ/xem.svg",
      "websiteUrl": "https://nem.io/",
      "socials": [
        {
          "name": "nemofficial",
          "url": "https://twitter.com/nemofficial",
          "type": "twitter"
        },
        {
          "name": "nemred",
          "url": "https://t.me/nemred",
          "type": "telegram"
        },
        {
          "name": "r/nem",
          "url": "https://www.reddit.com/r/nem/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=654845.new#new",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/ournem/",
          "type": "facebook"
        },
        {
          "name": "nemproject",
          "url": "https://github.com/nemproject",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "nem.io",
          "type": "website",
          "url": "https://nem.io/"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/nem",
          "type": "website"
        },
        {
          "name": "nemofficial",
          "url": "https://twitter.com/nemofficial",
          "type": "twitter"
        },
        {
          "name": "nemred",
          "url": "https://t.me/nemred",
          "type": "telegram"
        },
        {
          "name": "r/nem",
          "url": "https://www.reddit.com/r/nem/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=654845.new#new",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/ournem/",
          "type": "facebook"
        },
        {
          "name": "nemproject",
          "url": "https://github.com/nemproject",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 183,
      "numberOfExchanges": 68,
      "type": "coin",
      "volume": 30162773,
      "marketCap": 855709061,
      "price": "0.1209174368",
      "circulatingSupply": 7076804500.9466,
      "totalSupply": 8999999999,
      "approvedSupply": true,
      "firstSeen": 1496361600000,
      "listedAt": 1496361600,
      "change": -3.34,
      "rank": 27,
      "history": [
        "0.1250951683",
        "0.126196718",
        "0.127640868",
        "0.1263997087",
        "0.124681774",
        "0.1247045676",
        "0.1245016639",
        "0.126310814",
        "0.127019915",
        "0.1271061741",
        "0.1282074193",
        "0.1277936108",
        "0.126996641",
        "0.1264954177",
        "0.1261898411",
        "0.1269096413",
        "0.1256778581",
        "0.1226510907",
        "0.1249124672",
        "0.1256153449",
        "0.1265193871",
        "0.1267125722",
        "0.1249857916",
        "0.1237625144",
        "0.1223809251",
        "0.1206082121",
        "0.1209174368"
      ],
      "allTimeHigh": {
        "price": "1.80823794274015",
        "timestamp": 1515110400000
      },
      "penalty": false
    },
    {
      "id": 71,
      "uuid": "DXwP4wF9ksbBO",
      "slug": "huobitoken-ht",
      "symbol": "HT",
      "name": "Huobi Token",
      "description": "<p>The Huobi Token (HT) is a decentralized digital token issued on the Ethereum blockchain. It’s used for trading on the Huobi exchange and initially created to reward Huobi exchange users with lowered fees for using this token. Huobi Token was distributed to pay back the Huobi VIP members in response to China’s crypto ban and decreased trading activity. This token is tradeable with any cryptocurrency on the Huobi exchange and comes with voting rights.</p>\n<h3>The goal of Huobi Token</h3>\n<p>The Huobi Group developed the Huobi Token to be used on the Huobi exchange. It can also be used in all sorts of applications within the Huobi ecosystem and in the global business. The token is created to let Huobi Token holders benefit from the whole ecosystem of Huobi and get ecological sub-token rewards, as well as the valuable promotion brought by sustained repurchase and destruction.</p>\n<h3>Who started Huobi Token</h3>\n<p>In 2013, former Oracle engineer Leon Li. founded the Singapore-based exchange Huobi. Originally based in China, the Huobi Foundation expanded to Singapore, South Korea, and Japan. In 2018, the Huobi Group created the Huobi Token, in response to China’s crypto ban from 2017.</p>",
      "color": "#2daadf",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/ryFpQe0c7/ht.svg",
      "websiteUrl": "https://www.huobi.com/",
      "socials": [
        {
          "name": "huobi_pro",
          "url": "https://twitter.com/huobi_pro",
          "type": "twitter"
        },
        {
          "name": "huobiproofficial",
          "url": "https://t.me/huobiproofficial",
          "type": "telegram"
        },
        {
          "name": "huobi-global",
          "url": "https://medium.com/huobi-global",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucabkgl5rrak61e2qtjtqcxw/featured",
          "type": "youtube"
        },
        {
          "name": "huobiglobalofficial",
          "url": "https://www.instagram.com/huobiglobalofficial",
          "type": "instagram"
        }
      ],
      "links": [
        {
          "name": "www.huobi.com",
          "type": "website",
          "url": "https://www.huobi.com/"
        },
        {
          "name": "huobi_pro",
          "url": "https://twitter.com/huobi_pro",
          "type": "twitter"
        },
        {
          "name": "huobiproofficial",
          "url": "https://t.me/huobiproofficial",
          "type": "telegram"
        },
        {
          "name": "huobi-global",
          "url": "https://medium.com/huobi-global",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucabkgl5rrak61e2qtjtqcxw/featured",
          "type": "youtube"
        },
        {
          "name": "huobiglobalofficial",
          "url": "https://www.instagram.com/huobiglobalofficial",
          "type": "instagram"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 146,
      "numberOfExchanges": 48,
      "type": "coin",
      "volume": 76014102,
      "marketCap": 757324990,
      "price": "3.6903630939",
      "circulatingSupply": 205216931.35441208,
      "totalSupply": 500000000,
      "approvedSupply": true,
      "firstSeen": 1517702400000,
      "listedAt": 1517702400,
      "change": -1.85,
      "rank": 28,
      "history": [
        "3.7600366519",
        "3.7706413404",
        "3.7605533036",
        "3.7527510805",
        "3.7497613563",
        "3.7497485181",
        "3.7516925664",
        "3.7640463841",
        "3.7656915495",
        "3.7626359919",
        "3.7650162931",
        "3.7737486146",
        "3.7698114242",
        "3.7557757226",
        "3.760819051",
        "3.76175261",
        "3.7664989866",
        "3.7461766202",
        "3.762609787",
        "3.7698240155",
        "3.775697591",
        "3.7750798052",
        "3.7327389583",
        "3.7238299396",
        "3.702031385",
        "3.6844471888",
        "3.6903630939"
      ],
      "allTimeHigh": {
        "price": "5.906084061311888",
        "timestamp": 1528243200000
      },
      "penalty": false
    },
    {
      "id": 66001,
      "uuid": "h0XuVJXY",
      "slug": "bitcoinvault-btcv",
      "symbol": "BTCV*",
      "name": "Bitcoin Vault",
      "description": "<p>Bitcoin Vault (BTCV) is developed to provide an extra level of security based on a three-private-key security structure. Bitcoin Vault is described as: ‘Peer-to-Peer Anti-Theft Electronic Gold’.</p>\n<h3>The goal of Bitcoin Vault</h3>\n<p>Bitcoin Vault is created to provide an extra level of security based on a three-private-key security structure. It features all the convenience of Bitcoin while adding important features allowing user transparency and freedom. Bitcoin Vault aims to be the answer to issues faced by the crypto community over the last decade.</p>\n<h3>Who started Bitcoin Vault</h3>\n<p>Eyal Avramovich is the founder of the project. He has been involved in digital mining since 2015. and is a serial inventor and innovator who founded MineBest, a mining company based in Warsaw, Poland. He and his team aimed to answer a need in the crypto community for a coin to deliver superior security features as being safe and transparent. Bitcoin Vault is about fair play, provides an element of choice to the user – between ultra-security and speed. Bitcoin Vault invites everybody with the same vision to contribute at Github.</p>",
      "color": "#c89c65",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/0Ss-HT19O/btcv.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "www.bitcoinvault.global",
          "url": "https://www.bitcoinvault.global/",
          "type": "website"
        },
        {
          "name": "vaultbitcoin",
          "url": "https://twitter.com/vaultbitcoin",
          "type": "twitter"
        },
        {
          "name": "Bitcoin_Vault",
          "url": "https://t.me/Bitcoin_Vault",
          "type": "telegram"
        },
        {
          "name": "YouTube",
          "url": "https://www.youtube.com/c/BitcoinVault",
          "type": "youtube"
        },
        {
          "name": "bitcoinvaultofficial",
          "url": "https://www.facebook.com/bitcoinvaultofficial/",
          "type": "facebook"
        },
        {
          "name": "bitcoinvaultofficial",
          "url": "https://www.instagram.com/bitcoinvaultofficial/",
          "type": "instagram"
        },
        {
          "name": "bitcoinvault",
          "url": "https://github.com/bitcoinvault",
          "type": "github"
        },
        {
          "name": "explorer.bitcoinvault.global",
          "url": "http://explorer.bitcoinvault.global/",
          "type": "explorer"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 19,
      "numberOfExchanges": 10,
      "type": "coin",
      "volume": 28737348,
      "marketCap": 740892505,
      "price": "79.4917055261",
      "circulatingSupply": null,
      "totalSupply": 9320374.99999976,
      "approvedSupply": true,
      "firstSeen": 1578407760000,
      "listedAt": 1578407760,
      "change": -3.6,
      "rank": 29,
      "history": [
        "82.4562725625",
        "82.2282954244",
        "82.766615425",
        "83.1522552487",
        "83.17312014",
        "83.578969846",
        "84.4164738975",
        "85.1826088483",
        "85.6441935065",
        "86.4463511266",
        "86.4376276811",
        "85.3509635259",
        "84.5272578108",
        "84.7748177233",
        "83.2106842069",
        "79.5892397067",
        "79.3066525201",
        "77.0150376306",
        "77.5959335753",
        "78.5447537667",
        "78.7771294649",
        "80.3227002083",
        "79.3606412784",
        "79.0657806283",
        "79.231985892",
        "79.0774908424",
        "79.4917055261"
      ],
      "allTimeHigh": {
        "price": "480.4359817149303",
        "timestamp": 1596672000000
      },
      "penalty": false
    },
    {
      "id": 14585,
      "uuid": "TpHE2IShQw-sJ",
      "slug": "algorand-algo",
      "symbol": "ALGO",
      "name": "Algorand",
      "description": "<p>Algorand (ALGO) is a public blockchain that uses a unique consensus mechanism, called pure proof-of-stake. The company claims that it offers high scalability and that it prevents forks from happening. Algorand makes it simple and fast for developers to build on blockchain; you can build applications on Algorand in your preferred programming languages.</p>\n<h3>The goal of Algorand</h3>\n<p>The Algorand foundation aimed to create an open, public and permissionless blockchain. They had a vision for an inclusive ecosystem that provides an opportunity for everyone to harness the potential of an equitable and truly borderless economy. Algorand aims to be a decentralized, secure, and scalable blockchain which provides a common platform for building products and services for a borderless economy.</p>\n<h3>Who started Algorand</h3>\n<p>In 2017, Algorand was founded by cryptography entrepreneur, and MIT professor, Silvio Micali. He designed the Algorand platform with an internationally recognized team of researchers, mathematicians, cryptographers, and economists.</p> ",
      "color": null,
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/lzbmCkUGB/algo.svg",
      "websiteUrl": "https://algorand.foundation/",
      "socials": [],
      "links": [
        {
          "name": "algorand.foundation",
          "type": "website",
          "url": "https://algorand.foundation/"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/algorand",
          "type": "website"
        },
        {
          "name": "Algorand",
          "url": "https://twitter.com/Algorand",
          "type": "twitter"
        },
        {
          "name": "algorand",
          "url": "https://t.me/algorand",
          "type": "telegram"
        },
        {
          "name": "AlgorandOfficial",
          "url": "https://www.reddit.com/r/AlgorandOfficial/",
          "type": "reddit"
        },
        {
          "name": "algorand",
          "url": "https://medium.com/algorand",
          "type": "medium"
        },
        {
          "name": "algorand",
          "url": "https://www.youtube.com/algorand",
          "type": "youtube"
        },
        {
          "name": "algorand",
          "url": "https://www.facebook.com/algorand/",
          "type": "facebook"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 112,
      "numberOfExchanges": 46,
      "type": "coin",
      "volume": 41266663,
      "marketCap": 721238154,
      "price": "0.2582130914",
      "circulatingSupply": 2793189724.6751957,
      "totalSupply": 10000000000,
      "approvedSupply": true,
      "firstSeen": 1562082540000,
      "listedAt": 1562082540,
      "change": -3.7,
      "rank": 30,
      "history": [
        "0.2681446583",
        "0.2690414553",
        "0.271730208",
        "0.2723551499",
        "0.2692865316",
        "0.2661663036",
        "0.2640577567",
        "0.2649449145",
        "0.2664434501",
        "0.2679176186",
        "0.2681537729",
        "0.2668340504",
        "0.2639244966",
        "0.261379685",
        "0.2615696788",
        "0.2620803128",
        "0.262913678",
        "0.2627581526",
        "0.2691157235",
        "0.2715249708",
        "0.2715808384",
        "0.2700023316",
        "0.2666007874",
        "0.2649592317",
        "0.2597493467",
        "0.2563337004",
        "0.2582130914"
      ],
      "allTimeHigh": {
        "price": "1.1159248749973796",
        "timestamp": 1562112000000
      },
      "penalty": false
    },
    {
      "id": 72821,
      "uuid": "_H5FVG9iW",
      "slug": "uniswap-uni",
      "symbol": "UNI***",
      "name": "Uniswap",
      "description": null,
      "color": "#ff007a",
      "iconType": "pixel",
      "iconUrl": "https://cdn.coinranking.com/1heSvUgtl/uniswap-v2.svg?size=48x48",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "UNI announcement",
          "url": "https://uniswap.org/blog/uni/",
          "type": "website"
        },
        {
          "name": "uniswap.org",
          "url": "https://uniswap.org",
          "type": "website"
        },
        {
          "name": "uniswapprotocol",
          "url": "https://twitter.com/uniswapprotocol",
          "type": "twitter"
        },
        {
          "name": "Uniswap",
          "url": "https://www.reddit.com/r/Uniswap",
          "type": "reddit"
        },
        {
          "name": "discord.com",
          "url": "https://discord.com/invite/XErMcTq",
          "type": "discord"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 72,
      "numberOfExchanges": 38,
      "type": "coin",
      "volume": 223887831,
      "marketCap": 705809215,
      "price": "2.6418305205",
      "circulatingSupply": 267166727.43760663,
      "totalSupply": 1000000000,
      "approvedSupply": true,
      "firstSeen": 1600323420000,
      "listedAt": 1600323371,
      "change": -4.12,
      "rank": 31,
      "history": [
        "2.755447003",
        "2.8130183289",
        "2.8524538833",
        "2.8200554319",
        "2.806773242",
        "2.809498936",
        "2.7777125455",
        "2.8501959717",
        "2.8724912338",
        "2.8546596954",
        "2.8190960056",
        "2.7865272017",
        "2.7397960425",
        "2.6994290449",
        "2.7331383839",
        "2.7246053687",
        "2.7156306224",
        "2.6498461474",
        "2.703475879",
        "2.7274343403",
        "2.7607715568",
        "2.7553925496",
        "2.684137703",
        "2.6741508034",
        "2.639981023",
        "2.617827581",
        "2.6418305205"
      ],
      "allTimeHigh": {
        "price": "6.64580424289189",
        "timestamp": 1600473600000
      },
      "penalty": false
    },
    {
      "id": 19,
      "uuid": "FEbS54wxo4oIl",
      "slug": "vechain-vet",
      "symbol": "VET",
      "name": "VeChain",
      "description": "<p>VeChain (VET) is a blockchain platform focussing on creating an ecosystem that can be used by enterprises for products and information. The ecosystem enables transparency and symmetrical information. The VeChain token is called VET and serves as fuel in the VeChain platform.</p>\n<h3>The goal of VeChain</h3>\n<p>The project is built on top of the VeChainThor public blockchain and wants to build a trust-free and distributed business ecosystem, which is self-circulating and scalable. VeChain strives to provide resources to anyone who wants to solve real-world economic problems. The VeChain platform wants to create market transparency to authorized stakeholders, by providing a 360-degree view of information linked to a product and its business processes, like storage, transportation, and supply.</p>\n<h3>Who started VeChain</h3>\n<p>In 2015, VeChain was founded by Sunny Lu, former CIO of Louis Vuitton China. The project started as a subsidiary of Bitse, one of China’s largest blockchain companies. Initially, the VEN token functioned on the Ethereum blockchain. VeChain transitioned onto its own blockchain and was rebranded in 2018. As part of the rebrand, the VEN blockchain became the VeChainThor (VET) blockchain.</p>",
      "color": "#4bc0fa",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/B1_TDu9Dm/VEN.svg",
      "websiteUrl": "https://www.vechain.com",
      "socials": [
        {
          "name": "vechainofficial",
          "url": "https://twitter.com/vechainofficial",
          "type": "twitter"
        },
        {
          "name": "vechain_official_english",
          "url": "https://t.me/vechain_official_english",
          "type": "telegram"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/hhvxvux",
          "type": "discord"
        },
        {
          "name": "@vechainofficial",
          "url": "https://medium.com/@vechainofficial",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucqkewpu5hkel4o3sxlj3n5a",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/vechain/",
          "type": "facebook"
        },
        {
          "name": "vechain/thor",
          "url": "https://github.com/vechain/thor",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.vechain.com",
          "type": "website",
          "url": "https://www.vechain.com"
        },
        {
          "name": "vechainofficial",
          "url": "https://twitter.com/vechainofficial",
          "type": "twitter"
        },
        {
          "name": "vechain_official_english",
          "url": "https://t.me/vechain_official_english",
          "type": "telegram"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/hhvxvux",
          "type": "discord"
        },
        {
          "name": "@vechainofficial",
          "url": "https://medium.com/@vechainofficial",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucqkewpu5hkel4o3sxlj3n5a",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/vechain/",
          "type": "facebook"
        },
        {
          "name": "vechain/thor",
          "url": "https://github.com/vechain/thor",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 141,
      "numberOfExchanges": 45,
      "type": "coin",
      "volume": 104494497,
      "marketCap": 687498079,
      "price": "0.0106012849",
      "circulatingSupply": 64850448123,
      "totalSupply": 85985041177,
      "approvedSupply": true,
      "firstSeen": 1533427200000,
      "listedAt": 1533427200,
      "change": -5.89,
      "rank": 32,
      "history": [
        "0.011265086",
        "0.0113161948",
        "0.0113270537",
        "0.0112072637",
        "0.0111386647",
        "0.0111179657",
        "0.0110143712",
        "0.0111540534",
        "0.0111290413",
        "0.0111322531",
        "0.0111756158",
        "0.0110807607",
        "0.0109636415",
        "0.0108297953",
        "0.0108433562",
        "0.0108135208",
        "0.010815826",
        "0.0107612757",
        "0.0108723193",
        "0.0109436205",
        "0.0109995851",
        "0.0110513857",
        "0.0107987908",
        "0.0107465128",
        "0.0106529259",
        "0.0105294944",
        "0.0106012849"
      ],
      "allTimeHigh": {
        "price": "0.021679357877631863",
        "timestamp": 1596931200000
      },
      "penalty": false
    },
    {
      "id": 12,
      "uuid": "LtWwuVANwRzV_",
      "slug": "iota-miota",
      "symbol": "MIOTA",
      "name": "IOTA",
      "description": "<p>IOTA (MIOTA) is a cryptocurrency focussing on the internet of things. By using a tangle instead of a blockchain, it achieves a high level of transaction throughput. Besides, the network doesn't charge transaction fees, which makes microtransactions a reality.</p>\n<h3>The goal of Iota</h3>\n<p>IOTA’s goal is to establish a digital ledger technology (DLT) for the Internet of Things (IoT). Their vision contains three fundamental parts. The first is scalability: process a substantial number of transactions per second across a large network of nodes, with fast confirmation times. The second is lightweight: low-power devices should be able to directly participate in the network. And the third is feeless: sending transactions should not require payment of network fees.</p>\n<h3>Who started Iota</h3>\n<p>In 2015, IOTA was founded by David Sonstebo, Sergey Ivancheglo, Dominik Schiener, and Dr. Serguei Popov. IOTA is controlled by the IOTA Foundation, which is a non-profit dedicated to developing the technology and maintaining it license-free for all developers to work with.</p>",
      "color": "#000",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/H1IQ9Bdd-/miota.svg",
      "websiteUrl": "http://iota.org/",
      "socials": [
        {
          "name": "iotatoken",
          "url": "https://twitter.com/iotatoken",
          "type": "twitter"
        },
        {
          "name": "iotatangle",
          "url": "https://t.me/iotatangle",
          "type": "telegram"
        },
        {
          "name": "r/iota",
          "url": "https://www.reddit.com/r/iota/",
          "type": "reddit"
        },
        {
          "name": "Medium",
          "url": "https://blog.iota.org/",
          "type": "medium"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=1216479.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/iotatoken/",
          "type": "facebook"
        },
        {
          "name": "iotaledger",
          "url": "https://github.com/iotaledger",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "iota.org",
          "type": "website",
          "url": "http://iota.org/"
        },
        {
          "name": "iotatoken",
          "url": "https://twitter.com/iotatoken",
          "type": "twitter"
        },
        {
          "name": "iotatangle",
          "url": "https://t.me/iotatangle",
          "type": "telegram"
        },
        {
          "name": "r/iota",
          "url": "https://www.reddit.com/r/iota/",
          "type": "reddit"
        },
        {
          "name": "Medium",
          "url": "https://blog.iota.org/",
          "type": "medium"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=1216479.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/iotatoken/",
          "type": "facebook"
        },
        {
          "name": "iotaledger",
          "url": "https://github.com/iotaledger",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 64,
      "numberOfExchanges": 21,
      "type": "coin",
      "volume": 16641072,
      "marketCap": 686646821,
      "price": "0.2470369995",
      "circulatingSupply": 2779530283,
      "totalSupply": 2779530283,
      "approvedSupply": true,
      "firstSeen": 1497364209000,
      "listedAt": 1497364209,
      "change": -6.26,
      "rank": 33,
      "history": [
        "0.2635263935",
        "0.2648144341",
        "0.2659132538",
        "0.2657031281",
        "0.2644012164",
        "0.2634589476",
        "0.2624217374",
        "0.2640146706",
        "0.2652375507",
        "0.266426986",
        "0.2667079347",
        "0.2662859595",
        "0.2643213194",
        "0.2631432124",
        "0.2611184988",
        "0.2544731631",
        "0.2512122007",
        "0.2504472346",
        "0.2533789273",
        "0.2547572236",
        "0.2558513718",
        "0.2544260125",
        "0.2506033718",
        "0.2487688233",
        "0.2475265592",
        "0.246577754",
        "0.2470369995"
      ],
      "allTimeHigh": {
        "price": "5.773849630683582",
        "timestamp": 1513641600000
      },
      "penalty": false
    },
    {
      "id": 4303,
      "uuid": "rk5XwL6mIjUDp",
      "slug": "celsiusnetwork-cel",
      "symbol": "CEL",
      "name": "Celsius Network",
      "description": "Celsius (CEL) is a utility token designed to transfer value throughout the Celsius platform.",
      "color": null,
      "iconType": "pixel",
      "iconUrl": "https://cdn.coinranking.com/XPU7TeCYD/New-CEL.png",
      "websiteUrl": null,
      "socials": [
        {
          "name": "celsiusnetwork",
          "url": "https://twitter.com/celsiusnetwork",
          "type": "twitter"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://t.me/celsiusnetwork",
          "type": "telegram"
        },
        {
          "name": "@celsiusnetwork",
          "url": "https://medium.com/@celsiusnetwork",
          "type": "medium"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=2968678",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/celsiusnetwork/",
          "type": "facebook"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://github.com/celsiusnetwork",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "celsius.network",
          "url": "https://celsius.network/",
          "type": "website"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://twitter.com/celsiusnetwork",
          "type": "twitter"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://t.me/celsiusnetwork",
          "type": "telegram"
        },
        {
          "name": "CelsiusNetwork",
          "url": "https://www.reddit.com/r/CelsiusNetwork/",
          "type": "reddit"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://medium.com/@celsiusnetwork",
          "type": "medium"
        },
        {
          "name": "Medium",
          "url": "https://link.medium.com/sTpyFR5Y43",
          "type": "medium"
        },
        {
          "name": "BitcoinTalk",
          "url": "https://bitcointalk.org/index.php?topic=2968678",
          "type": "bitcointalk"
        },
        {
          "name": "YouTube",
          "url": "https://www.youtube.com/channel/UC3yZY7UVs-zPKBuyNuPinbQ",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/celsiusnetwork/",
          "type": "facebook"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://instagram.com/celsiusnetwork?igshid=1goal5b75tu9n",
          "type": "instagram"
        },
        {
          "name": "celsiusnetwork",
          "url": "https://github.com/celsiusnetwork",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 24,
      "numberOfExchanges": 15,
      "type": "coin",
      "volume": 5468097,
      "marketCap": 674964247,
      "price": "1.8702835291",
      "circulatingSupply": 360888729.7789,
      "totalSupply": 695658160.9671,
      "approvedSupply": true,
      "firstSeen": 1531958400000,
      "listedAt": 1531958400,
      "change": 0.5,
      "rank": 34,
      "history": [
        "1.8609238685",
        "1.8631256228",
        "1.9105331584",
        "1.9245987877",
        "1.910403141",
        "1.9102678276",
        "1.9063626828",
        "1.931362374",
        "1.9360127566",
        "1.9556451373",
        "1.9457017442",
        "1.9381839808",
        "1.8601857245",
        "1.8329892598",
        "1.8993780148",
        "1.9111949942",
        "1.9113994566",
        "1.8957325899",
        "1.8919130573",
        "1.8671636323",
        "1.8631607814",
        "1.8822177491",
        "1.8743796574",
        "1.8703331191",
        "1.8723283978",
        "1.86988099",
        "1.8702835291"
      ],
      "allTimeHigh": {
        "price": "1.8449556575882777",
        "timestamp": 1604707200000
      },
      "penalty": false
    },
    {
      "id": 13,
      "uuid": "C9DwH-T7MEGmo",
      "slug": "dash-dash",
      "symbol": "DASH",
      "name": "Dash",
      "description": "<p>Dash (DASH) is ‘digital cash’ that works like regular cash, allowing you to exchange your money at a highly secured open-source peer-to-peer network. It wants to enable the user to purchase items online or in-stores, without going through a central authority. Dash is based on a decentralized peer-to-peer network, and secured by strong cryptography. Dash describes itself as portable, inexpensive, divisible, and fast digital cash for both the internet and everyday life. Dash is an open protocol not under the control of any single entity. Anyone can write software to transact on the Dash network without requiring the permission of a central authority. Dash only asks a small fee to prevent spam attacks.</p>\n<h3>The goal of Dash</h3>\n<p>Dash is used around the world as a practical alternative to cash and credit cards, low fees and fast transactions. It is also meant as s solution in the international remittances market. It is particularly popular in regions where technical access barriers exist to traditional payment systems, or where hyperinflation has made existing currency impractical to use.</p>\n<h3>Who started Dash</h3>\n<p>Dash was launched in 2014 by founder Evan Duffield. The project is based on the Bitcoin project, mainly focussing on speed and fungibility. It aims to be a practical alternative to cash, both online and at the point of sale in shops and restaurants.</p>",
      "color": "#1c75bc",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/PyCmduSxt/Dash-D-white_on_blue_circle.svg",
      "websiteUrl": "https://www.dash.org/",
      "socials": [
        {
          "name": "dashpay",
          "url": "https://twitter.com/dashpay",
          "type": "twitter"
        },
        {
          "name": "dash_chat",
          "url": "https://t.me/dash_chat",
          "type": "telegram"
        },
        {
          "name": "r/dashpay",
          "url": "https://www.reddit.com/r/dashpay",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discord.gg/9z8zx5j",
          "type": "discord"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=421615.0",
          "type": "bitcointalk"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucazd2v9yx4a4is2_-unodka",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://facebook.com/dashpay",
          "type": "facebook"
        },
        {
          "name": "dashpay/dash",
          "url": "https://github.com/dashpay/dash",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "www.dash.org",
          "type": "website",
          "url": "https://www.dash.org/"
        },
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/dash",
          "type": "website"
        },
        {
          "name": "dashpay",
          "url": "https://twitter.com/dashpay",
          "type": "twitter"
        },
        {
          "name": "dash_chat",
          "url": "https://t.me/dash_chat",
          "type": "telegram"
        },
        {
          "name": "r/dashpay",
          "url": "https://www.reddit.com/r/dashpay",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discord.gg/9z8zx5j",
          "type": "discord"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=421615.0",
          "type": "bitcointalk"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucazd2v9yx4a4is2_-unodka",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://facebook.com/dashpay",
          "type": "facebook"
        },
        {
          "name": "dashpay/dash",
          "url": "https://github.com/dashpay/dash",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 662,
      "numberOfExchanges": 164,
      "type": "coin",
      "volume": 206763965,
      "marketCap": 658164838,
      "price": "67.1317382039",
      "circulatingSupply": 9804078.60820829,
      "totalSupply": 9804078.60820829,
      "approvedSupply": true,
      "firstSeen": 1391817600000,
      "listedAt": 1391817600,
      "change": -1.88,
      "rank": 35,
      "history": [
        "68.4177283312",
        "68.576094045",
        "68.8383548884",
        "68.493980772",
        "68.2150556079",
        "68.0020611516",
        "67.7853330452",
        "68.0631707043",
        "68.2025173852",
        "68.4206425108",
        "68.3020243472",
        "68.1096219227",
        "67.9289145413",
        "67.8286022429",
        "67.8502952661",
        "67.6746309908",
        "67.6051891886",
        "67.33760725",
        "67.9529047347",
        "68.1915089082",
        "68.440176329",
        "68.4782749191",
        "67.7504388811",
        "67.6120322278",
        "67.1720688781",
        "66.8775588829",
        "67.1317382039"
      ],
      "allTimeHigh": {
        "price": "1482.457721896753",
        "timestamp": 1513900800000
      },
      "penalty": false
    },
    {
      "id": 14066,
      "uuid": "vSo2fu9iE1s0Y",
      "slug": "busd-busd",
      "symbol": "BUSD",
      "name": "BUSD ",
      "description": "BUSD is a stablecoin that is pegged to the US dollar (USD) and issued on the Ethereum blockchain. The issuers of this stablecoin are Binance and Paxos.",
      "color": "#f0b90b",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/6SJHRfClq/busd.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "binance.com",
          "url": "https://www.binance.com/en/busd",
          "type": "website"
        },
        {
          "name": "paxos.com",
          "url": "https://www.paxos.com/busd/",
          "type": "website"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 74,
      "numberOfExchanges": 29,
      "type": "coin",
      "volume": 157800400,
      "marketCap": 635277141,
      "price": "1.0000891302",
      "circulatingSupply": 635220523.5500001,
      "totalSupply": 635220523.5500001,
      "approvedSupply": true,
      "firstSeen": 1563197940000,
      "listedAt": 1563197940,
      "change": 0.12,
      "rank": 36,
      "history": [
        "0.998908952",
        "0.9992694425",
        "0.9992026792",
        "0.9989616623",
        "0.998857755",
        "0.9989233849",
        "0.998703347",
        "0.9991212673",
        "0.999492635",
        "0.9996781288",
        "0.9992226494",
        "0.999106052",
        "0.999310283",
        "0.9994978714",
        "0.9994354998",
        "0.9996166331",
        "0.999648474",
        "0.9999410847",
        "0.9997931331",
        "0.999403647",
        "0.9992196115",
        "0.9991579144",
        "0.9992026801",
        "0.9994860364",
        "0.9999145634",
        "1.0003758994",
        "1.0000891302"
      ],
      "allTimeHigh": {
        "price": "1.0371167533822538",
        "timestamp": 1569283200000
      },
      "penalty": false
    },
    {
      "id": 68589,
      "uuid": "MoTuySvg7",
      "slug": "multi-collateraldai-dai",
      "symbol": "DAI",
      "name": "Multi-Collateral Dai",
      "description": "Dai (DAI) is a stable, decentralized currency. It's created via the Makers (MKR) Dai Stablecoin System. It uses margin trading to respond to changing market conditions and preserve its value against the major world currencies. Unlike other stablecoins whose value is backed directly by USD, it’s backed by crypto collaterals that can be viewed publicly on the Ethereum blockchain.",
      "color": null,
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/mAZ_7LwOE/mutli-collateral-dai.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "makerdao.com",
          "url": "https://makerdao.com/en/",
          "type": "website"
        },
        {
          "name": "MakerDAO",
          "url": "https://twitter.com/MakerDAO",
          "type": "twitter"
        },
        {
          "name": "makerdaoOfficial",
          "url": "https://t.me/makerdaoOfficial",
          "type": "telegram"
        },
        {
          "name": "MakerDAO",
          "url": "https://www.reddit.com/r/MakerDAO/",
          "type": "reddit"
        },
        {
          "name": "www.youtube.com",
          "url": "https://www.youtube.com/MakerDAO",
          "type": "youtube"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 161,
      "numberOfExchanges": 43,
      "type": "coin",
      "volume": 88750717,
      "marketCap": 628078036,
      "price": "1.0073998019",
      "circulatingSupply": 623464521.7270226,
      "totalSupply": 623464753.5621047,
      "approvedSupply": true,
      "firstSeen": 1585574040000,
      "listedAt": 1585574040,
      "change": -0.08,
      "rank": 37,
      "history": [
        "1.0082071531",
        "1.0085981894",
        "1.0085050967",
        "1.0080493615",
        "1.0075499044",
        "1.007436612",
        "1.0085832123",
        "1.008998477",
        "1.0087283987",
        "1.0083068283",
        "1.0084889626",
        "1.0082514301",
        "1.0081572505",
        "1.0081040627",
        "1.0077482625",
        "1.0078356216",
        "1.008202446",
        "1.0087530212",
        "1.0080515852",
        "1.0074185702",
        "1.0073455086",
        "1.0073228044",
        "1.0062848379",
        "1.0066058581",
        "1.0070677434",
        "1.0071511924",
        "1.0073998019"
      ],
      "allTimeHigh": {
        "price": "1.034864103293362",
        "timestamp": 1599782400000
      },
      "penalty": false
    },
    {
      "id": 96,
      "uuid": "B42IRxNtoYmwK",
      "slug": "thetatoken-theta",
      "symbol": "THETA",
      "name": "Theta Token",
      "description": "Theta Token is a token on the Theta blockchain, which aims to become a decentralized streaming network. Theta Tokens are used to encourage users to share their memory and bandwidth, in order to improve the quality of stream delivery and reduce the costs of bandwidth. Theta Token runs on the Ethereum blockchain and can be 1:1 exchanged for native Theta Token at launch.\r\n",
      "color": "#1b1f2a",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/HJHg2k9Lf/theta.svg",
      "websiteUrl": "https://www.thetatoken.org/",
      "socials": [
        {
          "name": "theta-network",
          "url": "https://medium.com/theta-network",
          "type": "medium"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/thetanetwork/",
          "type": "facebook"
        },
        {
          "name": "theta_network",
          "url": "https://twitter.com/theta_network",
          "type": "twitter"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/uctlbcj0nqzr9lrahhccopgq",
          "type": "youtube"
        },
        {
          "name": "r/thetatoken",
          "url": "https://www.reddit.com/r/thetatoken/",
          "type": "reddit"
        },
        {
          "name": "thetanetwork",
          "url": "https://t.me/thetanetwork",
          "type": "telegram"
        },
        {
          "name": "thetatoken",
          "url": "https://github.com/thetatoken",
          "type": "github"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=2451089.0",
          "type": "bitcointalk"
        }
      ],
      "links": [
        {
          "name": "theta-network",
          "url": "https://medium.com/theta-network",
          "type": "medium"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/thetanetwork/",
          "type": "facebook"
        },
        {
          "name": "theta_network",
          "url": "https://twitter.com/theta_network",
          "type": "twitter"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/uctlbcj0nqzr9lrahhccopgq",
          "type": "youtube"
        },
        {
          "name": "r/thetatoken",
          "url": "https://www.reddit.com/r/thetatoken/",
          "type": "reddit"
        },
        {
          "name": "thetanetwork",
          "url": "https://t.me/thetanetwork",
          "type": "telegram"
        },
        {
          "name": "thetatoken",
          "url": "https://github.com/thetatoken",
          "type": "github"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=2451089.0",
          "type": "bitcointalk"
        },
        {
          "name": "www.thetatoken.org",
          "type": "website",
          "url": "https://www.thetatoken.org/"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 72,
      "numberOfExchanges": 32,
      "type": "coin",
      "volume": 30186999,
      "marketCap": 619967373,
      "price": "0.619967373",
      "circulatingSupply": 1000000000,
      "totalSupply": 1000000000,
      "approvedSupply": true,
      "firstSeen": 1516233600000,
      "listedAt": 1516233600,
      "change": -6.6,
      "rank": 38,
      "history": [
        "0.6637769556",
        "0.6661157682",
        "0.6709070487",
        "0.6675659136",
        "0.6645523369",
        "0.6614852907",
        "0.6535503253",
        "0.6576368274",
        "0.6635422371",
        "0.6699964784",
        "0.6709270833",
        "0.6540473677",
        "0.6437382974",
        "0.6411416798",
        "0.6428209085",
        "0.639653773",
        "0.6358453064",
        "0.6311343729",
        "0.6397515641",
        "0.6430665609",
        "0.6454373021",
        "0.6398106851",
        "0.6286788738",
        "0.6271420066",
        "0.6183667941",
        "0.6150758259",
        "0.619967373"
      ],
      "allTimeHigh": {
        "price": "0.7583150806039088",
        "timestamp": 1601769600000
      },
      "penalty": false
    },
    {
      "id": 21,
      "uuid": "aRGRWLf2RYNq4",
      "slug": "zcash-zec",
      "symbol": "ZEC",
      "name": "Zcash",
      "description": "<p>ZCash (ZEC) is a fully anonymous and decentralized blockchain and cryptocurrency. Transactions on its proof of work blockchain are untraceable because of zero-knowledge cryptography. It was created in response to, their words, bitcoin’s flaws. It uses the same algorithm as bitcoin but then in combination with semi-transparent processing, to avoid the transparency of bitcoin. The user transaction data is revealed selectively.</p>\n<h3>The goal of ZCash</h3>\n<p>Zcash is developed to overcome bitcoin’s privacy “flaws” and uses zero-knowledge proofs to verify and validate transactions. ZCash’s blockchain aims to provide practical utility for businesses and large organizations interested in systems that combine the benefits of blockchain technology with privacy.</p>\n<h3>Who started ZCash</h3>\n<p>In 2016, ZCash was founded by Zooko Wilcox-O’Hearn in response to demands for an open financial system with added privacy features. Zcash’s roots lie in Zerocoin, which was developed in the 1980s; ZCash was initially launched as Zerocash back in 2014.</p>",
      "color": "#000",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/rJrKiS_uZ/zec.svg",
      "websiteUrl": "https://z.cash/",
      "socials": [
        {
          "name": "zcashco",
          "url": "https://twitter.com/zcashco",
          "type": "twitter"
        },
        {
          "name": "r/zec",
          "url": "https://www.reddit.com/r/zec/",
          "type": "reddit"
        },
        {
          "name": "zcash",
          "url": "https://github.com/zcash",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "z.cash",
          "type": "website",
          "url": "https://z.cash/"
        },
        {
          "name": "electriccoinco",
          "url": "https://twitter.com/electriccoinco",
          "type": "twitter"
        },
        {
          "name": "r/zec",
          "url": "https://www.reddit.com/r/zec/",
          "type": "reddit"
        },
        {
          "name": "zcash",
          "url": "https://github.com/zcash",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 387,
      "numberOfExchanges": 121,
      "type": "coin",
      "volume": 197034096,
      "marketCap": 607054006,
      "price": "58.1931304339",
      "circulatingSupply": 10431712.5,
      "totalSupply": 10431712.5,
      "approvedSupply": true,
      "firstSeen": 1477612800000,
      "listedAt": 1477612800,
      "change": -4.13,
      "rank": 39,
      "history": [
        "60.7029910862",
        "61.0318467376",
        "61.4897681705",
        "61.1395648056",
        "60.6868222721",
        "60.5452729026",
        "60.3128219952",
        "60.6041179586",
        "60.5709928759",
        "60.6881145044",
        "60.8857394149",
        "60.656650054",
        "60.4460261157",
        "59.9106183145",
        "59.9479294691",
        "59.4640938266",
        "58.8466263031",
        "58.7587976391",
        "59.3811809679",
        "59.6184752514",
        "59.7653445182",
        "59.9945418562",
        "58.8063380946",
        "58.3458262017",
        "57.75523439",
        "57.5204368054",
        "58.1931304339"
      ],
      "allTimeHigh": {
        "price": "5000.000001019066",
        "timestamp": 1477612800000
      },
      "penalty": false
    },
    {
      "id": 74883,
      "uuid": "ixgUfzmLR",
      "slug": "aave-aave",
      "symbol": "AAVE*",
      "name": "Aave",
      "description": null,
      "color": "#B6509E",
      "iconType": "pixel",
      "iconUrl": "https://cdn.coinranking.com/4bpYKqV4X/AAVE.png",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "aave.com",
          "url": "https://aave.com/",
          "type": "website"
        },
        {
          "name": "AaveAave",
          "url": "https://twitter.com/AaveAave",
          "type": "twitter"
        },
        {
          "name": "Aavesome",
          "url": "https://t.me/Aavesome",
          "type": "telegram"
        },
        {
          "name": "reddit.com",
          "url": "https://reddit.com/r/Aave_Official",
          "type": "reddit"
        },
        {
          "name": "aave.aave",
          "url": "https://www.instagram.com/aave.aave/",
          "type": "instagram"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 8,
      "numberOfExchanges": 3,
      "type": "coin",
      "volume": 43649448,
      "marketCap": 590471755,
      "price": "51.7120427465",
      "circulatingSupply": 11418457.353459196,
      "totalSupply": 16000000,
      "approvedSupply": true,
      "firstSeen": 1603447740000,
      "listedAt": 1603447311,
      "change": 2.53,
      "rank": 40,
      "history": [
        "50.4359951299",
        "50.9454639966",
        "50.7865410991",
        "51.9692730437",
        "52.0953061407",
        "50.777187929",
        "50.398104064",
        "51.2322940137",
        "53.3730260489",
        "54.8451963458",
        "54.1831556714",
        "54.7732131398",
        "54.2799398642",
        "53.1981455453",
        "53.0537326037",
        "52.1577732916",
        "51.7618911288",
        "51.1481842973",
        "53.1051537817",
        "53.6563308889",
        "55.9302635313",
        "57.2115126377",
        "55.2202729979",
        "53.8008595826",
        "52.6831775235",
        "51.0873440086",
        "51.7120427465"
      ],
      "allTimeHigh": {
        "price": "43.179608924753445",
        "timestamp": 1604707200000
      },
      "penalty": false
    },
    {
      "id": 16,
      "uuid": "hnfQfsYfeIGUQ",
      "slug": "ethereumclassic-etc",
      "symbol": "ETC",
      "name": "Ethereum Classic",
      "description": "<p>Ethereum Classic (ETC)  is a decentralized smart contracts platform which is a continuation of the Ethereum blockchain. Ethereum Classic preserves original history, excluding external interference and altered transactions. Applications are run exactly as programmed without the possibility of censorship, downtime, or third-party interference. The distributed network consists of a blockchain ledger, native cryptocurrency, and robust ecosystem of on-chain applications and services.</p>\n<h3>The goal of Ethereum Classic</h3>\n<p>The goal of the original project Ethereum was to expand the use cases for cryptocurrencies to applications beyond money. Ethereum enables developers to create new cryptocurrencies and decentralized applications running on top of its blockchain. Ethereum Classic aims to continue this vision. It differs from Ethereum in its technical decisions, made by the developers.</p>\n<h3>Who started Ethereum Classic</h3>\n<p>It’s difficult to say who created Ethereum Classic. The developer most associated with the decision to continue maintaining the original Ethereum is the anonymous Arvicco. Some say, because much of this code is from the original Ethereum developers, that Ethereum’s founder Vitalik Buterin, and his team can be seen as the ones responsible for most of Ethereum Classic’s technical innovations.</p>",
      "color": "#699070",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/rJfyor__W/etc.svg",
      "websiteUrl": "https://ethereumclassic.github.io/",
      "socials": [],
      "links": [
        {
          "name": "ethereumclassic.github.io",
          "type": "website",
          "url": "https://ethereumclassic.github.io/"
        },
        {
          "name": "twitter.com",
          "url": "twitter.com/eth_classic",
          "type": "twitter"
        },
        {
          "name": "EthereumClassic",
          "url": "https://www.reddit.com/r/EthereumClassic/",
          "type": "reddit"
        },
        {
          "name": "discord.com",
          "url": "https://discord.com/invite/HW4GckH",
          "type": "discord"
        },
        {
          "name": "ethereumclassic",
          "url": "https://github.com/ethereumclassic",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 364,
      "numberOfExchanges": 134,
      "type": "coin",
      "volume": 299523791,
      "marketCap": 586413907,
      "price": "5.0416754731",
      "circulatingSupply": 116313299,
      "totalSupply": 107988299,
      "approvedSupply": true,
      "firstSeen": 1469577600000,
      "listedAt": 1469577600,
      "change": -2.35,
      "rank": 41,
      "history": [
        "5.163212985",
        "5.1752474583",
        "5.1720480022",
        "5.1649839371",
        "5.1515981856",
        "5.1420726109",
        "5.1530740772",
        "5.1966971905",
        "5.1899890246",
        "5.1966647573",
        "5.1908239227",
        "5.1677088971",
        "5.1354395655",
        "5.1430513469",
        "5.1473290308",
        "5.1231646948",
        "5.118688065",
        "5.0991548868",
        "5.1210029854",
        "5.130541048",
        "5.1475894874",
        "5.1474371258",
        "5.0829795758",
        "5.0469036802",
        "4.9792207692",
        "4.9526918959",
        "5.0416754731"
      ],
      "allTimeHigh": {
        "price": "43.29748020169307",
        "timestamp": 1515974400000
      },
      "penalty": false
    },
    {
      "id": 22,
      "uuid": "qFakph2rpuMOL",
      "slug": "maker-mkr",
      "symbol": "MKR",
      "name": "Maker",
      "description": "<p>Maker (MKR) is a token on the Ethereum blockchain with the aim to govern, secure and support the Dai Stable Coin system (DCS). It is a smart contract platform that controls and sells Dai; Maker stabilizes the value of Dai to one U.S. dollar using external market mechanisms and economic incentives. Without the need of using a third centralized party, Maker aims to offer a transparent stablecoin system that is operating on the Ethereum blockchain. The Maker Platform has two coins: Makercoin (MKR) and Dai (DAI); Dai is a stable coin that is used for payments, savings, or collateral.</p>\n<h3>The goal of Maker</h3>\n<p>Maker has three important functions on the Maker Platform. The first is utility; you can only use Maker to pay the fees accumulated on Customer Data Platforms (CPDs) that generate Dai in the Maker system. When someone pays a fee, a Maker coin is burned from the supply, which will then decrease. The second function is governance; holders use Maker to vote for the risk management and logistics of the Maker system. And the third is recapitalization resource. If parts of the collateral portfolio become under-collateralized, the system immediately creates new Maker tokens and sells them. This gains money to capitalize the shortfall of value in the system and brings the entire Maker system back from insolvency.</p>",
      "color": "#1abc9c",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/sjHfS7jCS/mkrdao.svg",
      "websiteUrl": "https://makerdao.com",
      "socials": [],
      "links": [
        {
          "name": "makerdao.com",
          "type": "website",
          "url": "https://makerdao.com"
        },
        {
          "name": "r/makerdao",
          "url": "https://www.reddit.com/r/makerdao/",
          "type": "reddit"
        },
        {
          "name": "@makerdao",
          "url": "https://medium.com/@makerdao",
          "type": "medium"
        },
        {
          "name": "makerdao",
          "url": "https://github.com/makerdao/",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 195,
      "numberOfExchanges": 87,
      "type": "coin",
      "volume": 17838022,
      "marketCap": 469980435,
      "price": "516.6902523507",
      "circulatingSupply": 909598.0281926455,
      "totalSupply": 1003154.2169717624,
      "approvedSupply": true,
      "firstSeen": 1502236800000,
      "listedAt": 1502236800,
      "change": -2.84,
      "rank": 42,
      "history": [
        "531.7957266384",
        "533.5547517373",
        "536.1441992448",
        "530.0105890497",
        "526.7894376727",
        "526.7020090678",
        "528.2739908247",
        "533.6141422405",
        "535.0770627426",
        "535.8606743379",
        "534.0016640862",
        "533.6136990373",
        "530.8113189535",
        "528.8326713271",
        "529.5527600228",
        "529.452022671",
        "528.531582742",
        "525.0234576542",
        "532.874543557",
        "534.8797537939",
        "537.4265152269",
        "535.4194187182",
        "529.0068716114",
        "527.7037686485",
        "522.0907341885",
        "516.1888681858",
        "516.6902523507"
      ],
      "allTimeHigh": {
        "price": "4383.449996185815",
        "timestamp": 1502841600000
      },
      "penalty": false
    },
    {
      "id": 71246,
      "uuid": "dYuh_N0n1",
      "slug": "yearnfinance-yfi",
      "symbol": "YFI",
      "name": "yearn.finance",
      "description": null,
      "color": null,
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/bl3ndRz-F/yearn[1].svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "gov.yearn.finance",
          "url": "https://gov.yearn.finance/",
          "type": "website"
        },
        {
          "name": "iearnfinance",
          "url": "https://twitter.com/iearnfinance",
          "type": "twitter"
        },
        {
          "name": "medium.com",
          "url": "https://medium.com/iearn",
          "type": "medium"
        },
        {
          "name": "iearn-finance",
          "url": "https://github.com/iearn-finance",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 126,
      "numberOfExchanges": 65,
      "type": "coin",
      "volume": 617246391,
      "marketCap": 443449600,
      "price": "14797.5798818694",
      "circulatingSupply": 29967.711154168042,
      "totalSupply": 30000,
      "approvedSupply": true,
      "firstSeen": 1596032160000,
      "listedAt": 1596032160,
      "change": -1.27,
      "rank": 43,
      "history": [
        "14988.0901862944",
        "15161.8561185248",
        "15444.0450255943",
        "15357.8534612517",
        "15124.4973762666",
        "15093.598326113",
        "14893.8243817364",
        "15215.3409673291",
        "15177.8488642029",
        "15161.8324430709",
        "14896.6866464151",
        "14779.9988242831",
        "14529.8826492953",
        "14414.0613536003",
        "14650.921587595",
        "14547.5875784559",
        "14527.8473326544",
        "14257.2842815598",
        "14441.2659208234",
        "14742.8321610978",
        "15113.4646891049",
        "15223.6351303207",
        "14753.7563538438",
        "14757.9748316492",
        "14529.5028643177",
        "14497.3386651818",
        "14797.5798818694"
      ],
      "allTimeHigh": {
        "price": "39853.222184080834",
        "timestamp": 1599868800000
      },
      "penalty": false
    },
    {
      "id": 1694,
      "uuid": "B8xT718SbVhhh",
      "slug": "paxosstandard-pax",
      "symbol": "PAX",
      "name": "Paxos Standard",
      "description": null,
      "color": "#085229",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/H1NkFcuhX/pax.svg",
      "websiteUrl": "https://www.paxos.com/standard/",
      "socials": [
        {
          "name": "@paxosstandard",
          "url": "https://medium.com/@paxosstandard",
          "type": "medium"
        },
        {
          "name": "paxosstandard",
          "url": "https://twitter.com/paxosstandard",
          "type": "twitter"
        },
        {
          "name": "paxosglobal/pax-contracts",
          "url": "https://github.com/paxosglobal/pax-contracts",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "@paxosstandard",
          "url": "https://medium.com/@paxosstandard",
          "type": "medium"
        },
        {
          "name": "paxosstandard",
          "url": "https://twitter.com/paxosstandard",
          "type": "twitter"
        },
        {
          "name": "paxosglobal/pax-contracts",
          "url": "https://github.com/paxosglobal/pax-contracts",
          "type": "github"
        },
        {
          "name": "www.paxos.com",
          "type": "website",
          "url": "https://www.paxos.com/standard/"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 423,
      "numberOfExchanges": 84,
      "type": "coin",
      "volume": 101996997,
      "marketCap": 437742264,
      "price": "1.0007239703",
      "circulatingSupply": 437425581.18,
      "totalSupply": 437425581.18,
      "approvedSupply": true,
      "firstSeen": 1539302400000,
      "listedAt": 1539302400,
      "change": 0.17,
      "rank": 44,
      "history": [
        "0.9990044909",
        "0.9995496933",
        "0.999642442",
        "0.9989940178",
        "0.9990336917",
        "0.9983602898",
        "0.9986603271",
        "0.9983180889",
        "0.9987622892",
        "0.9994108138",
        "0.9992554219",
        "0.9991969311",
        "0.9989374004",
        "0.9990960328",
        "0.9990011401",
        "0.9988521721",
        "0.9994591717",
        "0.9996493694",
        "0.9998190756",
        "0.9999739153",
        "0.9999641177",
        "0.9990905625",
        "0.9987263691",
        "0.9991011427",
        "0.9992946276",
        "1.0003152486",
        "1.0007239703"
      ],
      "allTimeHigh": {
        "price": "1.0452913623048152",
        "timestamp": 1539648000000
      },
      "penalty": false
    },
    {
      "id": 24,
      "uuid": "_tpssiAXwrHfr",
      "slug": "omisego-omg",
      "symbol": "OMG",
      "name": "OmiseGo",
      "description": "OmiseGo is a proof of stake blockchain platform built for financial transactions of any kind. The platform is connected to the Ethereum network and features decentralized exchange of both digital assets and fiat.",
      "color": "#1a56f0",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/BJGUoHu_Z/omg.svg",
      "websiteUrl": "https://omg.omise.co/",
      "socials": [
        {
          "name": "omise_go",
          "url": "https://twitter.com/omise_go",
          "type": "twitter"
        },
        {
          "name": "r/omise_go",
          "url": "https://www.reddit.com/r/omise_go/",
          "type": "reddit"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucqgyg8ie6vyhcfddjms_epg",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/omisego/",
          "type": "facebook"
        }
      ],
      "links": [
        {
          "name": "omisego.co",
          "url": "https://omisego.co/",
          "type": "website"
        },
        {
          "name": "omise_go",
          "url": "https://twitter.com/omgnetworkhq",
          "type": "twitter"
        },
        {
          "name": "r/omise_go",
          "url": "https://www.reddit.com/r/omise_go/",
          "type": "reddit"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/ucqgyg8ie6vyhcfddjms_epg",
          "type": "youtube"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/omisego/",
          "type": "facebook"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 398,
      "numberOfExchanges": 149,
      "type": "coin",
      "volume": 210666255,
      "marketCap": 432742113,
      "price": "3.0859093944",
      "circulatingSupply": 140231632.825095,
      "totalSupply": 140245398.24513277,
      "approvedSupply": true,
      "firstSeen": 1499990400000,
      "listedAt": 1499990400,
      "change": -4.72,
      "rank": 45,
      "history": [
        "3.2389413501",
        "3.2330474872",
        "3.2132677602",
        "3.1914372175",
        "3.1645544752",
        "3.1472722005",
        "3.1297429476",
        "3.1653821985",
        "3.1884182758",
        "3.2083483749",
        "3.1989044122",
        "3.1737517292",
        "3.149061575",
        "3.1583425452",
        "3.1605339576",
        "3.1496696258",
        "3.135436631",
        "3.1246122364",
        "3.1606096441",
        "3.1706733813",
        "3.1857948045",
        "3.1601122155",
        "3.1223432439",
        "3.1093255998",
        "3.0743250514",
        "3.0514710275",
        "3.0859093944"
      ],
      "allTimeHigh": {
        "price": "24.84309748019746",
        "timestamp": 1515456000000
      },
      "penalty": false
    },
    {
      "id": 10883,
      "uuid": "sgxZRXbK0FDc",
      "slug": "synthetixnetwork-snx",
      "symbol": "SNX",
      "name": "Synthetix Network",
      "description": "Synthetix (SMX) is a DeFi project in the category 'derivatives'. It is a decentralized platform that provides on-chain exposure to different assets.",
      "color": null,
      "iconType": "pixel",
      "iconUrl": "https://cdn.coinranking.com/c2WntZSPs/snx-synthetix.png",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "Staking guide",
          "url": "https://www.stakingrewards.com/asset/synthetix-network-token",
          "type": "website"
        },
        {
          "name": "synthetix.io",
          "url": "https://www.synthetix.io/",
          "type": "website"
        },
        {
          "name": "synthetix_io",
          "url": "https://twitter.com/synthetix_io",
          "type": "twitter"
        },
        {
          "name": "r/synthetix_io",
          "url": "https://reddit.com/r/synthetix_io",
          "type": "reddit"
        },
        {
          "name": "Discord",
          "url": "https://discordapp.com/invite/AEdUHzt",
          "type": "discord"
        },
        {
          "name": "blog.synthetix.io",
          "url": "https://blog.synthetix.io/",
          "type": "medium"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 115,
      "numberOfExchanges": 59,
      "type": "coin",
      "volume": 82655426,
      "marketCap": 415651272,
      "price": "4.0367975834",
      "circulatingSupply": 102965596.70909624,
      "totalSupply": 203851539.53646886,
      "approvedSupply": true,
      "firstSeen": 1554322020000,
      "listedAt": 1554322020,
      "change": -1.05,
      "rank": 46,
      "history": [
        "4.0796798197",
        "4.0663639525",
        "4.090052937",
        "4.1448592416",
        "4.2371969332",
        "4.2329251338",
        "4.1687963026",
        "4.2557459262",
        "4.4028172893",
        "4.4672203186",
        "4.4669010788",
        "4.5105842659",
        "4.3654723064",
        "4.312384769",
        "4.3357722788",
        "4.3253028985",
        "4.2565940251",
        "4.1707183872",
        "4.2150565745",
        "4.2116878743",
        "4.3569278969",
        "4.3711629621",
        "4.2167193461",
        "4.1472550021",
        "4.0434868788",
        "4.0066275201",
        "4.0367975834"
      ],
      "allTimeHigh": {
        "price": "7.483360240365897",
        "timestamp": 1598918400000
      },
      "penalty": false
    },
    {
      "id": 69380,
      "uuid": "6Cnl5FOCZ",
      "slug": "uma-uma",
      "symbol": "UMA",
      "name": "UMA",
      "description": "UMA (Universal Market Access) is a blockchain protocol designed for the trading and execution of financial contracts. The platform enables the creation of synthetic assets that can track the price of anything. UMA is built on the Ethereum blockchain.",
      "color": null,
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/VD6Xa_BZd/uma-protocol.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "umaproject.org",
          "url": "https://umaproject.org/",
          "type": "website"
        },
        {
          "name": "UMAprotocol",
          "url": "https://twitter.com/UMAprotocol",
          "type": "twitter"
        },
        {
          "name": "medium.com",
          "url": "https://medium.com/uma-project",
          "type": "medium"
        },
        {
          "name": "umaprotocol",
          "url": "https://github.com/umaprotocol",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 66,
      "numberOfExchanges": 37,
      "type": "coin",
      "volume": 5718359,
      "marketCap": 380458028,
      "price": "6.8649732384",
      "circulatingSupply": 55420176.43463838,
      "totalSupply": 101104951.32060479,
      "approvedSupply": true,
      "firstSeen": 1588608060000,
      "listedAt": 1588608060,
      "change": -5.17,
      "rank": 47,
      "history": [
        "7.239213024",
        "7.2645490515",
        "7.2848610041",
        "7.241023671",
        "7.2103240109",
        "7.202236705",
        "7.1391143878",
        "7.1472500294",
        "7.1802255866",
        "7.2191501254",
        "7.2295043751",
        "7.2111356971",
        "7.1643168971",
        "7.1398342185",
        "7.1340527586",
        "7.1363246365",
        "7.1038630544",
        "7.0156887637",
        "7.0434765739",
        "7.0992519675",
        "7.1413444036",
        "7.165207462",
        "7.105441441",
        "7.0293008165",
        "6.9624389297",
        "6.8615506794",
        "6.8649732384"
      ],
      "allTimeHigh": {
        "price": "24.25971660465927",
        "timestamp": 1598918400000
      },
      "penalty": false
    },
    {
      "id": 70838,
      "uuid": "7Dg6y_Ywg",
      "slug": "compound-comp",
      "symbol": "COMP**",
      "name": "Compound",
      "description": "<p>Compound (comp) is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications. It’s a DeFi (Decentralized Finance) project, that enables users to earn money on the cryptocurrencies they’re saving. The project is part of Ethereum.</p>\n<h3>The goal of Compound</h3>\n<p>Compound is a system of openly accessible smart contracts built on Ethereum. With Compound, users are able to earn money on the coins they save. People can also borrow crypto from Compound by putting up collateral above a threshold defined by the project. The project focuses on allowing borrowers to take out loans and lenders to provide loans by locking their crypto assets into the protocol. The interest rates paid and received by borrowers and lenders are determined by the supply and demand of each crypto asset. Interest rates are generated with every block mined. Loans can be paid back and locked assets can be withdrawn at any time.</p>\n<h3>Who started Compound</h3>\n<p>Compound was founded in 2017 and is headquartered in San Francisco, California.\nRobert Leshner, a former economist, is the founder and CEO of Compound. He is a web designer and financial analyst and wants to make privacy mainstream.</p>\n",
      "color": "#00d395",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/2es4I0GGs/compound-icon.svg",
      "websiteUrl": null,
      "socials": [],
      "links": [
        {
          "name": "compound.finance",
          "url": "https://compound.finance/",
          "type": "website"
        },
        {
          "name": "compoundfinance",
          "url": "https://twitter.com/compoundfinance",
          "type": "twitter"
        },
        {
          "name": "compound.finance",
          "url": "https://compound.finance/discord",
          "type": "discord"
        },
        {
          "name": "compound-finance",
          "url": "https://medium.com/compound-finance",
          "type": "medium"
        },
        {
          "name": "compound-protocol",
          "url": "https://github.com/compound-finance/compound-protocol",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 46,
      "numberOfExchanges": 27,
      "type": "coin",
      "volume": 17138902,
      "marketCap": 371004128,
      "price": "94.7238688327",
      "circulatingSupply": 3916691.0413659755,
      "totalSupply": 10000000,
      "approvedSupply": true,
      "firstSeen": 1593519840000,
      "listedAt": 1593519840,
      "change": -3.47,
      "rank": 48,
      "history": [
        "98.1281744498",
        "98.6949027072",
        "99.3637936446",
        "98.8684839685",
        "98.0072929958",
        "96.5351505322",
        "95.701119425",
        "96.3348632828",
        "97.220082908",
        "98.5755572298",
        "99.1835797774",
        "98.2970923205",
        "98.087411183",
        "97.1747534655",
        "97.2403900248",
        "96.9325237753",
        "96.2756790764",
        "95.87996573",
        "97.72600548",
        "98.7368367157",
        "99.1419618764",
        "98.4374659184",
        "96.3654885026",
        "95.8600968343",
        "94.7352318882",
        "94.1869899006",
        "94.7238688327"
      ],
      "allTimeHigh": {
        "price": "251.87319680112932",
        "timestamp": 1598918400000
      },
      "penalty": false
    },
    {
      "id": 43,
      "uuid": "J8xX4Fc9PxEat",
      "slug": "waves-waves",
      "symbol": "WAVES",
      "name": "Waves",
      "description": "<p>Waves (WAVES) is an open blockchain protocol and development toolset for Web 3.0 applications and decentralized solutions, aiming to raise security, reliability and speed of IT systems. It enables anyone to build their apps, fostering mass adoption of blockchain.</p>\n<h3>The goal of Waves</h3>\n<p>Waves is an open blockchain protocol and development toolset for Web 3.0 applications and decentralized solutions, aiming to raise security, reliability, and speed of IT systems. Its goal is to enable anyone to build their apps, fostering mass adoption of blockchain. The project is developed to provide users with the opportunity of creating their own new custom token. Those tokens may be used for loyalty programs, in-app currency creation, and for ICO founding.</p>\n<h3>Who started Waves</h3>\n<p>Entrepreneur Alexander (Sasha) Ivanov is the Waves cryptocurrency platform founder and CEO. He started the project in 2016. The blockchain platform launch campaign raised $16 million, becoming one of the largest in terms of funds raised through crowdfunding.</p>",
      "color": "#0056FF",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/B1tzRbyMz/waves.svg",
      "websiteUrl": "https://wavesplatform.com/",
      "socials": [],
      "links": [
        {
          "name": "www.linkedin.cn",
          "url": "https://www.linkedin.cn/company/waves-platform/",
          "type": "linkedin"
        },
        {
          "name": "Staking guide",
          "url": "https://waves.tech/",
          "type": "website"
        },
        {
          "name": "PyWaves Statistics",
          "url": "https://dev.pywaves.org/",
          "type": "website"
        },
        {
          "name": "wavesprotocol",
          "url": "https://twitter.com/wavesprotocol",
          "type": "twitter"
        },
        {
          "name": "wavesnews ",
          "url": "https://t.me/wavesnews ",
          "type": "telegram"
        },
        {
          "name": "Wavescommunity",
          "url": "https://t.me/Wavescommunity",
          "type": "telegram"
        },
        {
          "name": "r/wavesplatform",
          "url": "https://www.reddit.com/r/wavesplatform",
          "type": "reddit"
        },
        {
          "name": "medium.com",
          "url": "https://medium.com/wavesprotocol",
          "type": "medium"
        },
        {
          "name": "Youtube",
          "url": "https://www.youtube.com/channel/UCYDQN4Fo4rGnOZ22L5plNIw",
          "type": "youtube"
        },
        {
          "name": "wavesplatform",
          "url": "https://github.com/wavesplatform/",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 592,
      "numberOfExchanges": 69,
      "type": "coin",
      "volume": 36728549,
      "marketCap": 360671281,
      "price": "3.486784193",
      "circulatingSupply": 103439519.35631785,
      "totalSupply": 103480582,
      "approvedSupply": true,
      "firstSeen": 1466380800000,
      "listedAt": 1466380800,
      "change": -0.56,
      "rank": 49,
      "history": [
        "3.5065070647",
        "3.5122731191",
        "3.52158361",
        "3.5207275619",
        "3.5117808426",
        "3.5081552512",
        "3.5047558118",
        "3.5220870998",
        "3.5209884201",
        "3.5265496921",
        "3.5227420095",
        "3.5164791221",
        "3.5031320034",
        "3.4932554773",
        "3.4737824718",
        "3.4724941677",
        "3.465334638",
        "3.4523666043",
        "3.4801161635",
        "3.5068648134",
        "3.5116984788",
        "3.5081972951",
        "3.4700467554",
        "3.4570649887",
        "3.4524949826",
        "3.4596966232",
        "3.486784193"
      ],
      "allTimeHigh": {
        "price": "16.324974292976457",
        "timestamp": 1513728000000
      },
      "penalty": false
    },
    {
      "id": 20,
      "uuid": "a91GCGd_u96cF",
      "slug": "dogecoin-doge",
      "symbol": "DOGE",
      "name": "Dogecoin",
      "description": "<p>Dogecoin (DOGE) is the famous Doge internet meme turned into a full-fledged cryptocurrency. It is created to be a joke currency but it grew into something bigger and more serious than intended. Dogecoin is now described as a decentralized, peer-to-peer digital currency that aims to enable users to easily send money online. The dog is their mascot and was popularized as an online meme and represents the coin.</p>\n<h3>The goal of Dogecoin</h3>\n<p>Dogecoin’s goal was to make a funny cryptocurrency that would be free from controversies that normally surrounded all the others. The Dogecoin community has frequently raised funds for charitable causes, from the 2014 Winter Olympics to NASCAR. Dogecoin is a fork of Litecoin.\n<h3>Who started Dogecoin</h3>\n<p>In 2013, Dogecoin was launched by Billy Markus, Jackson Palmer, and “Shibetoshi Nakamoto”; this is not a real person, but refers to Bitcoin’s creator Satoshi Nakamoto and the Shiba Inu breed of dogs, the logo of this cryptocurrency.</p>",
      "color": "#c2a633",
      "iconType": "vector",
      "iconUrl": "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
      "websiteUrl": "http://dogecoin.com/",
      "socials": [
        {
          "name": "dogecoin",
          "url": "https://twitter.com/dogecoin",
          "type": "twitter"
        },
        {
          "name": "r/dogecoin",
          "url": "https://www.reddit.com/r/dogecoin/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=361813.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/officialdogecoin/",
          "type": "facebook"
        },
        {
          "name": "dogecoin/dogecoin",
          "url": "https://github.com/dogecoin/dogecoin",
          "type": "github"
        }
      ],
      "links": [
        {
          "name": "dogecoin.com",
          "type": "website",
          "url": "http://dogecoin.com/"
        },
        {
          "name": "dogecoin",
          "url": "https://twitter.com/dogecoin",
          "type": "twitter"
        },
        {
          "name": "r/dogecoin",
          "url": "https://www.reddit.com/r/dogecoin/",
          "type": "reddit"
        },
        {
          "name": "Bitcoin Talk",
          "url": "https://bitcointalk.org/index.php?topic=361813.0",
          "type": "bitcointalk"
        },
        {
          "name": "Facebook",
          "url": "https://www.facebook.com/officialdogecoin/",
          "type": "facebook"
        },
        {
          "name": "dogecoin/dogecoin",
          "url": "https://github.com/dogecoin/dogecoin",
          "type": "github"
        }
      ],
      "confirmedSupply": true,
      "numberOfMarkets": 2366,
      "numberOfExchanges": 132,
      "type": "coin",
      "volume": 40133197,
      "marketCap": 343398379,
      "price": "0.0027035444",
      "circulatingSupply": 127017843636.35298,
      "totalSupply": 127017843636.35298,
      "approvedSupply": true,
      "firstSeen": 1391212800000,
      "listedAt": 1391212800,
      "change": -1.79,
      "rank": 50,
      "history": [
        "0.0027527482",
        "0.0027477329",
        "0.0027422774",
        "0.0027285364",
        "0.0027325435",
        "0.0027269374",
        "0.0027135203",
        "0.002720514",
        "0.0027125583",
        "0.0027308463",
        "0.0027223629",
        "0.0027343246",
        "0.0027293371",
        "0.0027139804",
        "0.0027153993",
        "0.0027255995",
        "0.0027233659",
        "0.0027247916",
        "0.0027797796",
        "0.0027616618",
        "0.0027669418",
        "0.0027698608",
        "0.0027445762",
        "0.0027327949",
        "0.0027088992",
        "0.0026874079",
        "0.0027035444"
      ],
      "allTimeHigh": {
        "price": "0.016338695524703146",
        "timestamp": 1515369600000
      },
      "penalty": false
    }
  ]
}

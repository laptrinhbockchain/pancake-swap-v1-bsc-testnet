const ChainId = require('@pancakeswap-libs/sdk').ChainId;
const Token = require('@pancakeswap-libs/sdk').Token;
const Pair = require('@pancakeswap-libs/sdk').Pair;
const FACTORY_ADDRESS = require('@pancakeswap-libs/sdk').FACTORY_ADDRESS;
const INIT_CODE_HASH = require('@pancakeswap-libs/sdk').INIT_CODE_HASH;

const swapChainId = ChainId.BSCTESTNET;
const tokenA = new Token(swapChainId, '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7', 18, 'BUSD', 'Binance USD');
const tokenB = new Token(swapChainId, '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684', 18, 'USDT', 'Tether USD');
console.log("FACTORY_ADDRESS:", FACTORY_ADDRESS);
console.log("INIT_CODE_HASH:", INIT_CODE_HASH);
console.log("Pair:", Pair.getAddress(tokenA, tokenB));
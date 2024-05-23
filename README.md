# Lendfinity Interface

An open-source interface for the decentralized liquidity protocol [Lendfinity](https://lendfinity.xyz/).

## How to use

Install it and run:

```sh
cp .env.example .env.local
yarn
yarn dev
```

### Addresses

```bash
┌───────────────────────────────────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                                                   │ address                                      │
├───────────────────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ ACLManager-Bitfinity                                      │ '0x7484BA2BbCAa3A568021d508C0897dE0F7a314Da' │
│ AToken-Bitfinity                                          │ '0x888AF33eFE8584cF0F39F63c381AC77900205536' │
│ AaveOracle-Bitfinity                                      │ '0x88b21fFA2eB0B46496aF0b8f43565b9415190d48' │
│ BorrowLogic                                               │ '0x470cC1E65d133C470B0bB917b1d79e0Cd79C1B79' │
│ BridgeLogic                                               │ '0x7f532d87d89eE131AA543Dc06a3C866CCBAe0955' │
│ CAL-AToken-Bitfinity                                      │ '0xe075623f6582edE4834220ad3811A103a786a5cf' │
│ CAL-StableDebtToken-Bitfinity                             │ '0x83d185De8f5a332ebfCd0b73b8c5d694876914a7' │
│ CAL-TestnetPriceAggregator-Bitfinity                      │ '0x063b9875d6B1d7B354a0b7518efF94B68FB3b3c0' │
│ CAL-VariableDebtToken-Bitfinity                           │ '0x043bb1eE796bF8f9C87F83D280Aa4b22A259eAb9' │
│ CHAP-AToken-Bitfinity                                     │ '0x400511FA6E94D8afD825f10668Fc55d1B428A345' │
│ CHAP-StableDebtToken-Bitfinity                            │ '0x49a049Bc37228351115a9B0fC622954D4d782530' │
│ CHAP-TestnetPriceAggregator-Bitfinity                     │ '0xb78E3E846FAf57Db15FfF17d8200a7736A7EDfBF' │
│ CHAP-VariableDebtToken-Bitfinity                          │ '0xFAc8aeF077EC4C42C98C8C7f014265b180Cb0d11' │
│ COD-AToken-Bitfinity                                      │ '0x980C2b266A4F138cFc2e3DDc43009A919965e22b' │
│ COD-StableDebtToken-Bitfinity                             │ '0x155Fc9Cf7609F5B59a224f391f30536abB3f24e4' │
│ COD-TestnetPriceAggregator-Bitfinity                      │ '0x8bA83450090a4F22649C5d01806d1C2679b1Ba98' │
│ COD-VariableDebtToken-Bitfinity                           │ '0x166981d5edEa1bDC415459f833d2Bfb48A19974e' │
│ CVA-AToken-Bitfinity                                      │ '0xA89679EF2038488445c41cA25421b4dCFB09F8bc' │
│ CVA-StableDebtToken-Bitfinity                             │ '0xcdbaa4D66E63FEC7cA36739b5658B336BcBb2ebb' │
│ CVA-TestnetPriceAggregator-Bitfinity                      │ '0xC3c0692BD68738e444888A8631ce19E44816872a' │
│ CVA-VariableDebtToken-Bitfinity                           │ '0x3BaA00cc8F17ad644487Aecd2ef102701bb7a5Ac' │
│ CYN-AToken-Bitfinity                                      │ '0x6001f4528fE333caE9697785219D51D2a8fB0052' │
│ CYN-StableDebtToken-Bitfinity                             │ '0xB3Ec2882fBf917464E6116A338f325Da275D655a' │
│ CYN-TestnetPriceAggregator-Bitfinity                      │ '0x4921F2e6EE4d823086B32dFEBEA6C9B6cBD54ed2' │
│ CYN-VariableDebtToken-Bitfinity                           │ '0xa647AE4ccbBF7B6928c5149D600bAc349730aA24' │
│ ConfiguratorLogic                                         │ '0xfDFB68F5195DF817824Ee881CF63E94402eEc46A' │
│ DelegationAwareAToken-Bitfinity                           │ '0x25E0D6E5a35Afeac83167B9A01dEa0a8E23853bE' │
│ EModeLogic                                                │ '0xd017CA14405Bd5458f1Bdb522EF4e2c25757B45a' │
│ EmissionManager                                           │ '0x0B15b524011cDF374B87Bd3ED0c844F8948B8608' │
│ FNS-AToken-Bitfinity                                      │ '0x38B675A6C9BD56D6EA92c45fa49aC443d267d6D4' │
│ FNS-StableDebtToken-Bitfinity                             │ '0xA8fE510b15642178c31cb325a224F2a2aD49C11D' │
│ FNS-TestnetPriceAggregator-Bitfinity                      │ '0x5C956bedDDA675c0cAe32409b75804e93F05F337' │
│ FNS-VariableDebtToken-Bitfinity                           │ '0xa8262c9fd49388CE08359fE50af89876fa5D792F' │
│ FlashLoanLogic                                            │ '0xe4BD72fC5498d94fD5c364015696653DeF6e8F61' │
│ INT-AToken-Bitfinity                                      │ '0xd7838C0c8002819C12e10813fa7147d71fb86273' │
│ INT-StableDebtToken-Bitfinity                             │ '0x4471Bf6A92a4289F2256Cc4B7958Ce77a553aAD6' │
│ INT-TestnetPriceAggregator-Bitfinity                      │ '0xd5aab64516b11492d3d3d67e2e2FF79eC6bCF7a3' │
│ INT-VariableDebtToken-Bitfinity                           │ '0x89fDe69E75FF5913DcBc0Ddd21e82A2566947a9C' │
│ IncentivesProxy                                           │ '0x23fca88cf0219EF9e4c0bb0dbCd2Ed47A30B815e' │
│ IncentivesV2-Implementation                               │ '0xe8B3CB3BF75Ae25ec97942AaAce603590DE2b668' │
│ LiquidationLogic                                          │ '0x27081040aef2218553ce33bA1d4BC148c1b41fa3' │
│ Pool-Implementation                                       │ '0x6eED2f58ed21a651CCc42Af123E243FaBad920E0' │
│ Pool-Proxy-Bitfinity                                      │ '0x92cab2B06EA49368536bbe920f1B14d0b1DEf80E' │
│ PoolAddressesProvider-Bitfinity                           │ '0x3aE7F14F039710038cB0E9268e5FAc1451CB5d43' │
│ PoolAddressesProviderRegistry                             │ '0xC10DFcc06b37660446cB99a7A2800469F8D58fE5' │
│ PoolConfigurator-Implementation                           │ '0x02Ae5B9f372FC35658dE3259aFBAcdc3b05F46dA' │
│ PoolConfigurator-Proxy-Bitfinity                          │ '0x1d97B4755899Df4662E13d45EA2fdDf40B2527EF' │
│ PoolDataProvider-Bitfinity                                │ '0x861206158E4E5b09e66E56d5ea5BAD4859f5f75d' │
│ PoolLogic                                                 │ '0x2c445aA8d74dF1cED08500Cb4c752338A5c892bc' │
│ ReserveStrategy-rateStrategyStableOne                     │ '0x3cec062F629879e7f919D07350FB5B51eCba1366' │
│ ReserveStrategy-rateStrategyStableTwo                     │ '0xa4d3463F6f04a4A615b99eaa281fc949A571f028' │
│ ReserveStrategy-rateStrategyVolatileOne                   │ '0xaDBa8c6B588401F5C4b1b7371BBEC244A8aB2235' │
│ ReservesSetupHelper                                       │ '0xf55Af0D2ee9B645D2DE0247353a7bAD71863e28F' │
│ StableDebtToken-Bitfinity                                 │ '0x92F04D478Ea99D8dcF564aAb6444DD347de1766e' │
│ SupplyLogic                                               │ '0xc2258181942Df4e8D79F8384A8f9C1b1117919B3' │
│ TUSDT-AToken-Bitfinity                                    │ '0x4cbCcd53cE1e6F5a696AbAc9b45f49A0b3d76442' │
│ TUSDT-StableDebtToken-Bitfinity                           │ '0xB95D92C3AC5ce29495F1194722d82C88fD74f023' │
│ TUSDT-TestnetPriceAggregator-Bitfinity                    │ '0x08D01510cA9E4539959Fd4244eA1fB7b069A37AE' │
│ TUSDT-VariableDebtToken-Bitfinity                         │ '0x98c415b7CC02AA3D7e31f60bB51aD42ca005686e' │
│ Treasury-Controller                                       │ '0xfa949750F82779376B174C195D8f2baef20750F2' │
│ Treasury-Implementation                                   │ '0x62014E88aa308fF4d68b84a269D45c11Cd2f6B28' │
│ TreasuryProxy                                             │ '0x43194131A3af792B902B7c56a231FF230Cad349E' │
│ UiIncentiveDataProviderV3                                 │ '0xE063a388aDAc130661c6a13d0EB27fdddB97Cc4A' │
│ UiPoolDataProviderV3                                      │ '0x0d92C6d62552D732b3B9dbd7fe6E98e5A71c9D67' │
│ VariableDebtToken-Bitfinity                               │ '0x4C5E52efC85134BB973904e5a3A4EF04693F2525' │
│ WBFT-AToken-Bitfinity                                     │ '0x2136E7175d0E12F30EF774560D3657c1E6fB971a' │
│ WBFT-StableDebtToken-Bitfinity                            │ '0x0BD4c35739c83F937cCF4Dbc433a33c13f556eD5' │
│ WBFT-TestnetPriceAggregator-Bitfinity                     │ '0xbe2f35a908B0EC2D9131c1e713209028C3aF43DE' │
│ WBFT-VariableDebtToken-Bitfinity                          │ '0x2A0bcF772DF786f39910e902CFc78E7Ab814AC4A' │
│ WalletBalanceProvider                                     │ '0xf44221Af97Aa54444164233E0C2EA5932Db55938' │
│ WrappedTokenGatewayV3                                     │ '0x8341FcB21884C0e619c60881231C41f7952E9c25' │
└───────────────────────────────────────────────────────────┴──────────────────────────────────────────────┘
```

## How we forked aave into Bitfinity

### Smart Contracts

1. Add new type

In `types.ts`:

```typescript
export type eNetwork =
  ...
  | eBitfinityNetwork; // new line

//...

export enum eBitfinityNetwork {
  testnet = "bitfinity-testnet",
}
```

2. Configure network

In `hardhat-config-helpers.ts`:

```typescript
import { eBitfinityNetwork } from "./types";

//...

export const NETWORKS_RPC_URL: iParamsPerNetwork<string> = {
  //...
  [eBitfinityNetwork.testnet]: "https://testnet.bitfinity.network",
};
```

3. Add network to `hardhat.config.ts`

```typescript
import { eBitfinityNetwork } from "./helpers/types";

//...

networks: {
  //...
  [eBitfinityNetwork.testnet]: getCommonNetworkConfig(
    eBitfinityNetwork.testnet,
    355113
  ),
}
```

4. Deploy Mock Aggregator to Bitfinity

5. Add aggregator

In `constants.ts`:

```typescript
import { eBitfinityNetwork } from "./types";

export const chainlinkAggregatorProxy: Record<string, string> = {
  //...
  [eEthereumNetwork.bitfinity]: "<AGGREGATOR_ADDRESS>",
};

export const chainlinkEthUsdAggregatorProxy: Record<string, string> = {
  //...
  [eEthereumNetwork.bitfinity]: "<AGGREGATOR_ADDRESS>",
};
```

6. Configure .env

Make sure your market configuration is set to Aave, so:

```bash
MARKET_NAME=Bitfinity
```

Configure MNEMONIC as well.

7. Install dependencied and deploy!

```bash
npm i

HARDHAT_NETWORK=bitfinity-testnet npx hardhat deploy
```

If the deployment is successful, it will show you all the deployed contract and their addresses.

### Interface

1. Add Bitfinity to networks

In `src/ui-config/networksConfig.ts`:

```typescript
export const networkConfigs: Record<string, BaseNetworkConfig> = {
  //...
  355113: {
    name: "Bitfinity Testnet",
    publicJsonRPCUrl: ["https://testnet.bitfinity.network"],
    baseAssetSymbol: "BTF",
    wrappedBaseAssetSymbol: "BTF",
    baseAssetDecimals: 18,
    explorerLink: "https://explorer.testnet.bitfinity.network/",
    isTestnet: true,
    networkLogoPath: "/icons/networks/bitfinity.svg",
  },
};
```

2. Add Bitfinity market:

In `src/ui-config/marketsConfig.tsx`:

```typescript
export enum CustomMarket {
  //...
  proto_bitfinity_testnet_v3 = "proto_bitfinity_testnet_v3",
}

//...

export const marketsData: {
  //...
  [CustomMarket.proto_bitfinity_testnet_v3]: {
    marketTitle: 'Bitfinity Testnet',
    market: CustomMarket.proto_bitfinity_testnet_v3,
    v3: true,
    chainId: 355113 as ChainId,
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '<PoolAddressesProvider-Bitfinity>',
      LENDING_POOL: '<Pool-Proxy-Bitfinity>',
      WETH_GATEWAY: '<WrappedTokenGatewayV3>',
      WALLET_BALANCE_PROVIDER: '<WalletBalanceProvider>',
      UI_POOL_DATA_PROVIDER: '<UiPoolDataProviderV3>',
    },
  },
}
```

3. Set Bitfinity as the default network

in `src/components/transactions/Switch/SwitchModal.tsx`:

```typescript
const defaultNetwork = marketsData[CustomMarket.proto_bitfinity_testnet_v3];
```

4. Add Bitfinity Logo

Create the Bitfinity logo at `public/icons/networks/bitfinity.svg`

5. Run the project

```bash
yarn

yarn run dev
```

You should get a frontend that looks exactly like AAVE, but with an extra network,
Bitfinity

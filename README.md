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
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                                 │ address                                      │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│ ACLManager-Bitfinity                    │ '0xC6CccA04981FA1380fED9014b9A79c3f2a5B7C46' │
│ AToken-Bitfinity                        │ '0x9FC087971b01DCBeceF4781D121ffFb9e40399f5' │
│ AaveOracle-Bitfinity                    │ '0xF4349A832fd6b3254695BE2495ca0fda2CF51CD7' │
│ BorrowLogic                             │ '0x9E809Dc9a86ceB90e5C7BF4f39c7ccABe659B6Ae' │
│ BridgeLogic                             │ '0xdC1f0d1C670aE7360ab69491B4D873DEc982ab55' │
│ CAL-AToken-Bitfinity                    │ '0x860aF52f67d2dAB85FC222efEDD4E2e9b85c8084' │
│ CAL-StableDebtToken-Bitfinity           │ '0x1fdc6cd686F0e5Bb4247dd1da44613D5D9cB2DC3' │
│ CAL-TestnetPriceAggregator-Bitfinity    │ '0x560Ebd81C2595c19B647e1cF103b44b2c48FE5c3' │
│ CAL-VariableDebtToken-Bitfinity         │ '0x4fAE963b039Fd5dCaD8c46d477d6C5CccdCF2a33' │
│ CHAP-AToken-Bitfinity                   │ '0xAd66E096F814182394eB6ac3F98781d13Da0Dc37' │
│ CHAP-StableDebtToken-Bitfinity          │ '0xf6bD14cCd0689573E62F1Fab8C6b9747C8073d0d' │
│ CHAP-TestnetPriceAggregator-Bitfinity   │ '0x1Ae62C8D38892edBB8Ae2793b54a24fF942BfE22' │
│ CHAP-VariableDebtToken-Bitfinity        │ '0x1c109133F6a40Dd08A39b8ABc20D37E0D7Be95B1' │
│ COD-AToken-Bitfinity                    │ '0xF76Bf86de2b27f1a15129007413734c9F0cF8411' │
│ COD-StableDebtToken-Bitfinity           │ '0x825C195531DCD531C2bb5fb171FFf3AA6e6A0687' │
│ COD-TestnetPriceAggregator-Bitfinity    │ '0x528bd9cbDC64d87f465EE1Fd6b370087cE199768' │
│ COD-VariableDebtToken-Bitfinity         │ '0xDfEA4Af3EF5e57fC10f16427C030A34c249F81Ba' │
│ CVA-AToken-Bitfinity                    │ '0x187213801B48Eac9cfD6A1Eb3072ADbd75493A9D' │
│ CVA-StableDebtToken-Bitfinity           │ '0x53301AAC0a7f25Bb63017Ae22F16676bdDc9C6B8' │
│ CVA-TestnetPriceAggregator-Bitfinity    │ '0xf0466545d36Aa0E8d89cE26E3A56857b366e636b' │
│ CVA-VariableDebtToken-Bitfinity         │ '0xfd84df272321b72A64293d01A16E966061657cc6' │
│ CYN-AToken-Bitfinity                    │ '0xD8f09c18Cb5b395a709eeE79E72E8fa9499FC74a' │
│ CYN-StableDebtToken-Bitfinity           │ '0xB55A39A7939f7353d0aC170f7b4CE57101Fe3a34' │
│ CYN-TestnetPriceAggregator-Bitfinity    │ '0xD275f6F8aDc8Bf6b2e24a30Dd94f6326e7bB8bA2' │
│ CYN-VariableDebtToken-Bitfinity         │ '0xA0fc15f5FEE13Fcd37407d395c877861e14118c7' │
│ ConfiguratorLogic                       │ '0x9867032Ab5A03aE9C70b7948ae6b46422d556342' │
│ DelegationAwareAToken-Bitfinity         │ '0x153c299219D31111f1237C86180e9962e49a33D2' │
│ EModeLogic                              │ '0x42dD9CC51674411fE3d9A7620F1a25696C6A59e2' │
│ EmissionManager                         │ '0xECACAfc830d141546EAE236cDAc295b6b0F9fd0b' │
│ FNS-AToken-Bitfinity                    │ '0x0c2c17ABb51cd3905a6F2c99D687F45AE6e57Ec9' │
│ FNS-StableDebtToken-Bitfinity           │ '0xB85A17009F7E3C91B44810adD4DA6eE5479599fd' │
│ FNS-TestnetPriceAggregator-Bitfinity    │ '0x03ac74299c91ed238B34702C49ff424f626a0920' │
│ FNS-VariableDebtToken-Bitfinity         │ '0x374B549d3527b83E8BE02BB8f151A01dB8E4ffe5' │
│ FlashLoanLogic                          │ '0x8052CF347eD69d4e68036a163EE2305eda485122' │
│ INT-AToken-Bitfinity                    │ '0xee2e950198f0ef57c23aC9c231aD8262b23A04d4' │
│ INT-StableDebtToken-Bitfinity           │ '0x45EBAD3D968a46cF396b8428B5E5208b31E457fD' │
│ INT-TestnetPriceAggregator-Bitfinity    │ '0x76b70aE8c9a9A4467a1cA3D7339F86D854f476c0' │
│ INT-VariableDebtToken-Bitfinity         │ '0x9c1F43cbc720Ba5c4ceAC9fFF8AA4A7DB6182739' │
│ IncentivesProxy                         │ '0x0DaadB0211184a7D029621cEbd76318d9fE0CF47' │
│ IncentivesV2-Implementation             │ '0xa524FFD704A4E33566C230bfcd3567251ca42aD8' │
│ LiquidationLogic                        │ '0xdDc7203b76f2D1bc710954a62fC7D862186DA952' │
│ Pool-Implementation                     │ '0x5EbB64Ae4713bEf67BfA585E56696Bb24a5D5f6a' │
│ Pool-Proxy-Bitfinity                    │ '0x18dD37f2796d025A55D076f78B0873FC119ef610' │
│ PoolAddressesProvider-Bitfinity         │ '0xAC8Eefc3f493D475e4035068EfAC659e5420312B' │
│ PoolAddressesProviderRegistry           │ '0xf2e1D9e3845b9321381877F7886f941A9539d739' │
│ PoolConfigurator-Implementation         │ '0x20a6cA621b338148F1d079FDa98251C0B81e167e' │
│ PoolConfigurator-Proxy-Bitfinity        │ '0x7c3126955663c05bFb859cf473B1E7315d59C6fb' │
│ PoolDataProvider-Bitfinity              │ '0x2388d1B9D8e958528643Ef6046c638879E210294' │
│ PoolLogic                               │ '0xF4B85404D8D619fB25Df0d1841979A3Eb659459c' │
│ ReserveStrategy-rateStrategyStableOne   │ '0x45010cBB952279B49c3Db5f6C73606f510667229' │
│ ReserveStrategy-rateStrategyStableTwo   │ '0x750FE23C38E54e7653e4e712Bb90410b5FAAA54A' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x17B43460aAA42Dd72C26A10B5038Ac2cB2278E49' │
│ ReservesSetupHelper                     │ '0x99Af68711af938cF11F9efCA6F472CD243C3b259' │
│ StableDebtToken-Bitfinity               │ '0x8F14929310721e6B17461c329f8633B2d1aCF85B' │
│ SupplyLogic                             │ '0x221d0A359a46427063fFBEbD606E96aD22f91404' │
│ Treasury-Controller                     │ '0x8bAF11Bb2f5C35D81fD21Cd40Eae0c205113cbA1' │
│ Treasury-Implementation                 │ '0xb82A4926BCbE123Cf5b585Ac0844DC53703c62B9' │
│ TreasuryProxy                           │ '0x17eC417E905D5084375199BC95908f194147fee3' │
│ VariableDebtToken-Bitfinity             │ '0x76E0923B735Cbf86B69e7B8fE558886f3840Ff1d' │
│ WBFT-AToken-Bitfinity                   │ '0xcD85Ae040f2Bd06291ae98d7B826786937F9Faa5' │
│ WBFT-StableDebtToken-Bitfinity          │ '0x679A2745C7d412414A5f64309AF66575931E2802' │
│ WBFT-TestnetPriceAggregator-Bitfinity   │ '0xe888c1aCD85730bd9F63762e9bbbAa71c817edbE' │
│ WBFT-VariableDebtToken-Bitfinity        │ '0x08D5CC7Cb3BF001e71220d1f5CEEB24B79bFF06C' │
│ WalletBalanceProvider                   │ '0x6D396Ef29C3f4873e9861978f299bdE458116eB8' │
│ WrappedTokenGatewayV3                   │ '0xE7Df3511F5135Ff492c6f9E2072d4eA53E992B8d' │
│ tUSDT-AToken-Bitfinity                  │ '0x8AA3E8c0bFAE87eD73d27dd6f8c224B863554C9A' │
│ tUSDT-StableDebtToken-Bitfinity         │ '0x4Df95d23415c0C31708BC9F6a944bBae7dC29774' │
│ tUSDT-TestnetPriceAggregator-Bitfinity  │ '0x6Ea90906c240f2F3b15dE880b3C7775c2AcFcc40' │
│ tUSDT-VariableDebtToken-Bitfinity       │ '0x1De05092Eb8f833A923471C8F3b2c79361d5Af21' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘
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
MARKET_NAME=Aave
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
    enabledFeatures: {
      faucet: true,
    },
    addresses: {
      LENDING_POOL_ADDRESS_PROVIDER: '<PoolAddressesProvider-Aave>',
      LENDING_POOL: '<Pool-Proxy-Aave>',
      WETH_GATEWAY: '<WrappedTokenGatewayV3>',
      FAUCET: '<Faucet-Aave>',
      WALLET_BALANCE_PROVIDER: '<WalletBalanceProvider>',
      UI_POOL_DATA_PROVIDER: '<UiPoolDataProviderV3>',
      UI_INCENTIVE_DATA_PROVIDER: '<UiIncentiveDataProviderV3>',
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

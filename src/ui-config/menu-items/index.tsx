import { BookOpenIcon, CreditCardIcon } from '@heroicons/react/outline';
import { t } from '@lingui/macro';
import { ReactNode } from 'react';
import { ROUTES } from 'src/components/primitives/Link';

import { MarketDataType } from '../marketsConfig';

interface Navigation {
  link: string;
  title: string;
  isVisible?: (data: MarketDataType) => boolean | undefined;
  dataCy?: string;
}

export const navigation: Navigation[] = [
  {
    link: ROUTES.dashboard,
    title: t`Dashboard`,
    dataCy: 'menuDashboard',
  },
  {
    link: ROUTES.markets,
    title: t`Markets`,
    dataCy: 'menuMarkets',
  },
  {
    link: ROUTES.faucet,
    title: t`Faucet`,
  },
  {
    link: ROUTES.bridge,
    title: t`Bridge`,
  },
  // {
  //   link: ROUTES.airdrop,
  //   title: t`Airdrop`,
  // },
  // {
  //   link: ROUTES.staking,
  //   title: t`Stake`,
  //   dataCy: 'menuStake',
  //   isVisible: () =>
  //     process.env.NEXT_PUBLIC_ENABLE_STAKING === 'true' &&
  //     process.env.NEXT_PUBLIC_ENV === 'prod' &&
  //     !ENABLE_TESTNET,
  // },
  // {
  //   link: ROUTES.governance,
  //   title: t`Governance`,
  //   dataCy: 'menuGovernance',
  //   // isVisible: () =>
  //   //   process.env.NEXT_PUBLIC_ENABLE_GOVERNANCE === 'true' &&
  //   //   process.env.NEXT_PUBLIC_ENV === 'prod' &&
  //   //   !ENABLE_TESTNET,
  // },
  // {
  //   link: ROUTES.faucet,
  //   title: t`Faucet`,
  //   isVisible: () => process.env.NEXT_PUBLIC_ENV === 'staging' || ENABLE_TESTNET,
  // },
];

interface MoreMenuItem extends Navigation {
  icon: ReactNode;
  makeLink?: (walletAddress: string) => string;
}

const moreMenuItems: MoreMenuItem[] = [
  // {
  //   link: 'https://docs.aave.com/faq/',
  //   title: t`FAQ`,
  //   icon: <QuestionMarkCircleIcon />,
  // },
  {
    link: 'https://docs.lendfinity.xyz/',
    title: t`Documentation`,
    icon: <BookOpenIcon />,
  },
];

const fiatEnabled = process.env.NEXT_PUBLIC_FIAT_ON_RAMP;
if (fiatEnabled === 'true') {
  moreMenuItems.push({
    link: 'https://global.transak.com',
    makeLink: (walletAddress) =>
      `${process.env.NEXT_PUBLIC_TRANSAK_APP_URL}/?apiKey=${process.env.NEXT_PUBLIC_TRANSAK_API_KEY}&walletAddress=${walletAddress}&disableWalletAddressForm=true`,
    title: t`Buy Crypto With Fiat`,
    icon: <CreditCardIcon />,
  });
}
export const moreNavigation: MoreMenuItem[] = [...moreMenuItems];

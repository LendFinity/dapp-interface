import { Trans } from '@lingui/macro';
import { CustomMarket } from 'src/ui-config/marketsConfig';

export const AssetsBeingOffboarded: { [market: string]: { [symbol: string]: string } } = {
  [CustomMarket.proto_mainnet]: {
    BUSD: 'https://governance.aave.com/t/arfc-busd-offboarding-plan/12170',
    TUSD: 'https://governance.aave.com/t/arfc-tusd-offboarding-plan/14008',
  },
};

export const OffboardingWarning = () => {
  return (
    <Trans>
      This asset is planned to be offboarded due to a Lendfinity Protocol Governance decision.{' '}
      {/* <Link href={discussionLink} sx={{ textDecoration: 'underline' }}>
        <Trans>More details</Trans>
      </Link> */}
    </Trans>
  );
};

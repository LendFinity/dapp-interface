import { Trans } from '@lingui/macro';

// import { getFrozenProposalLink } from '../infoTooltips/FrozenTooltip';
// import { Link } from '../primitives/Link';

// interface BorrowDisabledWarningProps {
//   symbol: string;
//   currentMarket: string;
// }

export const BorrowDisabledWarning = () => {
  return (
    <Trans>
      Borrowing is disabled due to a Lendfinity community decision.{' '}
      {/* <Link
        href={getFrozenProposalLink(symbol, currentMarket)}
        sx={{ textDecoration: 'underline' }}
      >
        <Trans>More details</Trans>
      </Link> */}
    </Trans>
  );
};

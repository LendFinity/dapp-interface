import { Trans } from '@lingui/macro';
import { Warning } from 'src/components/primitives/Warning';

export const BasicParameterChangewarning = () => {
  return (
    <Warning severity="info" sx={{ my: 6 }}>
      <Trans>
        <b>Attention:</b> Parameter changes via governance can alter your account health factor and
        risk of liquidation.
      </Trans>
    </Warning>
  );
};

export const ParameterChangewarning = () => {
  // const trackEvent = useRootStore((store) => store.trackEvent);

  return (
    <Warning severity="info" sx={{ my: 6 }}>
      <Trans>
        <b>Attention:</b> Parameter changes via governance can alter your account health factor and
        risk of liquidation.
        {/* Follow the{' '}
        <a
          onClick={() => {
            trackEvent(GENERAL.EXTERNAL_LINK, {
              asset: underlyingAsset,
              Link: 'Governance Link',
            });
          }}
          href="https://governance.aave.com/"
        >
          Aave governance forum
        </a>{' '}
        for updates. */}
      </Trans>
    </Warning>
  );
};

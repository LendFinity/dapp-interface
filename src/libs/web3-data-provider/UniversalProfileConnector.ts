import { AbstractConnector } from '@web3-react/abstract-connector';
import { ConnectorUpdate } from '@web3-react/types';

export class UniversalProfileConnector extends AbstractConnector {
  constructor(kwargs = {}) {
    super(kwargs);
  }

  provider: any;

  public async activate(): Promise<ConnectorUpdate> {
    const providers: Array<{
      info: { name: string; icon: string };
      provider: any;
    }> = [];

    const handleAnnouncement = (event: any) => {
      providers.push(event.detail);
    };

    window.addEventListener('eip6963:announceProvider', handleAnnouncement);

    window.dispatchEvent(new Event('eip6963:requestProvider'));

    await new Promise((resolve) => setTimeout(resolve, 100));

    window.removeEventListener('eip6963:announceProvider', handleAnnouncement);

    const universalProfileProvider = providers.find(
      (p) =>
        p.info.name.toLowerCase().includes('lukso') ||
        p.info.name.toLowerCase().includes('universal profile')
    );

    if (!universalProfileProvider) {
      throw new Error(
        'Universal Profile provider not found. Please install the Universal Profile extension.'
      );
    }

    const provider = universalProfileProvider.provider;
    const accounts = await provider.request({ method: 'eth_requestAccounts' });

    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found');
    }

    const account = accounts[0];
    const chainId = await provider.request({ method: 'eth_chainId' });

    this.provider = provider;

    return {
      provider,
      chainId: parseInt(chainId, 16),
      account,
    };
  }

  public async getProvider(): Promise<any> {
    return this.provider;
  }

  public async getChainId(): Promise<number> {
    return this.provider
      .request({ method: 'eth_chainId' })
      .then((chainId: string) => parseInt(chainId, 16));
  }

  public async getAccount(): Promise<string> {
    return this.provider
      .request({ method: 'eth_accounts' })
      .then((accounts: string[]): string => accounts[0]);
  }

  public deactivate(): void {
    // Nothing to do here
  }
}

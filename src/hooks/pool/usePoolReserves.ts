import { ReservesDataHumanized } from '@aave/contract-helpers';
import { useQueries, UseQueryOptions } from '@tanstack/react-query';
import { MarketDataType } from 'src/ui-config/marketsConfig';
import { POLLING_INTERVAL, queryKeysFactory } from 'src/ui-config/queries';
import { useSharedDependencies } from 'src/ui-config/SharedDependenciesProvider';

import { HookOpts } from '../commonTypes';

export const usePoolsReservesHumanized = <T = ReservesDataHumanized>(
  marketsData: MarketDataType[],
  opts?: HookOpts<ReservesDataHumanized, T>
) => {
  const { uiPoolService } = useSharedDependencies();
  return useQueries({
    queries: marketsData.map(
      (marketData) =>
        ({
          queryKey: queryKeysFactory.poolReservesDataHumanized(marketData),
          queryFn: async () => {
            const response = await uiPoolService.getReservesHumanized(marketData);
            return {
              ...response,
              reservesData: response.reservesData.map((reserve) =>
                reserve.symbol === 'WBFT'
                  ? {
                      ...reserve,
                      symbol: 'WBTF',
                      name: 'WBTF',
                    }
                  : reserve
              ),
            };
          },
          refetchInterval: POLLING_INTERVAL,
          meta: {},
          ...opts,
        } as UseQueryOptions<ReservesDataHumanized, Error, T>)
    ),
  });
};

export const usePoolReservesHumanized = (marketData: MarketDataType) => {
  return usePoolsReservesHumanized([marketData])[0];
};

import { setup as sentrySetup } from './sentry';
import api from './sanity';
import { queryClient } from './reactQuery';
import('ui/styles');

const setupApp = () => {
  const isProduction = process.env.NODE_ENV !== 'production';
  sentrySetup(isProduction);

  return {
    api,
    queryClient,
  };
};

export { api, queryClient, setupApp };

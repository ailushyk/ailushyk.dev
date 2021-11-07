import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const isProduction = process.env.NODE_ENV !== 'production';

export const configApp = () => {
  if (isProduction) {
    Sentry.init({
      dsn: 'https://ef67476e339a43dfa653feb3e9d96324@o1049467.ingest.sentry.io/6030732',
      integrations: [new Integrations.BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }
};

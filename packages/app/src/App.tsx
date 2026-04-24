import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';
import fairwindsInsightsPlugin from '@backstage-community/plugin-fairwinds-insights/alpha';

export default createApp({
  features: [catalogPlugin, navModule, fairwindsInsightsPlugin],
});

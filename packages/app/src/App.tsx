import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { fairwindsInsightsCatalogModule } from './modules/fairwinds-insights';
import { navModule } from './modules/nav';

export default createApp({
  features: [catalogPlugin, fairwindsInsightsCatalogModule, navModule],
});

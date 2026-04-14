import { createFrontendModule } from '@backstage/frontend-plugin-api';
import {
  entityActionItemsCard,
  entityActionItemsTopCard,
  entityMTDCostOverviewCard,
  entityResourcesHistoryCPUCard,
  entityResourcesHistoryMemoryCard,
  entityResourcesHistoryPodCountCard,
  entityVulnerabilitiesCard,
} from '@backstage-community/plugin-fairwinds-insights/alpha';

/**
 * Registers Fairwinds Insights entity cards on the catalog overview tab
 * (entity-content:catalog/overview → cards).
 */
export const fairwindsInsightsCatalogModule = createFrontendModule({
  pluginId: 'catalog',
  extensions: [
    entityVulnerabilitiesCard,
    entityActionItemsCard,
    entityActionItemsTopCard,
    entityMTDCostOverviewCard,
    entityResourcesHistoryPodCountCard,
    entityResourcesHistoryCPUCard,
    entityResourcesHistoryMemoryCard,
  ],
});

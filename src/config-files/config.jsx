import React from 'react';
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

import { Header } from '@crystaldelta/xen-paragon';

export const config = {
  pluginSlots: {
    header_component: {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_header',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <Header/>
            ),
          },
        },
      ]
    }
  },
}

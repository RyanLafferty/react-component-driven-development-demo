import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    panelPosition: 'right',
    theme: {
      brandTitle: `react-cdd-workshop: Step 4`
    }
  }
});

configure(require.context('../.stories', true, /\.stories\.jsx$/), module);

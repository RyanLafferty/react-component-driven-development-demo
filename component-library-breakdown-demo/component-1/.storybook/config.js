import { configure, addParameters } from '@storybook/react';
import appPackage from '../package.json';

addParameters({
  options: {
    panelPosition: 'right',
    theme: {
      brandTitle: `component-1 v${appPackage.version}`
    }
  }
});

configure(require.context('../.stories', true, /\.stories\.jsx$/), module);

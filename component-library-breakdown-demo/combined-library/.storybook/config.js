import { configure, addParameters } from '@storybook/react';
import appPackage from '../package.json';

addParameters({
  options: {
    panelPosition: 'right',
    theme: {
      brandTitle: `combined-library v${appPackage.version}`
    }
  }
});

configure(require.context('../.stories', true, /\.stories\.jsx$/), module);

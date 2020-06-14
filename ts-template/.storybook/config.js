import { configure, addParameters } from '@storybook/react';
import appPackage from '../package.json';

addParameters({
  options: {
    panelPosition: 'right',
    theme: {
      brandTitle: `react-component-library-typesscript-template v${appPackage.version}`
    }
  }
});

configure(require.context('../src', true, /\.stories\.(jsx|tsx)$/), module);

import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withPerformance } from 'storybook-addon-performance';
import { storiesOf } from '@storybook/react';
import SCSSExampleComponent from 'ComponentStylingMethods/SCSSExampleComponent';
import SCSSExampleComponentREADME from 'ComponentStylingMethods/SCSSExampleComponent/README.md';
import SCSSModuleExampleComponent from 'ComponentStylingMethods/SCSSModuleExampleComponent';
import SCSSModuleExampleComponentREADME from 'ComponentStylingMethods/SCSSModuleExampleComponent/README.md';

storiesOf('Component Styling Methods', module)
  .addDecorator(withInfo)
  .addDecorator(withPerformance)
  .add('SCSSExampleComponent', () => (
    <SCSSExampleComponent />
  ), { info: SCSSExampleComponentREADME })
  .add('SCSSModuleExampleComponent', () => (
    <SCSSModuleExampleComponent />
  ), { info: SCSSModuleExampleComponentREADME });

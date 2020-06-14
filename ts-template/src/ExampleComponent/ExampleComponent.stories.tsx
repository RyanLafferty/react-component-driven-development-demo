import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withPerformance } from 'storybook-addon-performance';
import { storiesOf } from '@storybook/react';
import ExampleComponent from './ExampleComponent';
import ExampleComponentREADME from './README.md';

storiesOf('Example Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(withPerformance)
  .add('ExampleComponent', () => (
    <ExampleComponent name="World" />
  ), { info: ExampleComponentREADME });

import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withPerformance } from 'storybook-addon-performance';
import { storiesOf } from '@storybook/react';
import Headshot from 'Headshot';
import HeadshotREADME from 'Headshot/README.md';
import headshot from './headshot-compressed.png';

storiesOf('Example Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(withPerformance)
  .add('Headshot', () => (
    <Headshot headshot={headshot} />
  ), { info: HeadshotREADME });

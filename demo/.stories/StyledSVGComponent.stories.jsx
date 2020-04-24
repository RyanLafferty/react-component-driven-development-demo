import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { withPerformance } from 'storybook-addon-performance';
import { storiesOf } from '@storybook/react';
import SVGComponent from 'SVGComponent';
import SVGComponentREADME from 'SVGComponent/README.md';

storiesOf('SVG Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(withPerformance)
  .add('SVGComponent', () => (
    <SVGComponent
      style={{
        width: `${number('Width (XXXpx)', '128')}px`,
        height: `${text('Height (XXXpx)', '128')}px`,
        fill: `#${text('Color (#XXXXXX)', '000000')}`,
      }}
    />
  ), { info: SVGComponentREADME });

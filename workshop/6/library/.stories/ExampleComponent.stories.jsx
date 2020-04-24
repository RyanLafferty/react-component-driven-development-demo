import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import ExampleComponent from 'ExampleComponent';
import ExampleComponentREADME from 'ExampleComponent/README.md';

storiesOf('Example Components', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('ExampleComponent', () => (
    <ExampleComponent
      name={text('Name', 'World')}
    />
  ), { info: ExampleComponentREADME });

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ExampleComponent from 'ExampleComponent';

storiesOf('Example Components', module)
  .addDecorator(withKnobs)
  .add('ExampleComponent', () => (
    <ExampleComponent
      name={text('Name', 'World')}
    />
  ));

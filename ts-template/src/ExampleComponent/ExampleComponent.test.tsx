import React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import ExampleComponent from './ExampleComponent';
import { ExampleComponentProps } from './ExampleComponent.types';

describe('ExampleComponent', () => {
  let props: ExampleComponentProps;
  const renderer = ShallowRenderer.createRenderer();

  beforeEach(() => {
    props = {
      name: 'World',
    };
  });

  describe('when required props are provided', () => {
    it('ExampleComponent renders', () => {
      expect(
        renderer.render(<ExampleComponent {...props} />),
      ).toMatchSnapshot();
    });
  });
});

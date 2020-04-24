import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ExampleComponent from 'ExampleComponent';

describe('ExampleComponent', () => {
  let props;
  const renderer = new ShallowRenderer();

  beforeEach(() => {
    props = {};
  });

  describe('when no props are provided', () => {
    it('ExampleComponent renders', () => {
      expect(
        renderer.render(<ExampleComponent {...props} />),
      ).toMatchSnapshot();
    });
  });
});

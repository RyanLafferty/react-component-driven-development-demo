import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Headshot from 'Headshot';

describe('Headshot', () => {
  let props;
  const renderer = new ShallowRenderer();

  beforeEach(() => {
    props = {};
  });

  describe('when no props are provided', () => {
    it('Headshot renders', () => {
      expect(
        renderer.render(<Headshot {...props} />),
      ).toMatchSnapshot();
    });
  });
});

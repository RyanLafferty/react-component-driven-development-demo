import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import ExampleComponent from 'ExampleComponent';

describe('ExampleComponent', () => {
  let props;
  const renderer = new ShallowRenderer();

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    };
  });

  describe('when no props are provided', () => {
    it('ExampleComponent renders', () => {
      expect(
        renderer.render(<ExampleComponent {...props} />),
      ).toMatchSnapshot();
    });
  });

  describe('when ExampleComponent is clicked', () => {
    it('calls onClick', () => {
      const component = TestRenderer.create(<ExampleComponent {...props} />);
      const button = component.root.findByProps({role: 'button'});

      button.props.onClick();
      expect(props.onClick).toHaveBeenCalled();
    });
  });

  describe('when ExampleComponent is pressed', () => {
    it('calls onClick', () => {
      const component = TestRenderer.create(<ExampleComponent {...props} />);
      const button = component.root.findByProps({role: 'button'});

      button.props.onKeyPress();
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});

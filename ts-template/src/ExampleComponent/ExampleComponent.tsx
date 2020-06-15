import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExampleComponent.module.scss';
import { ExampleComponentProps } from './ExampleComponent.types';

const ExampleComponent: React.FC<ExampleComponentProps> = ({ name }) => (
  <div className={styles.container}>
    Hello {name}!
  </div>
);

ExampleComponent.propTypes = {
  name: PropTypes.string,
};

ExampleComponent.defaultProps = {
  name: 'World',
};

export default ExampleComponent;

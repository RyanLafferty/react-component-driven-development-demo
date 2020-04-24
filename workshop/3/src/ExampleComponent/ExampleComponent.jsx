import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExampleComponent.module.scss';

const ExampleComponent = ({ name }) => (
  <div className={styles.message}>
    {`Hello ${name}!`}
  </div>
);

ExampleComponent.propTypes = {
  name: PropTypes.string,
};

ExampleComponent.defaultProps = {
  name: 'World',
};

export default ExampleComponent;

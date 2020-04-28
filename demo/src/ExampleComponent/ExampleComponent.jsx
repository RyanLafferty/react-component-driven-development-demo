import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExampleComponent.module.scss';

const ExampleComponent = ({ onClick }) => (
  <div
    className={styles.container}
    onClick={() => onClick()}
    onKeyPress={() => onClick()}
    aria-label="ExampleComponent"
    role="button"
    tabIndex="0"
  />
);

ExampleComponent.propTypes = {
  onClick: PropTypes.func,
};

ExampleComponent.defaultProps = {
  onClick: null,
};

export default ExampleComponent;

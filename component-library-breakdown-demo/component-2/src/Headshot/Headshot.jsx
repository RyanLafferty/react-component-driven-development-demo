import React from 'react';
import PropTypes from 'prop-types';
import styles from './Headshot.module.scss';

const Headshot = ({ headshot }) => (
  <img src={headshot} className={styles.container} />
);

Headshot.propTypes = {
  headshot: PropTypes.string,
};

export default Headshot;

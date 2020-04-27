import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const styles = {
  container: {
    backgroundColor: '#f036f0',
    borderRadius: '50%',
    height: '200px',
    width: '200px',
  },
};

const CSSInJSExampleComponent = ({ classes }) => (
  <div className={classes.container} />
);

CSSInJSExampleComponent.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default withStyles(styles)(CSSInJSExampleComponent);

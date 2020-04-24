import React from 'react';
import withStyles from 'react-jss'

const styles = {
  container: {
    backgroundColor: '#f036f0',
    borderRadius: '50%',
    height: '200px',
    width: '200px',
  },
}

const CSSInJSExampleComponent = ({ classes }) => (
  <div className={classes.container} />
);

export default withStyles(styles)(CSSInJSExampleComponent);

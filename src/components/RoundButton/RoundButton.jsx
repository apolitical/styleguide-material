// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: '#ED1E79',
    color: '#fff',
    minWidth: '250px',
    height: '48px',
    borderRadius: '24px',
    fontSize: '14px',
    fontFamily: ['Lato', 'sans-serif'],
    '&:hover': {
      backgroundColor: '#fff',
      color: '#ED1E79',
      borderColor: '#fff',
    },
  },
};

const RoundButton = ({ classes, ...props }) => (
  <Button className={classes.root} {...props} />
);

export default withStyles(styles)(RoundButton);

// @flow
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

type PropTypes = {
  classes: {
    root: Object,
    content: Object,
    typography: Object,
    button: Object,
  },
};

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(to right top, #19A9B7, #46b8a6)',
    color: '#fff',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: '30px',
    fontWeight: '300',
    maxWidth: '600px',
    minHeight: '380px',
  },
  content: {
    minWidth: '500px',
  },
  typography: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: '30px',
    fontWeight: '300',
  },
  button: {
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

const RestrictedProfileJoinCard = ({ classes }: PropTypes) => (
  <Card className={classes.root}>
    <CardContent className={classes.content}>
      <Typography className={classes.typography}>
        Join Apolitical to see full profiles and connect with
        {' '}
         policy makers in 140+ countries. It&apos;s free!
      </Typography>
      <Button className={classes.button}>Join for free</Button>
    </CardContent>
  </Card>
);

export default withStyles(styles)(RestrictedProfileJoinCard);

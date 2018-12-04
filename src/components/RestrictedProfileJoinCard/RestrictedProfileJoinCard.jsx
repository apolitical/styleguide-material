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
    largeTypography: Object,
    smallTypography: Object,
    loginLink: Object,
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
    gridArea: '1/1',
  },
  largeTypography: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: '30px',
    fontWeight: '300',
  },
  smallTypography: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: '12px',
    marginTop: '5px',
  },
  loginLink: {
    color: '#fff',
  },
  button: {
    marginTop: '40px',
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
    <CardContent>
      <Typography className={classes.largeTypography}>
        Join Apolitical to see full profiles and connect with
        {' '}
         policy makers in 140+ countries. It&apos;s free!
      </Typography>
      <Button className={classes.button} href="/signup?ref=restricted-profile">Sign up, it&apos;s free</Button>
      <Typography className={classes.smallTypography}>
          Already have an account?
        {' '}
        <a href="/login" className={classes.loginLink}>Log in</a>
        {' '}
now
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(RestrictedProfileJoinCard);

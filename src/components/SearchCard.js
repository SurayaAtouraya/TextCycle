import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    width: 750,
    height: 150,
  },
  flex: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    padding: 16
  }
}));

const SearchCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <div>
          <Typography className={classes.title} component="h5" variant="h5">
            Search for a Book
          </Typography>
          <div className={classes.flex}>
            <form className={classes.inner} style={{width: '600px'}} noValidate autoComplete="off" >
              <TextField style={{width: '100%'}} label="Book Name" variant="filled"/>
              <Button style={{height: '56px', borderRadius: 0, boxShadow: 'none'}} variant="contained" size="large" color="primary" className={classes.margin}
                      component={Link} to="/search">
                Search
              </Button>
            </form>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default SearchCard;
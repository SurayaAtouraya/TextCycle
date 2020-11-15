import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SearchCard from '../../components/SearchCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SellBookForm from './../SellBookForm';


const SellBookRoute = (props) => {

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={0} direction="column" justify="center" alignItems="center" style={{marginTop: '3rem'}}>
                    <Grid item xs={12}>
                        <SellBookForm createListing={props.createListing}></SellBookForm>
                    </Grid>
                </Grid>
                {/* <Button variant="contained" color="primary" component={Link} to="/">Back to Home page</Button> */}
            </Container>
        </div>
    );

}

export default SellBookRoute;


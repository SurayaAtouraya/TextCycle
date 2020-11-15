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
import BookListingCard from '../BookListingCard';


const SearchRoute = (props) => {
    return (
        <div>
            <Container maxWidth="lg">
                <h1>Search Page</h1> 
                <Grid container spacing={0} direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <SearchCard></SearchCard>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" component={Link} to="/">Back to Home page</Button>

                <Grid container spacing={3} style={{marginTop: 16}}>
                    <Grid item xs={3}>
                        <BookListingCard bookDialogIsOpen={props.bookDialogIsOpen} setBookDialogIsOpen={props.setBookDialogIsOpen} addToCart={props.addToCart}></BookListingCard>
                    </Grid>
                    <Grid item xs={3}>
                        <BookListingCard bookDialogIsOpen={props.bookDialogIsOpen} setBookDialogIsOpen={props.setBookDialogIsOpen} addToCart={props.addToCart}></BookListingCard>
                    </Grid>
                    <Grid item xs={3}>
                        <BookListingCard bookDialogIsOpen={props.bookDialogIsOpen} setBookDialogIsOpen={props.setBookDialogIsOpen} addToCart={props.addToCart}></BookListingCard>
                    </Grid>
                    <Grid item xs={3}>
                        <BookListingCard bookDialogIsOpen={props.bookDialogIsOpen} setBookDialogIsOpen={props.setBookDialogIsOpen} addToCart={props.addToCart}></BookListingCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}

export default SearchRoute;


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
import BookListingCardUser from '../BookListingCardUser';

const UserListingsRoute = (props) => {

    const bookListings = 
    props.bookListings.map( 
      (bookListing) => 
      <React.Fragment key={bookListing.id}>
        <Grid item xs={4}>
            <BookListingCardUser bookData={bookListing} deleteListing={props.deleteListing}>
            </BookListingCardUser>
        </Grid>
      </React.Fragment>
    );

    return (
        <div>
            <Container maxWidth="lg">
                <h1 style={{display: 'inline-block'}}>User Listings</h1> 
                <Button variant="contained" color="primary" component={Link} to="/" style={{marginBottom: '1rem', marginLeft: '2rem'}}>Back to Home page</Button>
                <Grid container spacing={3}>
                  {bookListings}
                </Grid>
            </Container>
        </div>
    );

}

export default UserListingsRoute;


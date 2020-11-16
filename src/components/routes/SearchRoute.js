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
import BookDialog from '../dialogs/BookDialog';

const SearchRoute = (props) => {

    const [bookDialogIsOpen, setBookDialogIsOpen] = React.useState(false);

    // const openBookDialog = () => {
    //     setBookDialogIsOpen(true);
    //   };
    
    //   const closeBookDialog = () => {
    //     setBookDialogIsOpen(false);
    //   };

    const bookListings = 
    props.sampleBooks.map( 
      (bookListing) => 
      <React.Fragment key={bookListing.id}>
        <Grid item xs={4}>
            <BookListingCard bookDialogIsOpen={props.bookDialogIsOpen} setBookDialogIsOpen={props.setBookDialogIsOpen} addToCart={props.addToCart}
                            bookData={bookListing}>
            </BookListingCard>
        </Grid>
      </React.Fragment>
    );

    return (
        <div>
            <Container maxWidth="lg">
                <h1 style={{display: 'inline-block'}}>Search Page</h1> 
                <Button variant="contained" color="primary" component={Link} to="/" style={{marginBottom: '1rem', marginLeft: '2rem'}}>Back to Home page</Button>
                <Grid container spacing={0} direction="column" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <SearchCard></SearchCard>
                    </Grid>
                </Grid>

                <Grid container spacing={4} style={{marginTop: 16}}>
                    {bookListings}
                </Grid>
            </Container>

            {/* <BookDialog bookDialogIsOpen={bookDialogIsOpen} closeBookDialog={closeBookDialog} bookData={props.bookData}></BookDialog> */}
        </div>
    );

}

export default SearchRoute;


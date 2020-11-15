import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css';
import BookListingCard from './components/BookListingCard';
import Container from '@material-ui/core/Container';
import AppNavBar from './components/AppNavBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';
import CheckoutDialog from './components/dialogs/CheckoutDialog';
import Messenger from './components/Messenger';
import SellBookForm from './components/SellBookForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import SearchCard from './components/SearchCard';
import SearchRoute from './components/routes/SearchRoute';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SellBookRoute from './components/routes/SellBookRoute';
import UserListingsRoute from './components/routes/UserListingsRoute';
import UserOrdersRoute from './components/routes/UserOrdersRoute';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const [sampleBooks, setSampleBooks] = useState([
    {name: 'Performance Modeling and Design of Computer Systems', course: 'COMPSCI 4E03', sellerLocation: 'Toronto, ON', price: 40, img:'textbook1.jpg', id: 1},
    {name: 'Calculus Early Trancendentals', course: 'MATH 1Z03', sellerLocation: 'Hamilton, ON', price: 20, img:'textbook2.jpg', id: 2},
    {name: 'Fundamentals of Fluid Mechanics', course: 'PHYSICS 1E03', sellerLocation: 'Buffalo, NY', price: 15, img:'textbook4.jpg', id: 3}
  ])

  const [shoppingCart, setShoppingCart] = useState([
  ]);

  const [bookListings, setBookListings] = useState([]);

  const createListing = (listingData) => {
    if (bookListings.length > 0) {
      listingData.id = bookListings[bookListings.length - 1].id + 1;
    } else {
      listingData.id = 0;
    }
    setBookListings([...bookListings, listingData]);
  }

  const addToCart = (book) => {
    if (shoppingCart.length > 0) {
      book.id = shoppingCart[shoppingCart.length - 1].id + 1;
    } else {
      book.id = 0;
    }
    
    setShoppingCart([...shoppingCart, book]);
    openIsSnackbarOpenAddtoCart();
  }

  const deleteCartItem = (itemChosen) => {
    let copy = [...shoppingCart];
    const toDelete = copy.find(item => item.id === itemChosen.id);
    copy.splice(copy.indexOf(toDelete), 1);
    setShoppingCart(copy);
  }


  const [isShoppingCartOpened, setIsShoppingCartOpened] = useState(false)

  const [checkoutDialogIsOpen, setCheckoutDialogIsOpen] = React.useState(false);

  const openCheckoutDialog = () => {
    setCheckoutDialogIsOpen(true);
  };

  const closeCheckoutDialog = () => {
    setCheckoutDialogIsOpen(false);
  };



  const toggleShoppingCart = (isOpened) => (event) => {
    setIsShoppingCartOpened(isOpened);
  };

  const [isSnackbarOpenAddtoCart, setIsSnackbarOpenAddtoCart] = useState(false);

  const openIsSnackbarOpenAddtoCart = () => {
    setIsSnackbarOpenAddtoCart(true);
  };

  const closeIsSnackbarOpenAddtoCart = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpenAddtoCart(false);
  };

  // const [isSnackbarOpenCreateListing, setIsSnackbarOpenCreateListing] = useState(false);

  // const openIsSnackbarOpenCreateListing = () => {
  //   setIsSnackbarOpenCreateListing(true);
  // };

  // const closeIsSnackbarOpenCreateListing = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setIsSnackbarOpenCreateListing(false);
  // };

  const classes = useStyles();

  return (
    <div>
      <Router>
      <AppNavBar toggleShoppingCart={toggleShoppingCart} openCheckoutDialog={openCheckoutDialog}/>
        <div>
          <Switch>
            {/* Home page, should contain search bar for books, if not logged in, only display sign in/up result. */}
            <Route exact path="/">
              <Container maxWidth="lg">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h1>search bar goes here</h1>
                    <SearchCard></SearchCard>
                    <Button variant="contained" color="primary" component={Link} to="/search">Simulate Search</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <h1>IF not logged in, show sign up/ login page instead</h1>
                  </Grid>
                  <Grid item xs={3}>
                    {/* <BookListingCard></BookListingCard> */}
                  </Grid>
                </Grid>
              </Container>
            </Route>
            {/* Result of user search here */}
            <Route path="/search">
              <SearchRoute addToCart={addToCart} sampleBooks={sampleBooks}></SearchRoute>
            </Route>

            <Route path="/Messenger">
              <Messenger></Messenger>
            </Route>

            <Route path="/userlistings">
              <UserListingsRoute></UserListingsRoute>
            </Route>

            <Route path="/createlisting">
              <SellBookRoute createListing={createListing}></SellBookRoute>
            </Route>

            <Route path="/orders">
              <UserOrdersRoute></UserOrdersRoute>
            </Route>

          </Switch>

          <CheckoutDialog shoppingCart={shoppingCart} checkoutDialogIsOpen={checkoutDialogIsOpen} closeCheckoutDialog={closeCheckoutDialog}
                          deleteCartItem={deleteCartItem}></CheckoutDialog>

          {/* Item added to Cart */}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={isSnackbarOpenAddtoCart}
            autoHideDuration={3000}
            onClose={closeIsSnackbarOpenAddtoCart}
            message="Added to Shopping Cart"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={openCheckoutDialog}>
                  VIEW
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={closeIsSnackbarOpenAddtoCart}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />

          {/* Book Listing Created */}
          {/* <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={isSnackbarOpenCreateListing}
            autoHideDuration={3000}
            onClose={closeIsSnackbarOpenCreateListing}
            message="Book Listing Created!"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={openCheckoutDialog}>
                  VIEW
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={closeIsSnackbarOpenCreateListing}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          /> */}

        </div>
      </Router>
    </div>
  );
}

export default App;

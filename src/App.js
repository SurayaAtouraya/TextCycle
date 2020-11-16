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
import SearchIcon from '@material-ui/icons/Search';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { MenuBook } from '@material-ui/icons';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

function App() {

  const [sampleBooks, setSampleBooks] = useState([
    {name: 'Performance Modeling and Design of Computer Systems', course: 'COMPSCI 4E03', ed: '7th Edition', price: 40, img:'textbook1.jpg',
     desc: 'Some pages with pen marking on them, minor wear on the front.', saleType: 'Shipping Only', id: 1},
    {name: 'Calculus Early Trancendentals', course: 'MATH 1Z03', ed: '3rd Edition', price: 20, img:'textbook2.jpg',
     desc: 'Like new, barely used comes with the solutions manual.', saleType: 'Shipping or Pickup', id: 2},
    {name: 'Fundamentals of Fluid Mechanics', course: 'PHYSICS 1E03', ed: '5th Edition', price: 15, img:'textbook4.jpg',
     desc: 'Some damage to the book spine, some pages ripped.', saleType: 'Shipping Only', id: 3}
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

  const deleteListing = (listingData) => {
    let copy = [...bookListings];
    console.log(bookListings)
    setBookListings(
      copy.splice(
        copy.indexOf(
          copy.find(listing => listing.id === listingData.id)
        )
        , 1)
    );
    window.location.reload();
  }

  React.useEffect(() => {
  }, [bookListings]);

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
                <Grid container spacing={6} style={{marginTop: '3rem'}}>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                  <h1>TextCycle Home Screen</h1>
                </Grid>
                  <Grid item xs={4} style={{textAlign: 'center'}}>
                  <Fab variant="extended" component={Link} to="/search">
                    <SearchIcon className={classes.extendedIcon}/>
                      Search for a Book
                  </Fab>
                  </Grid>
                  <Grid item xs={4} style={{textAlign: 'center'}}>
                    <Fab variant="extended" component={Link} to="/createlisting">
                      <MenuBookIcon className={classes.extendedIcon}/>
                        Create Book Listing
                    </Fab>
                  </Grid>
                  <Grid item xs={4} style={{textAlign: 'center'}}>
                    <Fab variant="extended" onClick={openCheckoutDialog}>
                      <MessageIcon className={classes.extendedIcon}/>
                        View Shopping Cart
                    </Fab>
                  </Grid>
                  <Grid item xs={4} style={{textAlign: 'center'}}>
                    <Fab variant="extended" component={Link} to="/Messenger">
                      <MessageIcon className={classes.extendedIcon}/>
                        View Messages
                    </Fab>
                  </Grid>
                  <Grid item xs={4} style={{textAlign: 'center'}}>
                    <Fab variant="extended" component={Link} to="/userlistings">
                      <LibraryBooksIcon className={classes.extendedIcon}/>
                        Manage My Book Listings
                    </Fab>
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
              <UserListingsRoute bookListings={bookListings} deleteListing={deleteListing}></UserListingsRoute>
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

        </div>
      </Router>
    </div>
  );
}

export default App;

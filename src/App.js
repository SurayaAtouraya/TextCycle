import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css';
import BookListingCard from './components/BookListingCard';
import Container from '@material-ui/core/Container';
import AppNavBar from './components/AppNavBar';
import ShoppingCartDrawer from './components/ShoppingCartDrawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';
import BookDialog from './components/dialogs/BookDialog';
import CheckoutDialog from './components/dialogs/CheckoutDialog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import SearchCard from './components/SearchCard';
import SearchRoute from './components/routes/SearchRoute';


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

  const [shoppingCart, setShoppingCart] = useState([
    {bookName: 'Performance Modeling and Design of Computer Systems', sellerLocation: 'Toronto, ON', price: 40, id: 1},
    {bookName: 'Calculus Early Trancendentals', sellerLocation: 'Hamilton, ON', price: 20, id: 2},
    {bookName: 'Book Name', sellerLocation: 'Toronto, ON', price: 12, id: 3},
    {bookName: 'Book Name', sellerLocation: 'Toronto, ON', price: 15, id: 4},
  ]);

  const addToCart = (book) => {
    setShoppingCart([...shoppingCart, book]);
    alert('y');
  }

  const deleteCartItem = () => {
  }


  const [isShoppingCartOpened, setIsShoppingCartOpened] = useState(false)

  const [bookDialogIsOpen, setBookDialogIsOpen] = React.useState(false);

  const [checkoutDialogIsOpen, setCheckoutDialogIsOpen] = React.useState(false);

  const openCheckoutDialog = () => {
    setCheckoutDialogIsOpen(true);
  };

  const closeCheckoutDialog = () => {
    setCheckoutDialogIsOpen(false);
  };

  const openBookDialog = () => {
    setBookDialogIsOpen(true);
  };

  const closeBookDialog = () => {
    setBookDialogIsOpen(false);
  };

  const toggleShoppingCart = (isOpened) => (event) => {
    setIsShoppingCartOpened(isOpened);
  };

  const classes = useStyles();

  return (
    <div>
      <AppNavBar toggleShoppingCart={toggleShoppingCart} openCheckoutDialog={openCheckoutDialog}/>
      <Router>
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
                    <BookListingCard></BookListingCard>
                  </Grid>
                </Grid>
              </Container>
            </Route>

            {/* Result of user search here */}
            <Route path="/search">
              <SearchRoute bookDialogIsOpen={bookDialogIsOpen} setBookDialogIsOpen={setBookDialogIsOpen}
                           addToCart={addToCart}></SearchRoute>
            </Route>

            <Route path="/users">
            </Route>

          </Switch>

          <ShoppingCartDrawer toggleShoppingCart={toggleShoppingCart} isShoppingCartOpened={isShoppingCartOpened}></ShoppingCartDrawer>

          {/* Deprecated, using nav bar item */}
          {/* <Fab onClick={toggleShoppingCart('bottom', true)} color="primary" style={{position: 'fixed', bottom: '16px', left: 'calc(50% - 28px)'}}>
            <ShoppingCartIcon />
          </Fab> */}

          <BookDialog bookDialogIsOpen={bookDialogIsOpen} closeBookDialog={closeBookDialog}></BookDialog>
          <CheckoutDialog shoppingCart={shoppingCart} checkoutDialogIsOpen={checkoutDialogIsOpen} closeCheckoutDialog={closeCheckoutDialog}></CheckoutDialog>
        </div>
      </Router>
    </div>
  );
}

export default App;

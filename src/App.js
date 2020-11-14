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
import Users from './components/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';


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

  const addToCart = () => {

  }

  const deleteCartItem = () => {
    alert('y');
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
                    <Button variant="contained" color="primary" component={Link} to="/search">Simulate Search</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <h1>IF not logged in, show sign up/ login page instead</h1>
                  </Grid>
                </Grid>
              </Container>
            </Route>
            {/* Result of user search here */}
            <Route path="/search">
            <h1>search page</h1>
            <h1>Should display search bar, sort functionality, filter function</h1>
            <Button variant="contained" color="primary" component={Link} to="/">Back to Home page</Button>
            </Route>

            <Route path="/Users">
              <Users></Users>
            </Route>

          </Switch>

          <ShoppingCartDrawer toggleShoppingCart={toggleShoppingCart} isShoppingCartOpened={isShoppingCartOpened}></ShoppingCartDrawer>
          <BookDialog bookDialogIsOpen={bookDialogIsOpen} closeBookDialog={closeBookDialog}></BookDialog>
          <CheckoutDialog shoppingCart={shoppingCart} checkoutDialogIsOpen={checkoutDialogIsOpen} closeCheckoutDialog={closeCheckoutDialog}></CheckoutDialog>
        </div>
      </Router>
    </div>
  );
}

export default App;

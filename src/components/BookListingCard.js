import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from '@material-ui/core/CardActionArea';
import textbook from '../img/textbook3.jpg';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ReportIcon from '@material-ui/icons/Report';


const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const BookListingCard = (props) => {

  const classes = useStyles();

  const openBookDialog = () => {
    props.setBookDialogIsOpen(true);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => openBookDialog()}>
        <CardHeader
          action={
            <div>
              <IconButton aria-label="bookmark">
                <BookmarkBorderIcon />
              </IconButton>
              <IconButton aria-label="report">
                <ReportIcon />
              </IconButton>
            </div>
          }
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={props.bookData.name}
          subheader="Hamilton, ON"
        />
        <CardMedia 
          style={{objectFit: 'fill'}}
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={textbook}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" color="primary" onClick={() => props.addToCart({name: 'bookName', sellerLocation: 'sellerLocation', price: 30, id: null})}>
            Add to Cart
        </Button>
        <Button variant="contained" color="primary">
            Order Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookListingCard;
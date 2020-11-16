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
import CardActionArea from '@material-ui/core/CardActionArea';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

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
      <CardActionArea>
        <CardHeader
          action={
            <div>
              <IconButton aria-label="delete" onClick={() => props.deleteListing(props.bookData)}>
                <ClearIcon />
              </IconButton>
            </div>
          }
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={props.bookData.name}
          subheader={props.bookData.ed}
        />
        <CardMedia 
          style={{objectFit: 'fill'}}
          component="img"
          height="400"
          image='textbook3.jpg'
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Book Description */}
          <Accordion style={{width: '100%'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Book Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {props.bookData.desc}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'left'}}>
          <Chip label={props.bookData.saleType} color="primary"/>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          <p style={{margin: 0}}>
              ${props.bookData.price}
          </p>
        </Grid>

      
      </Grid>

        

      </CardActions>
    </Card>
    
  );
}

export default BookListingCard;
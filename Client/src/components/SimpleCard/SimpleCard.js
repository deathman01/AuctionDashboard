import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../Avatar/Avatar';
import myclasses from './SImpleCard.module.css'
const styles = {
  card: {
    minWidth: 275,
    width: 300,
    height: 240,
    boxSizing: "border-box" 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} onClick={() => props.handleViewClick(props.id)} >
      <CardContent>
      <div className={myclasses.Outer}>
      <Typography variant="h4" component="h2">
      {props.name}
    </Typography>
    <div className={myclasses.Avatar}>
    
    {props.players.map(player => <ImageAvatars image={player} size="small"/>)}
    
    </div>
  <div className={myclasses.Inner}>
  <Typography component="p">
  Remaining Points: <strong>{props.Amount}</strong>
  </Typography>
  <Typography component="p">
  Players: <strong>{props.noOfPlayers}</strong>
  </Typography>
  </div>
      </div>
        
        
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
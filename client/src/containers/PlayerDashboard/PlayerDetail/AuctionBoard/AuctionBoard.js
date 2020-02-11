import React from 'react';
import classes from './AuctionBoard.module.css';
import ScoreBoard from '../../../../components/ScoreBoard/ScoreBoard';
import * as Colors from '../../../../configs/Colors';
import Fab from '@material-ui/core/Fab';
import {
  Card,
  Typography
} from '@material-ui/core';

const AuctionBoard = (props) => {
  let showbutton = null;
  if(props.showbutton === true){
    showbutton = <div className={classes.outerbutton}>
    <div className={classes.button}>
      <Fab
        color = "secondary"
        aria-label = "minus"
        className = {classes.fab}
        onClick = {() => props.decrement(100)}
      >
        -100
      </Fab>
    </div>
    <div className={classes.button}>
      <Fab
        color="secondary"
        aria-label="minus"
        className={classes.fab}
        onClick={() => props.decrement(50)}
      >
        -50
      </Fab>
    </div>
    <div className={classes.button}>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => props.increment(50)}
      >
        +50
      </Fab>
    </div>
    <div className={classes.button}>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => props.increment(100)}
      >
        +100
      </Fab>
    </div>
    <div className={classes.button}>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={() => props.increment(200)}
      >
        +200
      </Fab>
    </div>
  </div>
  }else{
   showbutton = <Typography
    style = {{padding: 5}}
    variant="h4"
    component="h2">
      Player of <strong>{props.team}</strong>
   </Typography>
  }

  return (
    <div style = {{marginTop: 50, padding: '2%', width: '100%'}}>
      <Card style = {{ width: '96%'}}>
        <Typography
          variant="h3"
          component="h2"
          style = {{padding: 5, color: Colors.WHITE, backgroundColor: Colors.PRIMARY}}
        >
          Auction Board
        </Typography>
        <br/>
        <ScoreBoard score={props.score}/>
        {showbutton}
      </Card>
    </div>
  )
}

export default AuctionBoard

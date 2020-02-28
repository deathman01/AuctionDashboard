import React from 'react'
import {
  Typography,
  Fab
} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import * as Colors from '../../configs/Colors';

export default function Welcome(props) {
  return (
    <div>
      <div style = {{marginTop: 100}}>
        <Typography style = {styles.title} variant="h3" component="h2">
         Selection System
        </Typography>
        <br/>
        <Typography variant="h3" component="h2">
          IIEST, Shibpur
        </Typography>
        <img
          src = {'assets/ipl_logo.png'}
          alt = 'event logo here'
          style = {{margin: 20, height: 200, width: 200}}
        />
        <div
          onClick={props.clicked}
          style={{marginTop: 20}}
        >
          <Fab
            variant="extended"
            color="primary"
            aria-label="Add"
          >
            <NavigationIcon/>
            Start Auction
          </Fab>
        </div>
      </div>
      <div style={{marginTop: 100}}>
        <Typography style= {{fontSize: 20}}>
          Auctioneer : <strong>Abhilash Jain</strong>
        </Typography>
        <Typography style= {{fontSize: 20}}>
          Leauge : <strong>IIEST Premier League</strong>
        </Typography>
        <Typography style= {{fontSize: 20}}>
          Chairman : <strong>Pankaj Chauhan, Mohanee</strong>
        </Typography>
        <Typography component="p">
          Developer: <strong>Mohit Negi, Abhishek Kumar</strong>
        </Typography>
      </div>
    </div>
  )
}

const styles = {
  title: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    padding: 10,
    color: 'black',
    backgroundColor: Colors.WHITE,
    border: '2px solid #6C6061',
    borderRadius: 5,
    boxShadow: "5px 3px 5px #9E9E9E",
  }
}

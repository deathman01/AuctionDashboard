import React from 'react'
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

export default function Welcome(props) {
  return (
    <div>
      <div style = {{marginTop: 200}}>
        <Typography variant="h3" component="h2">
          Players Selection System
        </Typography>
        <br/>
        <Typography variant="h3" component="h2">
          IIEST, Shibpur
        </Typography>
        <div
          onClick={props.clicked}
          style={{marginTop: 100}}
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
      <div style={{marginTop: 180}}>
        <Typography style= {{fontSize: 20}}>
          Auctioneer : <strong>TBD</strong>
        </Typography>
        <Typography style= {{fontSize: 20}}>
          Leauge : <strong>TBA</strong>
        </Typography>
        <Typography style= {{fontSize: 20}}>
          Chairman : <strong>TBD</strong>
        </Typography>
        <Typography component="p">
          Developer: <strong>Mohit Negi, Abhishek Kumar</strong>
        </Typography>
      </div>
    </div>
  )
}

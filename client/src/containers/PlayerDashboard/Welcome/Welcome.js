import React from 'react'
import Aux from '../../../hoc/Auxillary';
import Typography from '@material-ui/core/Typography';
import myclasses from './Welcome.module.css';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

export default function Welcome(props) {
  return (
    <Aux>
      <div className={myclasses.center}>
        <Typography variant="h3" component="h2">
          Online Auction System
        </Typography>
        <br/>
        <Typography variant="h3" component="h2">
          IIEST, Shibpur
        </Typography>
        <div onClick={props.clicked} className={myclasses.gap}>
          <Fab variant="extended" color="primary" aria-label="Add">
            <NavigationIcon/>
            Start Auction
          </Fab>
        </div>
      </div>
      <div className={myclasses.moregap}>
        <Typography component="p">
          Developer: <strong>Mohit Negi, Abhishek Kumar</strong>
        </Typography>
        <Typography component="p">
          Auctioneer : <strong>TBD</strong>
        </Typography>
        <Typography component="p">
          Leauge : <strong>TBA</strong>
        </Typography>
        <Typography component="p">
          Chairman : <strong>TBD</strong>
        </Typography>
      </div>
    </Aux>
  )
}

import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from '../Avatar/Avatar';
import * as Colors from '../../configs/Colors';

class SimpleCard extends Component {
  render(){
    const { id, name, captain, balance, noOfPlayers } = this.props;
    return (
      <Card
        style = {styles.card}
        onClick={() => this.props.handleViewClick(this.props.id)}
      >
        <div>
          <Typography
            style = {styles.title}
            variant="h5"
            component="h3"
          >
            {name.toUpperCase()}
          </Typography>
          {/*<div className={myclasses.Avatar}>
            {props.players.map(player => <ImageAvatars image={player} size="small"/>)}
          </div>*/}
          <div style = {{marginTop: 30}}>
            <Typography style = {{fontSize: 20,}} component="p">
              Team Captain: <strong>{captain.toUpperCase()}</strong>
            </Typography>
            <Typography style = {{fontSize: 20}} component="p">
              Remaining Balance: <strong>{balance}</strong>
            </Typography>
            <Typography style = {{fontSize: 20}} component="p">
              No of Players: <strong>{noOfPlayers}</strong>
            </Typography>
          </div>
        </div>
      </Card>
    );
  }
}

const styles = {
  card: {
    margin: 5,
    minWidth: 250,
    minHeight: 200,
    boxSizing: "border-box"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    padding: 5,
    textDecoration: 'underline',
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
  },
  pos: {
    marginBottom: 12,
  },
};

export default SimpleCard;

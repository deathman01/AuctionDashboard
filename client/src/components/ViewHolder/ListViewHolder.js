//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  CardActions,
  Button
} from '@material-ui/core';

class ListViewHolder extends Component{
  roleText = (role, battingHand, bowlingHand) => {
    if(role === 'batsman'){
      if(battingHand === 'r')
        return 'Right-Hand Batsman'

      if(battingHand === 'l')
        return 'Left-Hand Batsman'
    }

    if(role === 'bowler'){
      if(bowlingHand === 'r')
        return 'Right-Hand Bowler'

      if(bowlingHand === 'l')
        return 'Left-Hand Bowler'
    }

    if(role === 'all_rounder'){
      var temp = '';
      if(battingHand === 'r')
        temp = 'Right-Hand Batsman'

      if(battingHand === 'l')
        temp = 'Left-Hand Batsman'

      if(bowlingHand === 'r')
        return temp + ' & Right-Hand Bowler'

      if(bowlingHand === 'l')
        return temp + ' & Left-Hand Bowler'
    }
  }

  renderDetails = (item, viewType) => {
    console.log('item in render details', item);
    switch(viewType) {
      case 'teams' :
        return <div>
          <Typography
            style = {{fontSize: 16}}
          >
            Captain: { item.captain.name }
          </Typography>
          <Typography
            style = {{fontSize: 16}}
          >
            No. of Players: { item.noOfPlayers }
          </Typography>
          <Typography
            style = {{fontSize: 20}}
          >
            Wallet Balance: { item.balance }
          </Typography>
        </div>

      case 'players' :
        const role = this.roleText(item.role, item.battingHand, item.bowlingHand);
        return <div>
          <Typography
            style = {{fontSize: 18}}
          >
            Role: { role  }
          </Typography>
          <Typography
            style = {{fontSize: 16}}
          >
            Department: { item.dept }
          </Typography>
          <Typography
            style = {{fontSize: 16}}
          >
            Resident of { item.hostel }
          </Typography>
          <Typography
            style = {{fontSize: 18}}
          >
            Price: { item.price }
          </Typography>
        </div>

      case 'users' :
        return <div>
          <Typography
            style = {{fontSize: 20}}
          >
            Captain: { item.captain.name }
          </Typography>
          <Typography
            style = {{fontSize: 20}}
          >
            Wallet Balance: { item.balance }
          </Typography>
        </div>

      default:
        return  <div></div>
    }
  }

  renderList = (item, viewType) => {
    return (
      <Grid
        item lg = {12}
        key = { item.id }
      >
      <Card align = 'start' style = {{ margin: 5,}}>
        <CardContent style = { styles.actionAreaCard }>
          <div
            style = {styles.caption}
          >
            <Grid
              container
              spacing = {8}
              justify = 'space-evenly'
            >
              <Grid item xs = {4}>
                <CardMedia
                  component = "img"
                  alt = "Logo"
                  style = {{ height: '100%'}}
                  image = "https://images.pexels.com/photos/990824/pexels-photo-990824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              </Grid>
              <Grid item xs = {8}>
                <Typography
                  style = {{textDecoration: 'underline', fontSize: 30}}
                >
                  { item.name }
                </Typography>
                <Typography
                  style = {{fontSize: 14}}
                >
                  Id: { item.id }
                </Typography>
                <br/>
                {this.renderDetails(item, viewType)}
                <div align = 'end'>
                  <Button
                    size = 'small'
                    style = {styles.button}
                  >
                    Delete
                  </Button>
                  <Button
                    size = 'small'
                    style = {styles.button}
                  >
                    Edit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </Grid>
    )
  }
  render(){
    const viewType = this.props.control;
    return (
      <div
        style = {styles.container}
      >
        <Card style = {styles.photosCard}>
            <CardContent
              align = 'center'
              style = {{backgroundColor: Colors.FOREGROUND_2,}}
            >
              <Typography
                style = {{fontSize: 20}}
              >
                List Items:
              </Typography>
            </CardContent>
            <CardContent style = {{backgroundColor: Colors.WHITE}}>
              <Grid
                container
                direction = 'row'
                justify = 'space-evenly'
                alignItems = 'center'
              >
                {
                  viewType === 'users' && this.props.users.map(item =>
                    this.renderList(item, this.props.control)
                  )
                }
                {
                  viewType === 'teams' && this.props.teams.map(item =>
                    this.renderList(item, this.props.control)
                  )
                }
                {
                  viewType === 'players' && this.props.players.map(item =>
                    this.renderList(item, this.props.control)
                  )
                }
                </Grid>
            </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: 10,
  },
  photosCard: {
    marginTop: 10,
    width: '100%'
  },
  button: {
    margin: 5,
    color: 'white',
    background: 'purple',
  },
};

export default ListViewHolder;

//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import TeamForm from '../Forms/TeamForm';
import PlayerForm from '../Forms/PlayerForm';

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

class ActionViewHolder extends Component{
  render(){
    const control = this.props.control;
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
                Actions:
              </Typography>
            </CardContent>
            <CardContent style = {{backgroundColor: Colors.WHITE}}>
              {
                control === 'teams' &&
                <TeamForm
                  handleAddTeam = {this.props.handleAddTeam}
                />
              }
              {
                control === 'players' &&
                <PlayerForm
                  handleAddPlayer = {this.props.handleAddPlayer}
                />
              }
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
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
};

export default ActionViewHolder;

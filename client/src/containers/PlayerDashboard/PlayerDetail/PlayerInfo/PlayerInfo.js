import React from 'react';
import ImageAvatars from '../../../../components/Avatar/Avatar';
import * as Colors from '../../../../configs/Colors';
import {
  Typography,
  Card,
  Grid
} from '@material-ui/core';
import LetterAvatars from '../../../../components/Positionbadges/Positionbadges';

const PlayerInfo = (props) => {
  const {role, battingHand, bowlingHand } = props.player;
  let playStyle = '';
  let department = props.player.dept
  if(props.player.dept === "Electronics and Telecommunication Engineering"){
    department = "Electronics and Telecommunication"
  }
  if(props.player.deptt === "Architecture, Town and Regional Planning"){
    department = "Architecture"
  }

  if(role === 'batsman'){
    if(battingHand === 'r')
      playStyle = 'Right-Hand Batsman'

    if(battingHand === 'l')
      playStyle = 'Left-Hand Batsman'
  }

  if(role === 'bowler'){
    if(bowlingHand === 'r')
      playStyle = 'Right-Hand Bowler'

    if(bowlingHand === 'l')
      playStyle = 'Left-Hand Bowler'
  }

  if(role === 'all_rounder'){
    var temp = '';
    if(battingHand === 'r')
      temp = 'Right-Hand Batsman'

    if(battingHand === 'l')
      temp = 'Left-Hand Batsman'

    if(bowlingHand === 'r')
      playStyle = temp + ' & Right-Hand Bowler'

    if(bowlingHand === 'l')
      playStyle = temp + ' & Left-Hand Bowler'
  }

  return (
    <div style = {{padding: '2%', width: '100%'}}>
        <Card style = {{ width: '96%'}}>
          <Typography
            variant="h3"
            component="h2"
            style = {{padding: 5, color: Colors.WHITE, backgroundColor: Colors.PRIMARY}}
          >
            {props.player.name}
          </Typography>
          <Grid
            container
            spacing = {0}
            justify = 'space-evenly'
          >
            <Grid item xs = {4}>
              <ImageAvatars
                image = {props.player.Number}
                size = "big"
                team = {props.player.Team}
              />
            </Grid>
            <Grid align = 'left' item xs = {8}>
              <br/>
              <Typography variant="h5">
                <strong>{playStyle}</strong>
              </Typography>
              <Typography variant="h5">
                Availability: <strong>{props.player.availability}</strong>
              </Typography>
              <Typography variant="h5">
                Dept.: <strong>{department}</strong>
              </Typography>
              <Typography variant="h5">
                Resident of <strong>{props.player.hostel}</strong>
              </Typography>
              <LetterAvatars position = {props.player.role}/>
            </Grid>
          </Grid>
        </Card>
    </div>
  )
}

export default PlayerInfo;

import React, { Component } from 'react';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import classes from './TeamDashboard.module.css';
import PlayersListModal from '../../components/Modal/PlayersListModal';
import axios from 'axios';

export default class PlayerDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      teamDetails: {
        players: []
      },
      modalOpen: false,
      teams: []
    }
  }

  componentWillMount(){
    this.setState({
      teams: this.props.teams
    })
  }

  modalClose = () => {
    this.setState({
      modalOpen: false,
      teamDetails: []
    })
  }

  handleViewClick = (id) => {
    axios.get(`http://localhost:5000/api/teams/${id}`)
    .then(res => {
      console.log('fetch team details', res.data);
      this.setState({
        teamDetails: res.data,
        modalOpen: true,
      })
    })
    // this.setState({
    //   modalOpen:true
    // })
  }
  render() {
    return (
      <div>
        <div className={classes.fullscreen}>
          <div className={classes.Card}>
            {this.props.teams.map((team, index) => {
              return (
                <SimpleCard
                  key = {index}
                  name = {team.name}
                  captain = {team.captain.name}
                  balance = {team.balance}
                  noOfPlayers = {team.players.length}
                  id = {team.id}
                  handleViewClick = {this.handleViewClick}
                  modalOpen = {this.modalOpen}
                />
              )
            })}
          </div>
          <PlayersListModal
            open = {this.state.modalOpen}
            handleClose = {this.modalClose}
            teamDetails = {this.state.teamDetails}
          />
        </div>
      </div>
    )
  }
}

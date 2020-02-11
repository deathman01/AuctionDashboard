//abhishek360
import React, { Component } from 'react';
import {
  Grid,
  Button,
  Typography
} from '@material-ui/core';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import ActionViewHolder from '../components/ViewHolder/ActionViewHolder';
import ListViewHolder from '../components/ViewHolder/ListViewHolder';
import Popup from '../components/Popup';
import RequestService from '../services/RequestService';
import AuthHOC from '../HOC/AuthHOC';
import * as Colors from '../configs/Colors'

class Admin extends Component{
  state = {
    loggedIn: true,
    userDetails: {},
    token: '',
    control: 'players',
    users: [],
    players: [],
    teams: [],
  }

  constructor(){
    super();
    this.adminRequests = new RequestService('users','ADMIN');
    this.playersRequests = new RequestService('players','ADMIN');
    this.teamsRequests = new RequestService('teams','ADMIN');
  }

  componentDidMount(){
    this.playersRequests.get().then(res => {
      console.log('data in get players', res);
      this.setState({
        players: res.players
      })
    })

    this.teamsRequests.get().then(res => {
      console.log('data in get teams', res);
      this.setState({
        teams: res.teams
      })
    })
  }

  changeControl = (control) =>{
    this.setState({
      control,
    })
  }

  handleAddTeam = async (team) => {
    const token = this.state.token;
    this.teamsRequests.post(team, 'add', token ).then(res => {
      console.log('res add team', res);
    })
  }

  handleAddPlayer = async (player) => {
    const token = this.state.token;
    this.playersRequests.post(player, 'add', token ).then(res => {
      console.log('res add player', res);
    })
  }

  handleLogin = async ( username, password ) => {
    const data = await this.adminRequests.auth( username, password );
    console.log('loginnnnnnnnnnnnnnn', data);
    if(data.success){
      //alert('User Logged In!');
      this.setState({
        userDetails: {
          id: data.id,
          name: data.name,
          role: data.role,
          phone: data.phone,
          email: data.email,
        },
        token: data.token,
        loggedIn: true
      });
    }
    else{
      alert('Try Again, Failed to Login!');
    }
  }

  handleLogout = () => {
    this.setState({
      loggedIn: false,
      userDetails: {},
      token: '',
    });
  }

  render(){
    return (
      <div
        align = 'center'
        style = {styles.container}
      >
        {
          (!this.state.loggedIn) &&
            <Popup
              handleLogin = { this.handleLogin }
            />
        }
        <Header
          loggedIn = {this.state.loggedIn}
          userDetails = {this.state.userDetails}
          handleLogout = { this.handleLogout }
          togglePopup = { this.togglePopup }
        />
        <LeftPanel
          control = {this.state.control}
          changeControl = {this.changeControl}
          loggedIn = {this.state.loggedIn}
        />
        <AuthHOC
          loggedIn = {this.state.loggedIn}
          yes = {() =>
            <div style = {{marginLeft: '11%', marginRight: 10}}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={7}>
                  <ActionViewHolder
                    control = {this.state.control}
                    handleAddTeam = {this.handleAddTeam}
                    handleAddPlayer = {this.handleAddPlayer}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <ListViewHolder
                    control = {this.state.control}
                    users = {this.state.users}
                    players = {this.state.players}
                    teams = {this.state.teams}
                  />
                </Grid>
              </Grid>
            </div>
          }
          no = {() =>
            <div align = 'center' >
              <h2>Admin panel</h2>
            </div>
          }
        />
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 50,
    width: '100vw'
  },
};

export default Admin;

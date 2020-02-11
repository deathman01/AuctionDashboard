import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';
import PlayerDashboard from './PlayerDashboard/PlayerDashboard';
import TeamDashboard from './TeamDashboard/TeamDashboard';
import * as Colors from '../configs/Colors';
import './Home.css';
import RequestService from '../services/RequestService';
import axios from 'axios'

class Home extends Component {
  state = {
    displayWelcomePage: true,
    displayPlayerDetail: false,
    teams: [],
    player: null,
    auctionScore: 0,
    selectTeam: false,
    playerTeam: "",
    loading: false
  }

  constructor(props){
    super(props);
    this.adminRequests = new RequestService('users','ADMIN');
    this.playersRequests = new RequestService('players','ADMIN');
    this.teamsRequests = new RequestService('teams','ADMIN');
  }

  componentDidMount(){
    this.teamsRequests.get().then(res => {
      console.log('data in get teams', res);
      if(res.success){
        this.setState({
          teams: res.teams
        })
      }  
    })
  }

  startAuction = () => {
    this.setState({displayWelcomePage: false})
  }

  OpenRulePage = () => {
    this.setState({displayWelcomePage: true})
  }

  handleNextPlayerFormSubmit = (id) => {
    this.playersRequests.get(`/${id}`).then(res => {
      console.log('data in get player details', res);
      if(res.success){
        this.setState({
          player: res,
          displayPlayerDetail: true,
        })
      }
    })
  }

  auctionIncrement = (amt) => {
    let IncreasedPoints = this.state.auctionScore + amt;
    this.setState({
      auctionScore: IncreasedPoints
    })
  }

  auctionDecrement = (amt) => {
    let decreasedPoints = this.state.auctionScore - amt;
    this.setState({
      auctionScore: decreasedPoints
    })
  }

  auctionReset = () => {
    this.setState({
      auctionScore: 0
    })
  }

  modalOpen = ()=>{
    this.setState({
      selectTeam: true
    })
  }

  modalClose = () => {
    this.setState({
      selectTeam: false
    })
  }

  handleTeamSelect = event => {
    this.setState({ playerTeam : event.target.value });
  };

  backToForm = () => {
    this.setState({
      displayWelcomePage: false,
      displayPlayerDetail: false,
      player: null,
      auctionScore: 0,
      selectTeam: false,
      playerTeam: "",
    })
  }

  handleSold = (player, teamId , price) => {
    console.log('handle sold', player,);
    this.setState({
      loading: true
    })

    axios.put(`http://localhost:5000/api/players/assignTeam`, {teamId, playerId: player.id, price})
    .then(res => {
      this.setState({
        teams: res.data,
        displayWelcomePage: false,
        displayPlayerDetail: false,
        player: null,
        auctionScore: 0,
        selectTeam: false,
        playerTeam: "",
        loading: false
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Home">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div
              style = {styles.holder}
            >
              <PlayerDashboard
                teams = {this.state.teams}
                player = {this.state.player}
                playerTeam = {this.state.playerTeam}
                auctionScore = {this.state.auctionScore}
                selectTeam = {this.state.selectTeam}
                loading = {this.state.loading}
                auctionIncrement = {this.auctionIncrement}
                auctionDecrement = {this.auctionDecrement}
                modalOpen = {this.modalOpen}
                modalClose= {this.modalClose}
                displayWelcomePage = {this.state.displayWelcomePage}
                displayPlayerDetail = {this.state.displayPlayerDetail}
                startAuction = {this.startAuction}
                handleTeamSelect = {this.handleTeamSelect}
                handleSold = {this.handleSold}
                OpenRulePage = {this.OpenRulePage}
                handleNextPlayerFormSubmit = {this.handleNextPlayerFormSubmit}
                backToForm = {this.backToForm}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              style = {styles.holder}
            >
              <TeamDashboard
                teams = {this.state.teams}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 100,
    backgroundImage: "url(https://droitthemes.com/wp/saasland-theme/wp-content/plugins/saasland-core/widgets/images/banner.png)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    zIndex: -1,
    minHeight: '77vh'
  },
  holder: {
    height: '90vh',
    border: '4px solid #6C6061',
    borderRadius: 5,
    boxShadow: "5px 3px 5px #9E9E9E",
    margin: 10,
    backgroundColor: Colors.BACKGROUND,
  }
};

export default Home;

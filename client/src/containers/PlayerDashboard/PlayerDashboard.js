import React, { Component } from 'react';
import Welcome from './Welcome';
import PlayerDetail from './PlayerDetail/PlayerDetail';
import NextPlayerForm from './NextPlayerForm/NextPlayerForm';

export default class PlayerDashboard extends Component {
  render() {
    let display;
    if(this.props.displayWelcomePage){
      display = <Welcome clicked={this.props.startAuction}/>
    }
    else{
      if(this.props.displayPlayerDetail){
          display = <PlayerDetail
          player = {this.props.player}
          playerTeam = {this.props.playerTeam}
          auctionScore = {this.props.auctionScore}
          openmodal = {this.props.selectTeam}
          score = {this.props.auctionScore}
          teams = {this.props.teams}
          loading = {this.props.loading}
          increment={this.props.auctionIncrement}
          modalOpen={this.props.modalOpen}
          decrement = {this.props.auctionDecrement}
          reset = {this.auctionReset}
          modalClose = {this.props.modalClose}
          handleTeamSelect = {this.props.handleTeamSelect}
          handleSold = {this.props.handleSold}
          backToForm = {this.props.backToForm}
        />
      }
      else{
        display = <NextPlayerForm
          clicked = {this.props.OpenRulePage}
          handleSubmit = {this.props.handleNextPlayerFormSubmit}
        />
      }
    }
    return (
      <div>
        <div style = {styles.container}>
          {display}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    minHeight: '77vh'
  },
};

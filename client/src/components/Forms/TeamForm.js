//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TeamForm extends Component {
  state= {
    id: '',
    team_name: '',
    captain_id: '',
    desc: '',
    balance: '',
  }

  verifyForm = () => {
    const { team_name, captain_id, desc, balance } = this.state;
    if(team_name===''){
      alert('Team Name is Required!');
      return;
    }
    else if(captain_id===''){
      alert('Valid Captain Id is Required!');
      return;
    }
    else{
      this.props.handleAddTeam({
        name: team_name,
        desc: desc,
        captainId: captain_id,
        balance,
      });
    }
  }

  clearFields = () => {
    this.setState({
      id: '',
      team_name: '',
      captain_id: '',
      desc: '',
      balance: '',
    })
  }

  render() {
    return (
      <div
      >
        <h1 align = "center"> Add New Team </h1>
        <div
          align = 'start'
          style = { styles.container }
        >
          <TextField
            required
            variant = "outlined"
            label = "Team Name:"
            placeholder = "Aztecs"
            style = { styles.textField }
            value = {this.state.team_name}
            onChange = {(event) => this.setState({team_name: event.target.value})}
          />
          <br/>
          <TextField
            required
            variant = "outlined"
            label = "Captain Id:"
            placeholder = "01"
            style = { styles.textField }
            value = {this.state.captain_id}
            onChange = {(event) => this.setState({captain_id: event.target.value})}
          />
          <br/>
          <TextField
            variant = "outlined"
            label = "Description"
            placeholder = "About team"
            style = { styles.textField }
            value = {this.state.desc}
            onChange = {(event) => this.setState({desc: event.target.value})}
          />
          <br/>
          <TextField
            variant = "outlined"
            label = "Initial Balance"
            placeholder = "10000"
            style = { styles.textField }
            value = {this.state.balance}
            onChange = {(event) => this.setState({balance: event.target.value})}
          />
          <div
            align = 'center'
          >
            <Button
              color = 'default'
              style={styles.button}
              onClick={(event) => this.verifyForm()}
            >
              Save
            </Button>
            <Button
              color = 'default'
              style={styles.button}
              onClick={(event) => this.clearFields()}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 15,
    width: '100%',
  },
  textField: {
    marginTop: 10,
  },
  button: {
    margin: 10,
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
  footerButton: {
    margin: 10,
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
};

export default TeamForm;

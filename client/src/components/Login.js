//abhishek360
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Colors from '../configs/Colors';
class Login extends Component{

  state = {
    username: '',
    password: '',
  }

  handleClick = (event) => {
    alert('button clicked');
  }

  handleTextChange = (event) => {
    const newValue = event.target.value;
    const id = event.target.id;

    switch (id) {
      case 'usernameTextFieldLogin':
        this.setState({
          username: newValue,
        })
        break;
      case 'passwordTextFieldLogin':
        this.setState({
          password: newValue,
        })
        break;
      default:

    }
  }

  render(){
    const { username, password } = this.state;
    return (
      <div
      >
        <div
          style = { styles.head }
        >
        <h1 align = "center"> Log In </h1>
        <h4 align = "center"> Enter Admin Credentials. </h4>
        </div>
        <div
          align = 'center'
          style={styles.container}
        >
        <TextField
          id="usernameTextFieldLogin"
          style = { styles.textField }
          placeholder="Username"
          onChange = {(event) => this.handleTextChange(event)}
        />
        <TextField
          type="password"
          style = { styles.textField }
          id="passwordTextFieldLogin"
          placeholder="Password"
          onChange = {(event) => this.handleTextChange(event)}
        />
        <div
          align = 'center'
        >
        <Button
          style={styles.button}
          onClick={(event) => this.props.handleLogin(username, password)}
        >
          Login
        </Button>
        </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    margin: 10,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  head: {
    top: '10%',
  },
  textField: {
    width: '75%',
    margin: 10,
  },
  button: {
    margin: 10,
    width: '75%',
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
};



export default Login;

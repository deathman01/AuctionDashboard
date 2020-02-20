//abhishek360

import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AuthHOC from '../HOC/AuthHOC';
import { Link } from '@reach/router';
import * as Colors from '../configs/Colors'
// import logo from '../assets/ourforum_logo_240.png';

class Header extends Component{
  render(){
    return(
      <div style = { styles.container } >
        <AppBar
          style = { styles.appBarContainer }
        >
          <Toolbar>
          {/*<div align = 'center' style={styles.logoImg}>
            <img src = {logo} height = {30} width= {150} alt="IPL"/>

          </div>*/}
          <div style = {{ padding: 5, flex: 3}}>
            <Typography
              style = {{display: 'inline-block', fontSize: 25, color: Colors.WHITE}}
              variant = 'caption'
            >
              Online Selection System
            </Typography>
          </div>
          <div style = {{ padding: 5, flex: 2}}>
            <Typography
              style = {{display: 'inline-block', fontSize: 25, color: Colors.WHITE}}
              variant = 'caption'
            >
              IIEST, Shibpur
            </Typography>
          </div>
          <AuthHOC
            loggedIn = {this.props.loggedIn}
            yes = {() =>
              <div style = {{ flex: 3 }}>
                {
                  this.props.userDetails.name &&
                    <Typography
                      style = {{display: 'inline-block', fontSize: 18, color: Colors.WHITE}}
                    >
                      Hello, { this.props.userDetails.name.toUpperCase() }
                    </Typography>
                }
                <Button
                  id = 'headerLogoutButton'
                  style = {styles.button}
                  onClick = {(event) => this.props.handleLogout()}
                >
                  Logout
                </Button>
              </div>
            }
            no = {() =>
              <div align = 'center' style = {{ flex: 3 }}>
                <Button
                  id = 'headerLoginButton'
                  style={styles.button}
                  onClick={(event) => this.props.togglePopup('login')}
                >
                  Login
                </Button>
              </div>
            }
          />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    zIndex: 2,
    width: '100%',
  },
  linkText: {
    fontSize: 15,
    textDecoration: 'underline',
    color: Colors.SPECIAL_FONT
  },
  logoImg: {
    flex: 3,
    borderRadius: 5,
  },
  appBarContainer: {
    width: '100%',
    color: '#A4A7B2',
    display: 'flex',
    backgroundColor: Colors.SECONDARY
  },
  textField: {
    width: '20',
    margin: 10,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    width: '20',
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
};


export default Header;

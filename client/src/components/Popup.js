import React from 'react';
import Login from './Login';
import './popup.css';

class Popup extends React.Component {
  render() {
    return (
      <div className = 'popup'>
        <div className = 'popup_inner'>
          <Login
            closePopup = {this.props.closePopup}
            handleLogin = { this.props.handleLogin }
            changePopupType = { this.props.changePopupType }
          />
        </div>
      </div>
    );
  }
}


export default Popup;

//abhishek360

import React, { Component } from 'react';

class AuthHOC extends Component {
    render () {
      return this.props.loggedIn ? this.props.yes() : this.props.no()
    }
  }



AuthHOC.defaultProps = {
  loading: () => null,
  yes: () => null,
  no: () => null
};

export default AuthHOC;

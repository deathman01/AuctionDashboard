//abhishek360

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    justifyContent: 'center',
    marginTop: "250px",
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class NextPlayerForm extends React.Component {
  state = {
    playerNo: 1,
  }

  handleChange = (event) => {
    this.setState({
      playerNo: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className = {classes.container}>
        <div>
          <TextField
            id = "outlined-name"
            label = "Player Number"
            placeholder = '10'
            className = {classes.textField}
            onChange = {this.handleChange}
            margin = "normal"
            variant = "outlined"
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.clicked}
          className={classes.button}
        >
          Rules
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick = {() => this.props.handleSubmit(this.state.playerNo)}
          className={classes.button}
        >
          Start <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </div>
    );
  }
}

NextPlayerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NextPlayerForm);

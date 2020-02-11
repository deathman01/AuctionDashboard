import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Modal,
  Typography,
} from '@material-ui/core';
import Table from '../Table/Table';

function getModalStyle() {
  const top = 10
  const left = 10

  return {
    justifyContent: 'center',
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    marginLeft: '10%',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  render() {
    const { classes, teamDetails } = this.props;
    console.log('props in SimpleModal', this.props);
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open = {this.props.open}
          onClose = {this.props.handleClose}
        >
          <div
            style={getModalStyle()}
            className={classes.paper}
          >
            <Typography
              style = {{display: 'inline-block', fontSize: 25, color: 'black'}}
              variant = 'caption'
            >
              Players bought by <strong>{teamDetails.name}</strong>
            </Typography>
            <Table
              players = {teamDetails.players}
            />
            <Typography
              align = 'right'
              style = {{fontSize: 25, color: 'black'}}
              variant = 'caption'
            >
              Remaining Balance <strong>{teamDetails.balance}</strong>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;

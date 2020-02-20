import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
import * as Colors from '../../configs/Colors';


const styles = theme => ({
  root: {
    display: 'flex',
    columns: '2 auto'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  group: {
    margin: `${theme.spacing.unit}px`,
  },
  holder: {
    borderRadius: 5,
    margin: 5,
    boxShadow: "5px 3px 5px #9E9E9E",
    backgroundColor: Colors.BACKGROUND,
  }
});

class TeamsRadio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className = {classes.root}>
        <FormControl component = "fieldset" className = {classes.formControl}>
          <RadioGroup
            aria-label = "Team"
            name = "team"
            className = {classes.group}
            value = {this.props.selectedValue}
            onChange = {this.props.handleChange}
          >
            {
              this.props.teams.map(team => (
                <FormControlLabel
                  className = {classes.holder}
                  value = {`${team.id}`}
                  control = {<Radio/>}
                  label = {team.name}
                  key = {team.id}
                />
              ))
            }
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(TeamsRadio);

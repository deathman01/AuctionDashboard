import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class TeamsRadio extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
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

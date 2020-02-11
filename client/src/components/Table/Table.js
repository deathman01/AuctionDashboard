import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    align: 'center',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    height: "10px"
  },
});

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

function CustomizedTable(props) {
  console.log('props in table', props);
  const { classes, players } = props;
  // let rows = props.players;

    // props.players.forEach((player) => {
    //   if(player.price === 0){
    //     player.price = "NA"
    //   }
    //     rows.push(createData(player.Name, player.Department, player.Position, player.Hostel, player.price))
    // })
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Player Name</CustomTableCell>
            <CustomTableCell align="right">Department</CustomTableCell>
            <CustomTableCell align="right">Role</CustomTableCell>
            <CustomTableCell align="right">Hostel</CustomTableCell>
            <CustomTableCell align="right">Price</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.dept}</CustomTableCell>
              <CustomTableCell align="right">{row.role}</CustomTableCell>
              <CustomTableCell align="right">{row.hostel}</CustomTableCell>
              <CustomTableCell align="right">{row.price}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);

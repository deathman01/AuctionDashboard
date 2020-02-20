import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    backgroundColor: 'white',
    border: '2px solid blue' ,
    borderRadius: 100,
  },
  bigAvatarSold: {
    margin: 10,
    width: 150,
    height: 150,
    position: "absolute",
    top: "220px",
    left: "150px",
    opacity: "0.6"
  },
  smallAvatar: {
    margin: 2,
    width: 38,
    height: 38,
  },
};

const ImageAvatars = (props) => {
  const { classes } = props;
  let src = props.image;
  let size = props.size;
  let team = props.team;

  if(props.type === 'captain'){
    return (
      <Avatar
        alt = "o" src = {src}
        className = {classes.bigAvatar}
      />
    );
  }

  if(size === "big"){
    if(team === null){
      return (
        <Avatar
          alt = "o" src = {props.image}
          className = {classes.bigAvatar}
        />
      );
    }else{
      return (
        <div>
          <Avatar alt="o" src = {props.image} className={classes.bigAvatar} />
          <Avatar alt="o" src='assets/ipl_sold.png' className={classes.bigAvatarSold} />
        </div>

      );
    }
  }

  if(size === "small"){
    return (
      <Avatar alt="o" src={src} className={classes.smallAvatar} />
    );
  }

}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);

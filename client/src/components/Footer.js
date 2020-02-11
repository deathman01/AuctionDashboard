//abhishek360

import React from 'react';
import {
  Typography,
  IconButton,
  Grid,
} from '@material-ui/core';
import {
  socialLinks,
} from '../configs/content'
import {Link } from '@reach/router';
import * as Colors from '../configs/colors';

class Footer extends React.Component {
  render() {
    return (
      <div style = { styles.container }>
        <Grid
        container
        spacing={0}
        >
          <Grid
            item
            xs={12}
            sm={4}
            >
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <Typography
              style = {styles.linkText}
            >
              <Link
                style = {styles.linkText}
                to="privacypolicy"
              >
                Privacy Policy
              </Link>
            </Typography>
            <Typography
              style = {styles.linkText}
            >
            <Link
              style = {styles.linkText}
              to="termsconditions"
            >
              Terms & Conditions
            </Link>
            </Typography>
            <Typography
              style = {styles.linkText}
            >
              Contact us
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
          >
            <div>
              <IconButton
                size = 'small'
                onClick={()=> window.open(socialLinks.fb, "_blank")}
              >
                <img alt='fb' src="https://img.icons8.com/color/48/000000/facebook-circled.png"/>
              </IconButton>
              <IconButton
                size = 'small'
                onClick={()=> window.open(socialLinks.insta, "_blank")}
              >
                <img alt='insta' src="https://img.icons8.com/color/48/000000/instagram.png"/>
              </IconButton>
            </div>
            <Typography
              style = {styles.textField}
              align = 'right'
            >
              Developed & Maintained By: Abhishek360
            </Typography>
          </Grid>
        </Grid>

      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    zIndex: 1,
    backgroundColor: Colors.MAASTRICHT_BLUE,
  },
  linkText: {
    fontSize: 15,
    marginRight: 10,
    color: Colors.WHITE,
  },
  textField: {
    fontSize: 16,
    marginRight: 10,
    color: 'yellow'
  },
};

export default Footer;

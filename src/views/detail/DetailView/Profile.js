import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    
  root: {},
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    
  }

});

class Profile extends React.Component{

  constructor() {
    super();
  
  }


  render(){

    const { movie , classes } = this.props;

    return(
      <Card
      className={classes.root}

      >
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={movie.Poster}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {movie.Title}
          </Typography>
         
          <Typography
            color="textSecondary"
            variant="body1"
          >
           {movie.Year}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload a new picture
        </Button>
      </CardActions>
    </Card>
    );
  }
}

export default withStyles(styles)(Profile);

import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';


import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    
  root: {}

});

class ProfileDetails extends React.Component {
  render(){

    const { movie , classes } = this.props;

    return(
      <form
        autoComplete="off"
        noValidate
        className={classes.root}
      >
        <Card>
          <CardHeader
            
            title="Detail"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  label="Title"
                  name="Title"
                  value={movie.Title}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  label="Year"
                  name="Year"
                  value={movie.Year}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  label="Type"
                  name="Type"
                  value={movie.Type}
                  variant="outlined"
                />
              </Grid>


            </Grid>
          </CardContent>
          <Divider />
          <Box
            display="flex"
            justifyContent="flex-end"
            p={2}
          >
            <Button
              color="primary"
              variant="contained"
            >
              Save Changes
            </Button>
          </Box>
        </Card>
      </form>
    );
  }
}

export default withStyles(styles)(ProfileDetails);
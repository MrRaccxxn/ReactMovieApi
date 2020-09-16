import React, { useState } from 'react';
import {
  Box,
  Container,
  withStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';


const styles = (theme) => ({
    
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },

  center: {
    position: "absolute",
    left: "50%", 
    top: "50%",
 
  }

});

class List_Container extends React.Component{
  render(){
    const { loading, classes, movies } = this.props;
    return(

      <Page
      className={classes.root}
      title="Movies"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
        {loading ? <CircularProgress className = {classes.center} />
         :  movies != undefined
            ? <MovieList movies={movies}/>
            : <Alert severity="error" className = {classes.center} >
            There is no match with the search</Alert>}
         
        </Box>
      </Container>
    </Page>

    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movies: state.movies.movies
});

export default connect(mapStateToProps)(withStyles(styles)(List_Container));

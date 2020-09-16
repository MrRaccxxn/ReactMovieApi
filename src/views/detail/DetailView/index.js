import React from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import { detail_movie } from '../../../redux/actions/actions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom"

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
});

class Account extends React.Component {

  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
    this.props.detail_movie(id);
  }

  render(){
    const { classes, movie} = this.props;
    console.log(movie);
    return(
      <Page
      className={classes.root}
      title="Detail View"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Profile 
              movie = {movie}
            />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <ProfileDetails
              movie = {movie}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie
});

const Detail =  connect(mapStateToProps, {detail_movie})(withStyles(styles)(Account));


export default (props) => (
  <Detail
      {...props}
      params={useParams()}
  />
);
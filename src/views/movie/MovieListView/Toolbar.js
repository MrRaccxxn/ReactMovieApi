import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  withStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { list_movies } from '../../../redux/actions/actions';
import { connect } from 'react-redux';


const styles = (theme) => ({
    
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
});

class Toolbar extends React.Component{

  componentDidMount(){
    this.props.list_movies('');
  }

  liveSearch = (e) => {
    this.props.list_movies(e.target.value);
  }

  render(){

    const { classes } = this.props;

    return(
      <div
        className={classes.root}
      >
        <Box
          display="flex"
          justifyContent="flex-end"
        >
          <Button className={classes.importButton}>
            Import
          </Button>
          <Button className={classes.exportButton}>
            Export
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            New Movie
          </Button>
        </Box>
        <Box mt={3}>
          <Card>
            <CardContent>
              <Box maxWidth={500}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon
                          fontSize="small"
                          color="action"
                        >
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search"
                  variant="outlined"
                  onChange={this.liveSearch}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});


export default connect( mapStateToProps, {list_movies})(withStyles(styles)(Toolbar));

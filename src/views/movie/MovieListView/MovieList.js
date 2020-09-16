import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton 
} from '@material-ui/core';

import getInitials from 'src/utils/getInitials';
import { withStyles } from '@material-ui/core/styles';
import { detail_movie } from '../../../redux/actions/actions';


const styles = (theme) => ({
    
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }

});

class MovieList extends React.Component{
  
    constructor() {
      super();
    
    }
  
    render(){
      
      const { classes, movies } = this.props;

        return(


          <div>
          <Card
            className={classes.root}
          >
            <PerfectScrollbar>
              <Box minWidth={1050}>
                <Table>
                  <TableHead>
                    <TableRow>
                      
                      <TableCell>
                        Poster
                      </TableCell>
                      <TableCell>
                        Titulo
                      </TableCell>
                      <TableCell>
                        Tipo
                      </TableCell>
                      <TableCell>
                        Anho
                      </TableCell>
                      <TableCell>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {movies.map((movie) => (
                
                      <TableRow
                        hover
                      >
                        <TableCell>
                          <Box
                            alignItems="center"
                            display="flex"
                          >
                            <Avatar
                              className={classes.avatar}
                              src={movie.Poster}
                            >
                              {getInitials(movie.Title)}
                            </Avatar>
                           
                          </Box>
                        </TableCell>
                        <TableCell>
                          {movie.Title}
                        </TableCell>
                        <TableCell>
                          {movie.Type}
                        </TableCell>
                        <TableCell>
                          {movie.Year}
                        </TableCell>
                        <TableCell>

                        {/*<IconButton 
                        size="small" 
                        onClick={() => this.detailView(movie.imdbID)}
                        >
                     
                            <EditIcon/>
                          
                        </IconButton>
                        */}
                        <Link to={`${movie.imdbID}`}>
                          <EditIcon/>
                        </Link>
         
                        </TableCell>
                     
                      </TableRow>
    
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          
          </Card>
          </div>
        );
    }
}




export default connect(  null , { detail_movie })(withStyles(styles)(MovieList));

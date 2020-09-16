import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles
  } from '@material-ui/core';

import { Search as SearchIcon } from 'react-feather';

import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    
    root: {},
    importButton: {
      marginRight: theme.spacing(1)
    },
    exportButton: {
      marginRight: theme.spacing(1)
    }

});

class ToolBar extends React.Component {
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
                  addButtonName = { props.addButtonName}
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
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </div>
        

        );
    }
}


export default withStyles(styles)(MovieList);
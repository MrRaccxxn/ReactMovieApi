import React, { Component } from 'react';

import { Grid, Typography, TextField, Container, FormControlLabel, Checkbox, Button, Link} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import history from '../../history';

const styles = (theme) => ({
    
    root: {
        margin : 16,
        position: "absolute",
        left: "50%", 
        top: "50%",
        transform: "translate(-50%, -50%)" ,
        padding : "2%",
        backgroundColor : "white",
        borderRadius : 16,
        
        [theme.breakpoints.down('sm')]: {
            padding : "10%"
        }
    },

    background : {
        width: '100%',
        backgroundColor : "#1b1f37",
        position: "fixed",
        bottom: "0",
        right: "0",
        left: "0",
        top: "0"
    },

    img : {

        maxWidth: '100%',
        maxHeight: '100%',
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"

    }, 

    image: {
        width: 250,
        height: 250,
        position: "relative"
        
      },
    
    form : {
        marginTop: 10
    },
    
    margin : {

            margin: theme.spacing(0.5)
    }
});


class SignIn extends Component{

    redirect_movies(){
        history.push('app/movies');
        window.location.reload();
    }

    redirect_singUp(){
        history.push('register');
        window.location.reload();
    }

    render(){
        
        const { classes } = this.props;

        return(

            <div className={classes.background}>
              

                <Container maxWidth="sm" className={classes.root} >
                
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={6}>

                            <div className = {classes.image}>
                                <img className={classes.img} alt="Cerbero" src="./static/images/home.svg" />
                            </div>

                        </Grid>

                        <Grid item xs={12} md={6}>

                                <Typography gutterBottom variant="subtitle1">
                                    Bienvenido a Cerbero!
                                </Typography>

                                <form noValidate autoComplete="off" className={classes.form}>

                                  <TextField 
                                  id="outlined-basic" 
                                  label="Email" 
                                  fullWidth
                                  variant="outlined"
                                  className={classes.margin}
                                  />

                                  <TextField 
                                  id="outlined-basic" 
                                  label="Password" 
                                  fullWidth
                                  variant="outlined"
                                  className={classes.margin}
                                  />

                                <FormControlLabel
                                   control={
                                     <Checkbox
                                     
                                       name="checkedB"
                                       color="primary"
                                     />
                                   }
                                   label="Recuerdame"
                                 className={classes.margin}
                                 />

                                </form>
                              
                              
                                <Button variant="contained" color="primary" size="small" className={classes.margin} onClick={this.redirect_movies}>
                                  Ingresar
                                </Button>
                              
                                <Button size="small" className={classes.margin} onClick={this.redirect_singUp}>
                                   
                                  Registrarse
                                  
                                </Button>


                        </Grid>

                    </Grid>

         

         


                </Container>
         
            </div>

        );
    }

}

export default withStyles(styles)(SignIn);
import React from 'react'
import {Link} from 'react-router-dom';
import {Grid, Typography, Button, TextField, useTheme} from '@material-ui/core';
import ContactForm from './ContactForm';
import useStyles from './styles'


function ContactPage() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid container>
            <Grid item container justify='center' direction='column' lg={3}>
                <Grid item>
                    <Typography variant='h2' style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography variant='body2' className={classes.blueText}>We are waiting.</Typography>
                </Grid>
                <ContactForm/>
            </Grid>
            <Grid item container className={classes.background} lg={9}>

            </Grid>
        </Grid>
    )
}

export default ContactPage

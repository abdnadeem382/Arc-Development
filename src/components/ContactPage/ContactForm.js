import React from 'react'
import {Grid, Typography, Button, TextField, useTheme} from '@material-ui/core';
import useStyles from './styles'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'

function ContactForm() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <>
        <Grid item container>
            <Grid item>
                <img src={phoneIcon} alt='Phone Icon' style={{marginRight: '0.5em'}}/>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={`${classes.blueText} ${classes.labelText}`}>(+92) 334-1111111</Typography>
            </Grid>
        </Grid>
        <Grid item container>
            <Grid item>
                <img src={emailIcon} alt='Envelope Icon' style={{marginRight: '0.5em', verticalAlign:'bottom'}}/>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={`${classes.blueText} ${classes.labelText}`}>abdullah@gmail.com</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default ContactForm

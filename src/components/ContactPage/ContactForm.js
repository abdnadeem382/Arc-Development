import React, {useState} from 'react'
import {Grid, Typography, Button, TextField, useTheme} from '@material-ui/core';
import useStyles from './styles'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import airplane from '../../assets/send.svg'

function ContactForm() {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    return (
        <>
        <Grid item container style={{marginTop: '2em'}}>
            <Grid item>
                <img src={phoneIcon} alt='Phone Icon' style={{marginRight: '0.5em'}}/>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={`${classes.blueText} ${classes.labelText}`}>(+92) 334-1111111</Typography>
            </Grid>
        </Grid>
        <Grid item container style={{marginBottom: '2em'}} >
            <Grid item>
                <img src={emailIcon} alt='Envelope Icon' style={{marginRight: '0.5em', verticalAlign:'bottom'}}/>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={`${classes.blueText} ${classes.labelText}`}>abdullah@gmail.com</Typography>
            </Grid>
        </Grid>
        <Grid item container direction='column' style={{maxWidth: '20em'}}>
            <Grid item>
                <TextField fullWidth label='Name' id='name' value={name} onChange={e=>{setName(e.target.value)}}/>
            </Grid>
            <Grid item>
                <TextField fullWidth label='Email' id='email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
            </Grid>
            <Grid item>
                <TextField fullWidth label='Phone' id='phone' value={phone} onChange={e=>{setPhone(e.target.value)}}/>
            </Grid>
        </Grid>
        <Grid item style={{maxWidth: '20em'}}>
            <TextField 
                className={classes.message} 
                InputProps={{disableUnderline: true}}
                rows={10}
                fullWidth 
                multiline 
                value={message} 
                id='message' 
                onChange={e=>{setMessage(e.target.value)}}/>
        </Grid>
        <Grid item container justify='center' style={{marginTop: '2em'}}>
            <Button variant='contained' className={classes.sendBtn}>
                Send Message
                <img src={airplane} alt="paper airplane" style={{marginLeft: '1em'}}/>
            </Button>
        </Grid>
        </>
    )
}

export default ContactForm

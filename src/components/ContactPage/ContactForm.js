import React, {useState} from 'react'
import {Grid, Typography, Button, TextField, Dialog, DialogContent} from '@material-ui/core';
import useStyles from './styles'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import airplane from '../../assets/send.svg'

function ContactForm({matchesMD, matchesSM, matchesXS}) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [open, setOpen] = useState(false);

    const onChange=(e)=>{
        let valid;
        switch(e.target.id){
            case 'email':
                setEmail(e.target.value);
                valid=  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
                if(!valid){
                    setEmailHelper('Invalid email')
                }
                else{
                    setEmailHelper('');
                }
                break;
            case 'phone':
                setPhone(e.target.value);
                valid = /^(\+92|0|92)[0-9]{10}$/.test(e.target.value);
                if(!valid){
                    setPhoneHelper('Invlid phone number')
                }
                else{
                    setPhoneHelper('');
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
        <Grid justify={matchesMD ? 'center' : undefined} item container style={{marginTop: '2em'}}>
            <Grid item>
                <img src={phoneIcon} alt='Phone Icon' style={{marginRight: '0.5em'}}/>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={`${classes.blueText} ${classes.labelText}`}>
                    <a className={classes.links} href='tel:03341111111'>(+92) 334-1111111</a>
                    </Typography>
            </Grid>
        </Grid>
        <Grid justify={matchesMD ? 'center' : undefined} item container style={{marginBottom: '2em'}} >
            <Grid item>
                <img src={emailIcon} alt='Envelope Icon' style={{marginRight: '0.5em', verticalAlign:'bottom'}}/>
            </Grid>
            <Grid item>
                <Typography variant='body2' className={`${classes.blueText} ${classes.labelText}`}>
                    <a className={classes.links} href='mailto:abdullah@gmail.com'>abdullah@gmail.com</a>
                </Typography>
            </Grid>
        </Grid>
        <Grid item container direction='column' style={{maxWidth: '20em'}}>
            <Grid item className={classes.textfields}>
                <TextField fullWidth label='Name' id='name' value={name} onChange={e=>{setName(e.target.value)}}/>
            </Grid>
            <Grid item className={classes.textfields}>
                <TextField 
                    fullWidth 
                    label='Email' 
                    id='email' 
                    value={email}
                    helperText={emailHelper}
                    error={emailHelper.length !== 0}
                    onChange={onChange}/>
            </Grid>
            <Grid item>
                <TextField 
                    fullWidth 
                    label='Phone' 
                    id='phone' 
                    error={phoneHelper.length !== 0} 
                    helperText={phoneHelper}
                    value={phone} 
                    onChange={onChange}/>
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
        </Grid>
        <Grid item container justify='center' style={{marginTop: '2em'}}>
            <Button 
                variant='contained' 
                className={classes.sendBtn}
                onClick={()=>setOpen(true)}
                disabled={
                    name.length ===0 ||
                    email.length ===0 ||
                    phone.length ===0 ||
                    message.length ===0 ||
                    emailHelper.length !==0 ||
                    phoneHelper.length !== 0 
                }
                >
                Send Message
                <img src={airplane} alt="paper airplane" style={{marginLeft: '1em'}}/>
            </Button>
        </Grid>
        <Dialog fullScreen={matchesXS} style={{zIndex: 1302}} open={open} onClose={()=>setOpen(false)} PaperProps={{style: {padding: matchesXS ? '1em 1em 0 0' : matchesMD ? '5em 10em 5em 10em' :  '5em 20em 5em 20em'}}}>
            <DialogContent>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography align='center' variant='h4' gutterBottom>Confirm Message</Typography>
                    </Grid>
                    <Grid item className={classes.textfields}>
                        <TextField fullWidth label='Name' id='name' value={name} onChange={e=>{setName(e.target.value)}}/>
                    </Grid>
                    <Grid item className={classes.textfields}>
                        <TextField 
                            fullWidth 
                            label='Email' 
                            id='email' 
                            value={email}
                            helperText={emailHelper}
                            error={emailHelper.length !== 0}
                            onChange={onChange}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                            fullWidth 
                            label='Phone' 
                            id='phone' 
                            error={phoneHelper.length !== 0} 
                            helperText={phoneHelper}
                            value={phone} 
                            onChange={onChange}/>
                    </Grid>
                    <Grid item style={{maxWidth: matchesXS ? '100%' : '20em'}}>
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
                </Grid>
                <Grid item container direction={matchesSM ? 'column' : 'row'} style={{marginTop:'2em'}} alignItems='center'>
                    <Grid item>
                        <Button onClick={()=>setOpen(false)} color='primary' style={{fontWeight: 300}}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant='contained' 
                            className={classes.sendBtn}
                            onClick={()=>setOpen(true)}
                            disabled={
                                name.length ===0 ||
                                email.length ===0 ||
                                phone.length ===0 ||
                                message.length ===0 ||
                                emailHelper.length !==0 ||
                                phoneHelper.length !== 0 
                            }
                            >
                            Send Message
                            <img src={airplane} alt="paper airplane" style={{marginLeft: '1em'}}/>
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
        </>
    )
}

export default ContactForm

import React from 'react'
import {Link} from 'react-router-dom';
import {Grid, Typography, Button, useTheme, useMediaQuery} from '@material-ui/core';
import ContactForm from './ContactForm';
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import useStyles from './styles'

function ContactPage({setValue}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container>
            <Grid 
                item container
                justify='center' 
                direction='column' 
                alignItems='center'
                className={classes.contactGrid}
                lg={4} 
                xl={3}>
                <Grid item>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant='h2' align={matchesMD ? 'center' : undefined} style={{lineHeight: 1}}>Contact Us</Typography>
                            <Typography variant='body2' align={matchesMD ? 'center' : undefined} className={classes.blueText}>We are waiting.</Typography>
                        </Grid>
                            <ContactForm matchesMD={matchesMD} matchesSM={matchesSM} matchesXS={matchesXS}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? 'column' : 'row'} className={classes.background} justify={matchesMD ? 'center' : undefined} alignItems="center" lg={8} xl={9}>
                <Grid item style={{marginLeft: matchesMD ? 0 : '3em', textAlign: matchesMD ? 'center': 'inherit'}} >
                    <Grid container direction={matchesMD ? 'column' :'row'}>
                        <Grid item>
                            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>Simple Software.<br/> Revolutionary Results</Typography>
                            <Typography variant='subtitle2' align={matchesMD ? 'center' : undefined} style={{fontSize: '1.5rem'}}>Take advantage of the 21st Century</Typography>
                            <Grid container justify={matchesMD ? 'center': undefined} item >
                                <Button onClick={()=>setValue(2)} component={Link} to='/revolution' className={classes.learnBtnServices} variant = 'outlined'>
                                    <span style={{marginRight: 6.5}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>  
                        </Grid>
                        <Grid item>
                            <Button onClick={()=>setValue(5)} component={Link} to='/estimate'  variant='contained' className={classes.estimateBtn}>Free Estimate</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ContactPage

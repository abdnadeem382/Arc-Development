import React from 'react'
import useStyles from './styles';
import {Grid, Button, Typography, Card, CardContent} from '@material-ui/core'
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import { useTheme, useMediaQuery } from '@material-ui/core';


function InfoBlock() {
    const classes = useStyles();
    const theme= useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
    /*ABOUT US SECTION*/
        <Grid container direction='row' style={{height: '80em', textAlign: matchesXS ? 'center': 'inherit'}} alignItems="center">
            <Grid item container style={{position: 'absolute'}} direction={matchesXS ? 'column' : 'right'} spacing={matchesXS ? 9: 0}>
            <Grid item style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em'}} sm>
                <Grid container direction='column'>
                    <Typography variant='h2' style={{color: "white"}}>About Us</Typography>
                    <Typography variant='subtitle2'>Let's get personal</Typography>
                    <Grid item>
                        <Button className={classes.learnBtnAboutUs} variant = 'outlined'>
                            <span style={{marginRight: 6.5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill='white' />
                        </Button>
                    </Grid>  
                </Grid>
            </Grid>
    {/*CONTACT US SECTION*/}
            <Grid item style={{ marginRight:  matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right'}} sm >
                <Grid container direction='column'>
                    <Typography variant='h2' style={{color: "white"}}>Contact Us</Typography>
                    <Typography variant='subtitle2'>Say hello! <span role='img' aria-label='waving hand'>🖐🏻</span></Typography>
                    <Grid item>
                        <Button className={classes.learnBtnAboutUs} variant = 'outlined'>
                            <span style={{marginRight: 6.5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill='white' />
                        </Button>
                    </Grid>  
                </Grid>
            </Grid>
            </Grid>
            <div className={classes.infoBackground}/>
        </Grid>
    )
}

export default InfoBlock

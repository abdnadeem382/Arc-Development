import React from 'react'
import Lottie from 'react-lottie';
import useStyles from './styles';
import animationData from '../../animations/landinganimation/data'
import {Grid, Button, Typography} from '@material-ui/core'
import { useTheme } from '@material-ui/core';
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'

function HeroBlock() {
    const classes = useStyles();
    const theme = useTheme();

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        } 
      };

    return (
        <Grid container justify='flex-end' alignItems='center' direction='row'>
            <Grid sm item className={classes.heroTextContainer}>
                <Typography variant='h2' align='center'>Bringing West Coast Technology<br/>to the Midwest </Typography>
                <Grid container justify='center' className={classes.buttonContainer}>
                    <Grid item>
                        <Button className={classes.estimateBtn} variant='containerd'>Free Estimate</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.learnBtnHero} variant='outlined'>
                            <span style={{marginRight: 6.5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
                <Lottie 
                    options={defaultOptions}
                    height='100%'
                    width='100%'
                />
            </Grid>
        </Grid>
    )
}

export default HeroBlock

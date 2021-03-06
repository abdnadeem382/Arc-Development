import React from 'react'
import {Grid, Typography, useTheme, useMediaQuery} from '@material-ui/core'
import vision from '../../assets/vision.svg'
import useStyles from './styles';

function Vision() {
    const classes= useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Grid item lg>
                <img src={vision}  alt='Mountain through binoculars' className={classes.visionImg}/>
            </Grid>
            <Grid item container direction='column' lg style={{maxWidth:'37em'}}>
                <Grid item >
                    <Typography align={ matchesMD ? 'center' : 'right'} variant='h4' gutterBottom>
                        Vision
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={ matchesMD ? 'center' : 'right'} variant='body2' paragraph>
                        The rise of computers, and subsequently the Internet, has completely altered every aspect of human life.
                        This has increased our comfort, broadened our connections, and reshaped how we view the world.
                    </Typography>
                    <Typography align={ matchesMD ? 'center' : 'right'} variant='body2' paragraph>
                        What once was confined to huge rooms and teams of engineers now resides in every single one of our hands.
                        Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of 
                        everything we do.
                    </Typography>
                    <Typography align={ matchesMD ? 'center' : 'right'} variant='body2' paragraph>
                        We want to help businesses capitalize on the lastest and greatest technology.
                        The best way to predict the future is to be the one building it, and we want
                        to help guide the world into this next chapter of technological expansion, exploration,
                        and innovation.
                    </Typography>
                    <Typography align={ matchesMD ? 'center' : 'right'} variant='body2' paragraph>
                        By holding ourselves to rigorous standars and pristine quality,
                        we can ensure you have the absolute best tools necessary to thrive in
                        this new frontier.
                    </Typography>
                    <Typography align={ matchesMD ? 'center' : 'right'} variant='body2' paragraph>
                        We see a future where every individual has personalized software custom
                        tailored to their lifestyle, culture, and interests, helping them
                        overcome life's obstacles. Each project is a step towards that goal.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Vision

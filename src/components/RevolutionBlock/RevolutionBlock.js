import React from 'react'
import useStyles from './styles';
import {Grid, Button, Typography, Card, CardContent} from '@material-ui/core'
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import { useTheme, useMediaQuery } from '@material-ui/core';

function RevolutionBlock() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 
    return (
            <Grid container className={classes.revContainer} alignItems='center' justify='center'>
                <Card elevation={6} className={classes.revCard}>
                    <CardContent style={{textAlign: 'center'}}>
                        <Grid container direction='column'>
                            <Grid item>
                                <Typography variant='h3' gutterBottom>The Revolution</Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant='subtitle1'>Visionary insights coupled with cutting-edge technology is a recipe for revolution</Typography>
                                <Button className={classes.learnBtnHero} variant='outlined'>
                                    <span style={{marginRight: 6.5}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                            </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <div className={classes.revBackground}/> 
            </Grid>
    )
}

export default RevolutionBlock

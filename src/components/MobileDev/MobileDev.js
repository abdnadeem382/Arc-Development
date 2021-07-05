import React from 'react'
import useStyles from '../ServicesBlock/styles';
import {Grid, Button, Typography} from '@material-ui/core'
import ButtonArrow from '../UI/ButtonArrow/ButtonArrow'
import { useTheme, useMediaQuery } from '@material-ui/core';
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import {Link} from 'react-router-dom'

function MobileDev({setValue, setSelectedIndex}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 
    return (
            <Grid className={classes.serviceContainer} justify={matchesSM ? 'center' : 'flex-end'} container direction='row'>
                <Grid style={{ textAlign: matchesSM ? 'center': undefined, width: matchesSM ? undefined : '35em'}} item>
                    <Typography variant='h4'>Mobile App Development</Typography>
                    <Typography className={classes.subtitle} variant='subtitle1'>Extend Functionality. Extend Access. Increase Engagement</Typography>
                    <Typography variant='subtitle1'>Integrate your web experience or create a standalone app  {matchesSM ? null: <br/>} with either mobile platform </Typography>
                    <Button onClick={()=>{setValue(1); setSelectedIndex(2)}} component={Link} to='/mobileapps' className={classes.learnBtnServices} variant = 'outlined'>
                        <span style={{marginRight: 6.5}}>Learn More</span>
                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                    </Button>  
                </Grid>
                <Grid item style={{marginRight: matchesSM ? 0: "5em"}}>
                    <img className={classes.img} width='250em' src={mobileAppsIcon} alt='mobile app development icon'/>
                </Grid>
            </Grid>
    )
}

export default MobileDev

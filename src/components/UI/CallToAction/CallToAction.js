import React from 'react'
import {Grid, Typography, Button} from '@material-ui/core'
import useStyles from './styles'
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import {useTheme, useMediaQuery} from '@material-ui/core'
import {Link} from 'react-router-dom'


function CallToAction({setValue}) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (
        <Grid 
            className={classes.background} 
            container 
            direction= {matchesSM ? 'column' :'row'} 
            alignItems="center" 
            justify={matchesSM ? 'center': 'space-between'}
            >
            <Grid item style={{marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center': 'inherit'}} >
                <Grid container direction='column'>
                    <Grid item>
                        <Typography variant='h2'>Simple Software.<br/> Revolutionary Results</Typography>
                        <Typography variant='subtitle2' style={{fontSize: '1.5rem'}}>Take advantage of the 21st Century</Typography>
                        <Grid container justify={matchesSM ? 'center': undefined} item >
                            <Button onClick={()=>setValue(2)} component={Link} to='/revolution'  className={classes.learnBtnServices} variant = 'outlined'>
                                <span style={{marginRight: 6.5}}>Learn More</span>
                                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>  
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button onClick={()=>setValue(5)} component={Link} to='/estimate'  variant='contained' className={classes.estimateBtn}>Free Estimate</Button>
            </Grid>
        </Grid>
    )
}

export default CallToAction

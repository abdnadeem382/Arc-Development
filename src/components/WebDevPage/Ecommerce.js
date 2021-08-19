import React from 'react'
import {Grid, Typography ,useTheme, useMediaQuery} from '@material-ui/core'
import useStyles from './styles'
import ecommerce from '../../assets/ecommerce.svg'

function  Ecommerce() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
        <Grid item>
            <Grid container direction='column'>
                <Grid item>
                    <Typography align='center' variant='h4' gutterBottom>
                        E-Commerce
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={ecommerce} alt='World outline made of dollar signs' />
                </Grid>
            </Grid>
        </Grid>
        <Grid item style={{marginLeft: matchesSM ? 0 :'1em'}} className={classes.paraContainer }>
            <Typography align={matchesSM ? "center" : undefined} paragraph variant='body2'>
                It's no secret that people like to shop online.
            </Typography>
            <Typography align={matchesSM ? "center" : undefined} paragraph variant='body2'>
                In 2017, over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
            </Typography>
        </Grid>
        </>
    )
}

export default Ecommerce

import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import maintain from '../../assets/maintainIcon.svg'

function Maintain() {
    return (
        <>
        <Grid item container direction='column' lg>
            <Grid item>
                <Typography variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Maintain
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Our work does not end there.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    After a successful launch, we keep in close contact to listen 
                    to feedback and hear how the project is being received.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    From there on out we make sure your application is kept up
                    to date and taking advantage of the best features and practices
                    available. When new developments arise or new techniques are 
                    discovered in future projects, we will implement those 
                    advancements in your project as part of our routine maintenance.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={maintain} alt='Wrench tightening bolts'/>
        </Grid>
        </>
    )
}

export default Maintain

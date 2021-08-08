import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import lightbulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopWatch from '../../assets/stopwatch.svg'

function SaveIcons() {
    return (
        <Grid item container direction='row' justify='center' style={{marginTop: '15em', marginBottom: '20em'}}>
                <Grid item container direction='column'md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt='Light Bulb'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column'md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopWatch} alt='StopWatch'/>
                    </Grid>
                </Grid>
                <Grid item container direction='column'md alignItems="center" style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt='Cash'/>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default SaveIcons

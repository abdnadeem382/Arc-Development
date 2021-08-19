import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import build from '../../assets/buildIcon.svg'

function Build() {
    return (
        <>
        <Grid item container direction='column' lg>
            <Grid item>
                <Typography variant='h4' gutterBottom style={{color: "#000", marginTop: '5em'}}>
                    Build
                </Typography>
            </Grid>
            <Grid item style={{maxWidth: '22em'}}>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Here's where we get down to business.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Engineering begins after your approval on the final designs. We start by 
                    scaffolding out the project on a high level, prioritizing some areas
                    over others.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Each area is then developed in order of importance until ready to be 
                    connected to the next piece.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Typically the backend, behind the scenes operations are completed first.
                    Once all the services are in place, we can then create the frontend,
                    user side of things.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Finishing the application does not mean we are done though, because
                    we use extensive testing to guarantee compatibility with all intended
                    devices.
                </Typography>
                <Typography variant='body2' style={{color: "#fff"}} paragraph>
                    Only after our rigorous examinations will we accept a product as finished,
                    then pushing it through the production pipeline. This produces an optimized,
                    compressed, consumer version of the code and assets ready for deployment.
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg style={{alignSelf:"center"}}>
            <img src={build} alt='Construction Site'/>
        </Grid>
        </>
    )
}

export default Build

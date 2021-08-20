import React from 'react'
import { Grid, Typography, Avatar } from '@material-ui/core'
import useStyles from './styles'
import founder from '../../assets/abdullah.jpg'

function Team() {
    const classes = useStyles();
    return (
        <>
        <Grid item>
            <Typography gutterBottom variant='h2' align='center'>Team</Typography>
        </Grid>
        <Grid item>
            <Typography variant='body2' align='center' paragraph>Abdullah Nadeem</Typography>
            <Typography variant='body2' align='center' paragraph>I started coding when I was 9.</Typography>
        </Grid>
        <Grid item>
            <Avatar alt="Founder Profile Picture" src={founder} className={classes.avatar}/>
        </Grid>
        <Grid item style={{marginTop: '2em', maxWidth: "40em"}}>
            <Typography variant='body2' align='center' paragraph>
                I taught myself basic coidng from a library book back in third grade, and ever since then, 
                my passion has solely been set on learning - learning about computers, learning mathematics
                and philosophy, studying design, always just learning.
            </Typography>
            <Typography variant='body2' align='center' paragraph>
                Now I'm ready to apply everything I've learned and help others with the intuition I
                have developed.
            </Typography>
        </Grid>
        </>
    )
}

export default Team

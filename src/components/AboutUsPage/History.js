import React from 'react'
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import history from '../../assets/history.svg'

function History() {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
        <Grid item>
            <Grid item container lg direction='column' style={{maxWidth: "35em"}}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant='h4'>
                        History
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        We are the new kid on the block.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        Founded in 2019, we are ready to get our hands on the world's business problems.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        It all started with one question: Why aren't all businesses using available technology?
                        There are many different answers to that question: economic barriers, social barriers,
                        educational barriers, and sometimes institutional problems.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering
                        and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of
                        possibility. Things that have always been done by hand can now be done digitally and automatically, and
                        completely new methods of interaction are created daily. Taking full advantage of these advancements
                        is the name of the game.
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant='body2' paragraph>
                        All this change can be a lot to keep up with, and that's where we come in.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
            <Grid item>
                <Grid item lg container justify="center" >
                    <img src={history} alt="Quill pen sitting on top of book" style={{maxHeight: '22em', width: matchesMD ? "20em" : undefined}}/>
                </Grid>
            </Grid>
        </>
    )
}

export default History

import React from 'react'
import {Grid, Typography} from '@material-ui/core'
import Lottie from 'react-lottie'
import technologyAnimation from '../../animations/technologyAnimation/data.json'

function Technology() {
    
    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: technologyAnimation,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        } 
    };

    return (
        <>
            
            <Grid item container direction='column' lg style={{maxWidth:'37em'}}>
                <Grid item >
                    <Typography variant='h4' gutterBottom>
                        Technology
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body2' paragraph>
                        In 2013, Facebook invented a new way of building websites. This new system, React.js, completely
                        revolutionizes the process and practice of website development.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        Instead of chaining together long individual pages, like the traditional websites, React websites
                        are built with little chunks of code called components. These components are faster,
                        easier to maintain, and are easily resued and customized, each serving a singular purpose.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        Two years later they shocked the world by releasing a similar system, React Native, for
                        producing iOS and Android apps. Instead of having to master two completely separate 
                        development paltforms, you can leverage the knowledge you already possessed from building 
                        websites and reapply it directly! This was a huge leap forward.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        This technology is now being used by companies like AirBnB, Microsoft, Netflix,
                        Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram, large portions
                        of it were even rebuilt using React.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        Developers have since built on top of the systems by automating project
                        setup and deployment, allowing creators to focus as much as possible on their work 
                        itself.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        These technical advancements translate into savings by significantly reducing
                        the workload and streamlining the workflow for developing new pieces of software,
                        while also lowering the barrier to entry for mobile app development.
                    </Typography>
                    <Typography variant='body2' paragraph>
                        This puts personalization in your pocket - faster, better, and more affordable
                        than ever before. 
                    </Typography>
                </Grid>
            </Grid>
            <Grid item lg container justify="flex-end" >
                <Lottie options={defaultOptions} style={{maxWidth: "40em", margin: 0}}/>
            </Grid>
        </>
    )
}

export default Technology

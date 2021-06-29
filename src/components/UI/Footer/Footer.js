import React from 'react'
import useStyles from './styles'
import footerAdornment from '../../../assets/Footer Adornment.svg'
import {Grid, Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'
import facebook from '../../../assets/facebook.svg'
import instagram from '../../../assets/instagram.svg'
import twitter from '../../../assets/twitter.svg'

function Footer({value, setValue, selectedIndex, setSelectedIndex}) {

    const classes = useStyles();

    return (
       <footer className={classes.footer}>
           <Hidden mdDown>
           <Grid container justify='center' className={classes.mainContainer}>
                <Grid item className={classes.gridItem} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item className={classes.link} component={Link} to='/' onClick={()=>setValue(0)}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} to='/services'onClick={()=>{setValue(1); setSelectedIndex(0)}}>
                            Services
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/customsoftware' onClick={()=>{setValue(1); setSelectedIndex(1)}}>
                            Custom Software Development
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/mobileapps' onClick={()=>{setValue(1); setSelectedIndex(2)}}>
                            Mobile App Development
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/website' onClick={()=>{setValue(1); setSelectedIndex(3)}}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
                            The Revolution
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
                            Vision
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
                            Technology
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} to='/about' onClick={()=>setValue(3)}>
                            About Us
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/about' onClick={()=>setValue(3)}>
                            History
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/about' onClick={()=>setValue(3)}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction ='column' spacing={2}>
                        <Grid item className={classes.link} component={Link} to='/contact' onClick={()=>setValue(4)}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
           </Grid>
           </Hidden>
           <img className={classes.adornment} src={footerAdornment} alt='black decorative slash'/>
            <Grid container justify='flex-end' spacing={2} className={classes.socialContainer }>
                <Grid item component={'a'} href='https://www.facebook.com' rel="noopener noreferrer" target='_blank'>
                    <img alt='facebook logo' src={facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={'a'} href='https://www.twitter.com' rel="noopener noreferrer" target='_blank'>
                    <img alt='twitter logo' src={twitter} className={classes.icon}/>
                </Grid>
                <Grid item component={'a'} href='https://www.instagram.com' rel="noopener noreferrer" target='_blank'>
                    <img alt='instagram logo' src={instagram} className={classes.icon}/>
                </Grid>
            </Grid>
       </footer>     
    )
}

export default Footer

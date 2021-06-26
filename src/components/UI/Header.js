import React from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles((theme)=>(
      {
          toolbarMargin:{
              ...theme.mixins.toolbar,
              marginBottom: '3em'
          },
          image:{
              height: "7em"
          },
          tabContainer:{
              marginLeft: 'auto'
          },
          tab:{
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: "25px"
          }
      }
  ))

  

function Header() {

    const classes = useStyles();


    return (
        <>
        <ElevationScroll>
        <AppBar position='fixed' color='primary'>
            <Toolbar disableGutters>
                <img className={classes.image} src={logo} alt="COMPANY LOGO"/>
                <Tabs className={classes.tabContainer}>
                    <Tab className={classes.tab} label='Home'/>
                    <Tab className={classes.tab} label='Services'/>
                    <Tab className={classes.tab} label='The Revolution'/>
                    <Tab className={classes.tab} label='About Us'/>
                    <Tab className={classes.tab} label='Contact Us'/>
                    
                </Tabs>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </>
    )
}

export default Header

import React from 'react'
import { AppBar, Toolbar,  useMediaQuery } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {useTheme} from '@material-ui/styles'
import Tabs from '../Tabs/Tabs'
import useStyles from './styles';

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

function Header(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md')); 

    return (
        <>
        <ElevationScroll>
        <AppBar position='fixed' color='primary' className={classes.appbar}>
            <Toolbar disableGutters>
                <Tabs matches={matches} {...props}/>
                
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>

        </>
    )
}

export default Header

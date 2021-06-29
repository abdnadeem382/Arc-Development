import React, { useState } from 'react'
import { SwipeableDrawer, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import List from '../List/List'
import useStyles from './styles'

function Drawer({setValue, value, routes}) {
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    return (
        <>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={()=>setOpenDrawer(false)}
                onOpen={()=>setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
                >
                <div className={classes.toolbarMargin}></div>
                <List routes ={routes} value={value} setOpenDrawer={setOpenDrawer} setValue={setValue}/>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    )
}

export default Drawer

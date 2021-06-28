import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom'
import useStyles from './styles'

function ListContent({setOpenDrawer, value, setValue}) {
    const classes = useStyles();
    return (
        <div>
            <List>
                <ListItem onClick={()=>{setOpenDrawer(false); setValue(0)}} divider button component={Link} to ='/' selected={value===0}>
                    <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
                </ListItem>
                <ListItem onClick={()=>{setOpenDrawer(false); setValue(1)}} divider button component={Link} to ='/services' selected={value===1}>
                    <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Services</ListItemText>
                </ListItem>
                <ListItem onClick={()=>{setOpenDrawer(false); setValue(2)}} divider button component={Link} to ='/revolution' selected={value===2}>
                    <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Revolution</ListItemText>
                </ListItem>
                <ListItem onClick={()=>{setOpenDrawer(false); setValue(3)}} divider button component={Link} to ='/about' selected={value===3}>
                    <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>About Us</ListItemText>
                </ListItem>
                <ListItem onClick={()=>{setOpenDrawer(false); setValue(4)}} divider button component={Link} to ='/contact' selected={value===4}>
                    <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
                </ListItem>
                <ListItem className={classes.drawerItemEstimate} onClick={()=>{setOpenDrawer(false); setValue(5)}} divider button component={Link} to ='/estimate' selected={value===5}>
                    <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default ListContent

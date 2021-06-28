import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom'
import useStyles from './styles'

function ListContent({setOpenDrawer, value, setValue, routes}) {
    const classes = useStyles();
    return (
            <List> 
            {routes.map((route, index)=>(
                <ListItem
                    key={index} 
                    onClick={()=>{setOpenDrawer(false); setValue(route.activeIndex);}}
                    divider button component={Link}
                    to= {route.link}
                    selected= {value === route.activeIndex}
                    >
                    <ListItemText
                        className={value === route.activeIndex ? `${classes.drawerItem} ${classes.drawerItemSelected}` :classes.drawerItem}
                        disableTypography
                    >
                        {route.name}
                    </ListItemText>
                    
                </ListItem>
            ))}
                <ListItem className={classes.drawerItemEstimate} onClick={()=>{setOpenDrawer(false); setValue(5)}} divider button component={Link} to ='/estimate' selected={value===5}>
                    <ListItemText className={value === 5 ? `${classes.drawerItem} ${classes.drawerItemSelected}` : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                </ListItem>
            </List>
    )
}

export default ListContent

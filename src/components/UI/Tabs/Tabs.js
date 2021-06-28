import React, { useState, useEffect } from 'react'
import {  Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core'
import {Link} from 'react-router-dom';
import useStyles from './styles'
import logo from '../../../assets/logo.svg'
import Drawer from '../Drawer/Drawer'

function NavTabs({matches}) {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, newValue)=>{
        setValue(newValue)
    }

    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleMenuItemClick = (e, index)=>{
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(index)
    }

    const handleClose = ()=>{
        setAnchorEl(null);
        setOpen(false); 
    }

    const menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Development", link: "/website", activeIndex: 1, selectedIndex: 3}
    ];

    const routes=[
        {name:"Home", link:'/', activeIndex:0},
        {name:"Services", link:'/services',activeIndex:1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? 'true' : undefined, onMouseOver: (e)=>handleClick(e) },
        {name:"Revolution", link:'/revolution', activeIndex:2},
        {name:"About Us", link:'/about', activeIndex:3},
        {name:"Contact Us", link:'/contact', activeIndex:4}
    ]

    useEffect(()=>{

        [...menuOptions, ...routes, {name:'Free Estimate', link:'/estimate', activeIndex: 5}].forEach(route=>{
            switch(window.location.pathname){
                case route.link:
                    if(value !== route.activeIndex){
                        setValue(route.activeIndex);
                    }
                    if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                        setSelectedIndex(route.selectedIndex)
                    }
                    break;
                default:
                    break;
            }
            
        })
    },[value, menuOptions, routes, selectedIndex])


    return (
        <>
            <Button disableRipple component={Link} to='/'className={classes.logoContainer} onClick={()=>setValue(0)} >
                <img className={classes.image} src={logo} alt="COMPANY LOGO"/>
            </Button>
            {matches ? <Drawer value={value} setValue={setValue} routes={routes}/> : 
            <>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                {routes.map((route, index)=>(
                    <Tab 
                        key={index}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.onMouseOver}/>
                ))}
                </Tabs>
                <Button variant='contained' color='secondary' component={Link} to='/estimate' className={classes.btn} onClick={()=>setValue(5)}>Free Estimate</Button>
                <Menu 
                    id='simple-menu' 
                    anchorEl={anchorEl} 
                    open={open} 
                    onClose={handleClose} 
                    MenuListProps={{onMouseLeave: handleClose}}
                    classes={{paper: classes.menu}}
                    elevation={0}
                    keepMounted
                >
                   {menuOptions.map((option, i)=>(
                       <MenuItem 
                            key={i}
                            component={Link} 
                            to={option.link} 
                            classes={{root: classes.menuItem}}
                            onClick={(e)=>{handleMenuItemClick(e,i); setValue(1); handleClose() }}
                            selected={i === selectedIndex && value===1}
                        >
                            {option.name}
                        </MenuItem>
                   ))}

                </Menu>
            </>}   
        </>
    )
}

export default NavTabs

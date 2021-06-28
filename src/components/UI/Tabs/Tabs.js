import React, { useState, useEffect } from 'react'
import {  Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core'
import {Link} from 'react-router-dom';
import useStyles from './styles'
import logo from '../../../assets/logo.svg'


function NavTabs({matches}) {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value)=>{
        setValue(value)
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
        {name: "Services", link: "/services"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "Mobile App Development", link: "/mobileapps"},
        {name: "Website Development", link: "/website"}
    ];

    useEffect(()=>{

        switch(window.location.pathname){
            case '/':
                if(value !== 0){
                    setValue(0)
                }
                break;

            case '/services':
                if(value !== 1){
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;

            case '/customsoftware':
                if(value !== 1){
                    setValue(1)
                    setSelectedIndex(1);
                }
                break;

            case '/mobileapps':
                if(value !== 1){
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;

            case '/website':
                if(value !== 1){
                    setValue(1);
                    setSelectedIndex(3);

                }
                break;

            case '/revolution':
                if(value !== 2){
                    setValue(2)
                }
                break;
                
            case '/about':
                if(value !== 3){
                    setValue(3)
                }
                break;

            case '/contact':
                if(value !== 4){
                    setValue(4)
                }
                break;

            case '/estimate':
                if(value !== 5){
                    setValue(5)
                }
                break;

            default: 
                break;
            
        }
    },[value])


    return (
        <>
            <Button disableRipple component={Link} to='/'className={classes.logoContainer} onClick={()=>setValue(0)} >
                <img className={classes.image} src={logo} alt="COMPANY LOGO"/>
            </Button>
            {matches ? null : 
            <>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                    <Tab 
                        className={classes.tab} 
                        component={Link} 
                        to='/' 
                        label='Home'
                    />
                    <Tab 
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup = {anchorEl ? 'true' : undefined}
                        className={classes.tab} 
                        component={Link} 
                        to='/services' 
                        label='Services'
                        onMouseOver ={(e)=>handleClick(e)}

                    />
                    <Tab 
                        className={classes.tab} 
                        component={Link} 
                        to='/revolution' 
                        label='The Revolution'
                    />
                    <Tab 
                        className={classes.tab} 
                        component={Link} 
                        to='/about' 
                        label='About Us'
                    />
                    <Tab 
                        className={classes.tab} 
                        component={Link} 
                        to='/contact' 
                        label='Contact Us'
                    />  
                </Tabs>
                <Button variant='contained' color='secondary' component={Link} to='/estimate' className={classes.btn}>Free Estimate</Button>
                <Menu 
                    id='simple-menu' 
                    anchorEl={anchorEl} 
                    open={open} 
                    onClose={handleClose} 
                    MenuListProps={{onMouseLeave: handleClose}}
                    classes={{paper: classes.menu}}
                    elevation={0}
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

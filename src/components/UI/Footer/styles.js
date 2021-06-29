import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
    {
        footer: {
            backgroundColor: theme.palette.common.blue,
            width: '100%',
            zIndex: '1302',
            position: 'relative'
        },
        adornment:{
            width: '25em',
            verticalAlign: "bottom",
            [theme.breakpoints.down('md')]:{
                width: '21em'
            },
            [theme.breakpoints.down('xs')]:{
                width: '15em'
            }
        },
        mainContainer:{
            position: 'absolute'
        },
        link:{
            color: 'white',
            fontFamily: "Arial",
            fontSize: '0.75rem',
            fontWeight: 'bold',
            textDecoration: 'none'
        },
        gridItem:{
            margin: "3em"
        }
        
    }
))
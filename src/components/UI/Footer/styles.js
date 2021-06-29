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
            width: '22em',
            verticalAlign: "bottom",
            [theme.breakpoints.down('md')]:{
                width: '20em'
            },
            [theme.breakpoints.down('xs')]:{
                width: '12em'
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
        },
        icon:{
            height: '4em',
            width: '4em',
            [theme.breakpoints.down('xs')]: {
                height: '2em',
                width: '2em'
            }
        },
        socialContainer:{
            position: 'absolute',
            marginTop: '-6em',
            right: '1.5em',
            [theme.breakpoints.down('xs')]: {
                right:'0.6em'
            }
            
        }
    }
))
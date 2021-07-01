import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
    {
        serviceContainer:{
            marginTop: "12em",
            [theme.breakpoints.down('sm')]:{
                padding: 25
            }
        },
        learnBtnServices:{
            ...theme.typography.learnMore,
            fontSize: '0.7rem',
            padding: 10,
            height: 35,
            width: 110,
            [theme.breakpoints.down('sm')]:{
                marginBottom: '2em'
            }
        },
        specialText:{
            fontFamily: "Pacifico",
            color: theme.palette.common.orange
        },
        subtitle:{
            marginBottom:'0.7em'
        },
        img:{
            marginLeft: '2em',
            [theme.breakpoints.down('xs')]:{
                marginLeft:0
            }
        }
    }
))
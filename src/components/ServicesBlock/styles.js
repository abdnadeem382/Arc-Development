import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
    {
        serviceContainer:{
            marginTop: "12em" 
        },
        learnBtnServices:{
            ...theme.typography.learnMore,
            fontSize: '0.7rem',
            padding: 10,
            height: 35,
            width: 110
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
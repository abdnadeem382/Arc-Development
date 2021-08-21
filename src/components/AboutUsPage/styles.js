import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    rowContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft: '1.5em',
            paddingRight: '1.5em'
        }
    },
    missionStatement:{
        fontWeight: 400,
        fontSize: '1.5rem',
        maxWidth:"50em",
        lineHeight: 1.4,
        fontStyle:"italic",
        [theme.breakpoints.down('md')]:{
            maxWidth: "30em"
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: '1em',
            marginRight: '1em'
        }
    },
    topMargin:{
        marginTop: "5em"
    },
    avatar:{ 
        width: "15em",
        height: "15em"
    },
    historyImg:{
        maxHeight: '22em',
        [theme.breakpoints.down('md')]:{
            width: '20em'
        },
        [theme.breakpoints.down('sm')]:{
            width: '17em'
        }
    }
}))
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
        }
    },
    topMargin:{
        marginTop: "5em"
    },
    avatar:{ 
        width: "15em",
        height: "15em"
    }
}))
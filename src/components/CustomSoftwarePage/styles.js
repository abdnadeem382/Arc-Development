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
    heading:{
        maxWidth: '40em',

    },
    arrowContainer:{
        marginTop: '0.5em'
    },
    arrow:{
        "&:hover":{
            backgroundColor: "transparent"
        } 
    },
    itemContainer:{
        maxWidth: '40em'
    }
}))
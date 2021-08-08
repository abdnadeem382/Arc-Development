import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    mainContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em"
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
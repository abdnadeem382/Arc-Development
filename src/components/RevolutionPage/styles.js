import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=> ({
    rowContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft: '1.5em',
            paddingRight: '1.5em'
        }
    },

    topMargin: {
        marginTop: '2em'
    },

    visionImg: {
        marginRight: '5em',
        maxWidth: "40em",
        [theme.breakpoints.down('md')]:{
            marginRight: 0,
            marginBottom: "5em"
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth: "300px"
        }
    }
}))


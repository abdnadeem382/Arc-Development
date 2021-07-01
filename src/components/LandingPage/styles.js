import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
    {
        mainContainer:{
            marginTop: '5em',
            [theme.breakpoints.down('md')]: {
                marginTop: '3em'
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: '2em'
            },
        }
    }
))
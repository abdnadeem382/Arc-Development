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
        },

        heroTextContainer:{
            minWidth: '21.5em',
            marginLeft: '1em',
            [theme.breakpoints.down('xs')]: {
                marginLeft: 0
            },
        },

        animation:{
            maxWidth:'50em',
            minWidth:'21em',
            marginTop: '2em',
            marginLeft: '10%',
            [theme.breakpoints.down('sm')]: {
                maxWidth: '30em'
            },
        },
        estimateBtn:{
            ...theme.typography.estimate,
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 50,
            height: 45,
            width: 145,
            marginRight: 40,
            "&:hover":{
                backgroundColor: theme.palette.secondary.light
            } 
        },
        buttonContainer:{
            marginTop: '1em'
        },
        learnBtnHero:{
            ...theme.typography.learnMore,
            borderColor: theme.palette.common.blue,
            color: theme.palette.common.blue,
            fontSize: '0.9rem',
            height: 45,
            width: 145

        }
    }
))
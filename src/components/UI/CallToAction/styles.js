import { makeStyles } from "@material-ui/core";
import background from '../../../assets/background.jpg'
import mobileBackground from '../../../assets/mobileBackground.jpg'

export default makeStyles((theme)=>(
    {
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
        background:{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: "fixed",
            height: '60em',
            width:"100%",
            [theme.breakpoints.down('md')]:{
                backgroundImage: `url(${mobileBackground})`,
                backgroundAttachment: 'inherit'
            }   
        },
        estimateBtn:{
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 80,
            width: 205,
            backgroundColor: theme.palette.common.orange,
            fontSize: '1.5rem',
            marginRight: '5em',
            marginLeft: '2em',
            "&:hover":{
                backgroundColor: theme.palette.secondary.light
            },
            [theme.breakpoints.down('sm')]:{
                marginRight: 0,
                marginLeft: 0,
                marginTop: '2em'
            }
        }

    }
))
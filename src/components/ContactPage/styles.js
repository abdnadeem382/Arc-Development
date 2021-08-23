import { makeStyles } from "@material-ui/core";
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

export default makeStyles((theme)=>(
    {
      background: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '60em',
        width:"100%",
        marginTop: '-1em',
        paddingBottom: '10em',
        [theme.breakpoints.down('md')]:{
          backgroundImage: `url(${mobileBackground})`,
          marginTop: 0
        }
      },

      blueText:{
          color: theme.palette.common.blue
      },

      labelText:{
          fontSize: '1rem'
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
        [theme.breakpoints.down('md')]:{
            marginRight: 0,
            marginLeft: 0,
            marginTop: '2em'
        }
      },

      learnBtnServices:{
        ...theme.typography.learnMore,
        fontSize: '0.7rem',
        padding: 10,
        height: 35,
        width: 110,
        [theme.breakpoints.down('md')]:{
            marginBottom: '2em'
        }
      },

      message:{
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5 
      },

      sendBtn:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        "&:hover":{
          backgroundColor: theme.palette.secondary.light
        }
      },

      textfields:{
        marginBottom: '0.8em'
      },

      contactGrid:{
        [theme.breakpoints.down('md')]:{
          marginBottom: '5em',
          marginTop: '5em'
        },
        [theme.breakpoints.down('sm')]:{
          marginTop: '1em'
        },
      },

      links:{
        textDecoration: 'none',
        color: 'inherit'
      }
    
    }
))
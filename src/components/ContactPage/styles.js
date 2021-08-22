import { makeStyles } from "@material-ui/core";
import background from '../../assets/background.jpg'

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
        paddingBottom: '10em'
      } ,
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
        [theme.breakpoints.down('sm')]:{
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
        [theme.breakpoints.down('sm')]:{
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
      }
    
    }
))
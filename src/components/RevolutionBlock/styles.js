import { makeStyles } from "@material-ui/core";
import revBackground from '../../assets/repeatingBackground.svg'

export default makeStyles((theme)=>(
    {
        
        learnBtnHero:{
            ...theme.typography.learnMore,
            borderColor: theme.palette.common.blue,
            color: theme.palette.common.blue,
            fontSize: '0.9rem',
            height: 45,
            width: 145
        },
        revBackground:{
            backgroundImage: `url(${revBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
            width:"100%"
        },
        revCard:{
            position: 'absolute',
            borderRadius: 15,
            padding: '10em',
            [theme.breakpoints.down('sm')]:{
                paddingTop: '8em',
                paddingBottom: '8em',
                paddingLeft: 0,
                paddingRight: 0,
                borderRadius: 0,
                width: '100%'
            }
        },
        revContainer:{
            height:'100em', 
            marginTop: "12em"
        }
       
    }
))
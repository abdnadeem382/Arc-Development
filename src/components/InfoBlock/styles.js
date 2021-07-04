import { makeStyles } from "@material-ui/core";
import infoBackground from '../../assets/infoBackground.svg'

export default makeStyles((theme)=>(
    {
        infoBackground:{
            backgroundImage: `url(${infoBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
            width:"100%"
        },
        learnBtnAboutUs:{
            ...theme.typography.learnMore,
            borderColor: 'white',
            color: 'white',
            fontSize: '0.7rem',
            padding: 10,
            height: 35,
            width: 110,
            [theme.breakpoints.down('sm')]:{
                marginBottom: '2em'
            }
        }
    }
))
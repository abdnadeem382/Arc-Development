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
        marginTop: '-1em'
      } ,
      blueText:{
          color: theme.palette.common.blue
      },
      labelText:{
          fontSize: '1rem'
      } 
    }
))
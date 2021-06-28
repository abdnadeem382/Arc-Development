import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>(
    {
        
        tabContainer:{
            marginLeft: 'auto'
        },
        image:{
            height: "7.7em",
            [theme.breakpoints.down('md')]: {
                height: '7em'
            },
            [theme.breakpoints.down('xs')]:{
                height: '5.7em'
            }
        },
        logoContainer:{
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        tab:{
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px"
        },
        btn:{
            ...theme.typography.estimate,
            borderRadius:'50px',
            marginLeft: "50px",
            marginRight: '25px',
            height: '45px',
        },
        menu:{
            backgroundColor: theme.palette.common.blue,
            color:'white'
        },
        menuItem:{
            ...theme.typography.tab,
            opacity: 0.7,
            "&:hover":{
                opacity: 1
            }
        }
    }
))

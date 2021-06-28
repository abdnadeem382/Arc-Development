import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
    {
        drawerIcon: {
            height: '50px',
            width: '50px'
        },

        drawerIconContainer: {
           "&:hover": {
               backgroundColor: "transparent"
           },
           marginLeft: 'auto'
       },
       drawer: {
           backgroundColor: theme.palette.common.blue
       }
    }
))
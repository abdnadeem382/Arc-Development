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
       },
       toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]:{
            marginBottom: '2em'
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom: '1.25em'
        }
    },
    }
))
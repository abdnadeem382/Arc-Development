import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>(
    {
        drawerItem: {
            ...theme.typography.tab,
            color: "white",
            opacity: 0.7
        },
        drawerItemEstimate:{
            backgroundColor: theme.palette.common.orange
        },
        drawerItemSelected:{
            opacity: 1
        }
    }
))
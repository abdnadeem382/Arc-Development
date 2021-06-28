import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>(
    {
        toolbarMargin:{
            ...theme.mixins.toolbar,
            marginBottom: '3em',
            [theme.breakpoints.down('md')]:{
                marginBottom: '2em'
            },
            [theme.breakpoints.down('xs')]:{
                marginBottom: '1.25em'
            }
        }
    }
))
import {createMuiTheme} from '@material-ui/core/styles';
const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcGrey = "#868686"
export default createMuiTheme({
    palette:{
        common:{
            blue: arcBlue,
            orange: arcOrange,
        },
        primary:{
            main: arcBlue
        },
        secondary:{
            main: arcOrange
        }
    },
    typography:{
        tab:{
            fontFamily:"Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize:'1rem',
        },
        estimate:{
            fontFamily: "Pacifico",
            fontSize:'1rem',
            textTransform: 'none',
            color: 'white'
        },
        h2:{
            fontFamily: "Raleway",
            fontWeight:700,
            fontSize:'2.5rem',
            color:arcBlue,
            lineHeight: 1.3
        },
        h3:{
            fontFamily:"Pacifico",
            fontSize:'2.5rem',
            color: arcBlue
        },
        h4:{
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: arcBlue,
            fontWeight: 700
        },
        subtitle1:{
            fontFamily: 'Roboto',
            fontSize: '1.25rem',
            fontWeight: 300,
            color: arcGrey
        },
        subtitle2:{
            fontSize: '1.25rem',
            fontWeight: 300,
            color: "white"
        },
        body2:{
            fontSize: '1.25rem',
            color: arcGrey,
            fontWeight: 300
        },
        learnMore:{
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            borderRadius: 50,
            textTransform: 'none',
            fontFamily: 'Roboto',
            fontWeight: 'bold', 
        }
    },
    overrides:{
        MuiInputLabel:{
            root:{
                color: arcBlue,
                fontSize: '1rem'
            }
        },
        MuiInput:{
            root:{
                color: arcGrey,
                fontWeight: 300
            },
            underline:{
                "&:before":{
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        }
    }
})
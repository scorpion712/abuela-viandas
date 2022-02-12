import { Theme } from "@mui/material";
import { amber, green, indigo, orange, purple, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles"; 

const useStyles = makeStyles ((theme: Theme) => ({
    // layout
    navbar: {
        backgroundColor: green[400],
        '& a': {
            color: green[300],
            marginLeft: '2rem',
        },
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: "bold",
        color: "#F0F4Fb"
    },
    main: {
        minHeight: '80vh'
    }, 
    footer: {
        textAlign: 'center'
    },
    // table
    tableToolBar: {
        backgroundColor: green[300],
        color: "#FFF"
    }, 
    tableFoot: { 
        backgroundColor: green[200],
        fontSize: '1rem',
        // inherits
        '& p':{
            fontSize: '1rem',
        },
        '& div': { 
            fontSize: '1rem',
        }
    },
    // icons
    filterIcon: {
        color: "#c6ff00",
    },
    editIcon: {
        color: indigo[400],
    },
    deleteIcon: {
        color: red[400],
    }
}));

export default useStyles;
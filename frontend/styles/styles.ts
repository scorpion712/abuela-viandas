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
    // searcher
    searchText:{
        marginTop: '.5rem',
        marginBottom: '.5rem',
        '& fieldset': {
            borderColor: "#F00"
        }
    },
    // table
    toolTipFilter:{
        padding:0,
    },
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
    tableHead:{
        fontSize: '1.3rem',
        fontWeight:'900',
    },
    tableBody:{
        fontSize: '1.2rem', 
    },
    // icons
    filterIcon: {
        color: "#c6ff00",
    },
    
    editIcon: {
        color: indigo[400],
    },
    genericTable:{
        marginLeft: "1.6rem"
    },
    deleteIcon: {
        color: red[400]
    },
    gridWeekDay: { 
        border: 'solid', 
        borderColor: '#000', 
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center', 
        padding: '1rem', 
        justifyContent: 'center'
    },
    // cart
    cartTitle: {
        marginLeft: "3rem",
        alignItems: "center",
        alignContent: "center",
    },
    cartItemsList: { 
        display: "flex",
    },
    cartItemListText: {
        textAlign: 'right',
    },
    cartButtonGroup: {
        display: "grid",
        gridTemplateColumns: "1.5rem 1.5rem",
        marginLeft: "1rem",
    }, 
    cartPurchaseButton : {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        '& Button': { 
            backgroundColor: orange[600],
            color: "#0A0A0A",
            fontWeight: 'bold',
            fontSize: '1.3rem',
        }
    },
    // cart item icons
    addCircleIcon: {
        color: green[700],
    },
    removeCircleIcon: {
        color: red[600],
    },
    deleteCircleIcon: {
        color: red[900],
    },
}));

export default useStyles;
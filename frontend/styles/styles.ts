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
        textAlign: 'center',
        backgroundColor: green[300],
        color: "#F0F4Fb",
        minWidth: '100%',
        bottom: 0,
    },
    // searcher
    searchText:{
        marginTop: '.5rem',
        marginBottom: '.5rem'
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
    // carousel
    slide: { 
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        transform: 'scale(1,0.8)',
        transition: 'transform 300ms',
        opacity: '0.5',
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
        textAlign: "center",
        display: "grid",
        marginTop: '1rem',  
    },
    activeSlide: { 
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
        display: "grid",
        transform: 'scale(1.3,1)',
        opacity: 1
    },
    // week day
    weekDay: { 
        alignContent: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#F0F4Fb",
        border: "3px solid #399e3D",
        backgroundColor: "#388e3c",
        marginBottom: '.5rem'
    },
    weekDayTitle: {
        fontSize: '3rem'
    },
    // cards
    qtyInput: { 
        minWidth: '4.7rem',
        marginTop: '.7rem',
        '& input': {
            paddingTop: '1rem',
            paddingBottom: '.6rem',
            paddingLeft: '0',
            paddingRight: '.3rem',  
            marginLeft: '0',
            textAlign: 'end',
            letterSpacing: '1px',
            width: '150px',
            cursor: 'pointer'
        },
    },
    cardTitle: {
        fontWeight: '420'
     },
    cardProductPrice: {
        marginLeft: '.3rem',
        marginTop: ".1rem",
        marginBottom: ".1rem",
        paddingTop: '1rem',
        paddingBottom: '1rem',
        fontSize: '1.65rem',
        fontWeight: 'normal',
        fontFamily: "Roboto"
    },
    cardDescriptionTitle: {
        textAlign: 'center',
        fontFamily:"Roboto",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    // login
    loginForm: { 
        maxWidth: '800px',
        margin: '0 auto',
    }
}));

export default useStyles;
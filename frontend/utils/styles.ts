import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles ((theme: Theme) => ({
    navbar: {
        backgroundColor: '#1e8449',
        '& a': {
            color: '#03BD41',
            marginLeft: '2rem',
        },
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: 700,
        color: "#F0F4Fb"
    },
    main: {
        minHeight: '80vh'
    }, 
    footer: {
        textAlign: 'center'
    }
}));

export default useStyles;
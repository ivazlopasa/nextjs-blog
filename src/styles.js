import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    containerLayout: {
        maxWidth: "100%",
        padding: "0 16px",
        margin: "20px auto 96px"
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    backToHome: {
        margin: "3rem 0 0"
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    buttons: {
        marginTop: "40px"
    },
    cardGrid: {
        padding: "20px 0"
    },
    card:{
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardContent:{
        flexGrow: 1
    },
    about: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    aboutText: {
        padding: "15px",
        textAlign: "center"
    }
    
})
);

export default useStyles;
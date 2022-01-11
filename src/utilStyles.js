import { makeStyles } from "@material-ui/core/styles";


const useStyles2 = makeStyles(() => ({
    container: {
        paddingTop: "30px"
    },
    heading2Xl: {
        fontSize: "40px",
        lineHeight: "1.2",
        fontWeight: "800",
        margin: "16px 0"
    },
    headingXl: {
        fontSize: "32px",
        lineHeight: "1.3",
        fontWeight: "800",
        margin: "16px 0"
    }, 
    headingLg: {
        fontSize: "24px",
        lineHeight: "1.4",
        margin: "16px 0"
    },
    headingMd: {
        fontSize: "19px",
        lineHeight: "1.5"
    },
    borderCircle: {
        borderRadius: "9999px"
    },
    colorInherit: {
        color: "inherit"
    },
    padding1px: {
        paddingTop: "1px"
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0
    },
    listItem: {
        margin: "0 0 20px"
    },
    lightText: {
        color: "#666"
    },
    link: {
        display: "flex",
        paddingTop: "20px"
    },
    button: {
        display: "flex",
        marginRight: "10px"
    },
    buttonBox: {
        marginTop: "20px",
    },
})
);

export default useStyles2;
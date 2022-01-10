import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
palette: {
    spacing: 2, 
    primary: {
        main: "#E59400",
    },
    secondary: {
        main: '#196aff',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#fff',
    }
},
});

export default theme;
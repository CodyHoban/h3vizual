import { createTheme } from '@material-ui/core/styles'

const arcBlue = "#5B72B9"
const arcOrange = "#FFBA60"

const theme = createTheme({

    palette: {
        common: { 
            arcBlue: "#5B72B9",
            arcOrgange: "#FFBA60"
        },
        primary: { 
            main: `${arcBlue}`
        },
        secondary: { 
            main: `${arcOrange}`
        },
    },
    typography: { 
        tab: { 
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: { 
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        }
    }

});

export default theme;
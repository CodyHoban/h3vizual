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
        background: {
            default: "#EAE7D6",
          }
    }
});

export default theme;
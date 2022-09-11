import {createTheme} from '@mui/material';

export default function getThemeOptions(darkMode){

    return createTheme({
        palette: {
            mode: (darkMode ? 'dark' : 'light'),
            primary: {
                main: (darkMode ? '#1cdeca' : '#0052d8'),
                hover: (darkMode ? '#109081' : '#00338A')
            },
            secondary: {
                main: (darkMode ? '#3A414B' : '#767473')
            },
            text: {
                primary: (darkMode ? '#FFFFFF' : '#000000')
            },
            textOpposite: {
                primary: (darkMode ? '#000000' : '#FFFFFF')
            },
            background: {
                default: (darkMode ? '#1D2025' : '#FFFFFF'),
                paper: (darkMode ? '#3A414B' : '#d0cfcc'),
            },
            divider: (darkMode ? '#243b53' : '#0052d8'),
            scrollbar: {
                hover: (darkMode ? '#109081' : '#00338A'),
            },
            shadow: {
                main: (darkMode ? '#0C6A60' : '#0058EF')
            },
            border: {
                main: (darkMode ? '#1CDECA' : '#0052D8')
            },
            hover: {
                main: (darkMode ? '#56636F' : '#9D9C99')
            },
            splash: (darkMode
                ? ['#15AB9B', '#0B5E55', '#548CC5', '#095147', '#1CDECA', '#44719F']
                : ['#0052d8', '#0060FF', '#15AB9B', '#388499', '#0013A3', '#3D4F73']
            )
        },
        typography: {
            fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1000,
                lg: 1200,
                xl: 1536,
            }
        }
    });
}

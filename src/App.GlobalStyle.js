import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    custom:{
      pink:'#F4B3CF',
      pink25: 'rgba(244, 179, 207, .25)',
      red:'#D65375',
      yellow:'#F0E930',
      blue:'#A6DFF4',
      grey: '#CED2DD',
      darkgrey: '#211E1F',
      darkgrey25:'rgba(33,30,31, .25)',
      darkblue: '#4BBFE9'
    }
  },
  typography:{
    headerFont:{
      fontFamily: [
        'Lato',
        'sans-serif'
      ].join(','),
    },
    bodyFont: {
      fontFamily: [
        'Raleway',
        'sans-serif'
      ].join(",")
    },
    logoFont:{
      fontFamily:[
        'Erica One', 'cursive'
      ].join(",")
    },
    largeTitle:{
      fontFamily: [
        'Lato',
        'sans-serif'
      ].join(','),
      marginBottom:1,
      fontWeight: 900,
      fontSize: 80,
      color: '#211E1F'
    }
  },
  components: {
     MuiButton: {
      styleOverrides: {
        contained:{
          backgroundColor: '#D65375',
          typography: 'Raleway',
          fontWeight:700,
          '&:hover': {
            backgroundColor: '#F4B3CF',
            color: 'white'
          }
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root:{
        },
        paper:{
          backgroundColor: 'white',
        },
        list:{
          backgroundColor: 'white',
          padding:'5px',
          border:'none',

        },
      },
    },
  }
});

export default theme;

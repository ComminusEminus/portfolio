import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    custom:{
      pink:'#F4B3CF', //rgba(244, 179, 207)
      pink25: 'rgba(244, 179, 207, .25)',
      red:'#D65375',
      yellow:'#F0E930',
      blue:'#A6DFF4',//rgba(166,223,244, 1)
      grey: '#CED2DD',
      darkgrey: '#211E1F',
      darkblue: '#4BBFE9' //rgba(75, 191, 233, 1)
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
        'Lobster', 'cursive'
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
/*<Button type = 'submit' variant = 'contained' sx = {{typography:'headerFont', bgcolor: 'custom.red', color:'custom.offWhite', fontWeight:700, fontSize: 20}}>Submit</Button>*/
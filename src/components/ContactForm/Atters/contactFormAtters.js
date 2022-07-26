const contactFormAtters ={
  contentBox:{
    sx : {
      display: 'flex',
      flexDirection:{xs:'row', lg:'row'},
      justifyContent: {xs:'center', lg:'center'},
      alignItems: {xs:'center', lg:'center'},
      width: '100%',
      height: {xs:'auto',md:'auto',lg:'auto'},
      mb:2,
      py: { xs: 15, md: 15, lg: 0 },
      px: 10,
      boxSizing: 'border-box'
    }
  },
  borderBox:{
    sx: {
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      justifyContent: { xs: 'center', lg: 'center' },
      alignItems: { xs: 'center', lg: 'center' },
      width: {xs:'100%',lg:'70%'},
      height: { xs: 'auto', md: 'auto', lg: 'auto' },
      py:{xs:5,lg:3},
      border:10,
      borderRadius: 10,
      boxSizing:'border-box'
    }
  },
  formFieldBox:{
    sx : {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height:'100%',

    }
  },
  formBox:{
    sx : {
      display: 'inline-flex',
      flexDirection:'column',
      justifyContent: 'baseline',
      alignItems: 'center',
      width: '100%',
      border:1,
      p:{xs: 10, lg:0},
      px:{md:10},
      py:{md:2},
      boxSizing:'border-box',


    }
  },
  titleBox:{
    sx:{
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: {xs: 'flex-start', lg:'center'},
      width: {xs:'100%', md:'100%', lg:'55%'},
      height:'100%',
      
      px:{xs:10,md:10,lg:5},

      boxSizing:'border-box'
    }
  },
  inputProps:{
    sx: {

      height:{
        xs:'auto',
        lg:'auto'
      },
      fontSize:{
        xs:40,
        lg:15
      },
      display:'flex',
      alignItems:'flex-start'
    }
  },
  inputLabelProps:{
    sx: {

      fontSize:{
        xs:30,
        md:30,
        lg:15,
      },
      fontWeight:{
        xs:500,
        lg:400
      },
    }
  },
  inputTextFieldProps:{
    width: '100%',

    my:1,

  },
  messageInputProps:{
    sx: {
      height:{
        xs:'20vh',
        lg:'10vh'
      },
      fontSize:{
        xs:50,
        lg:15
      },
      display:'flex',
      alignItems:'flex-start',

    }
  },
  submitFormButton:{
    variant: 'contained',
    sx: {
      alignSelf:'flex-end',
      fontSize:{xs:40,md:40, lg:15},
      my:3
    }
  },
  titleText:{
    variant: 'headerFont',
    sx:{
      mb:4,
      fontWeight: 800,
      fontSize: {xs:60, lg:45},
      color: 'custom.darkgrey'
    }
  },
  subTitle:{
    variant: 'bodyFont',
     sx:{
       fontWeight: 500,
       fontSize: {xs: 30 ,md:25, lg:15},
       color: 'custom.darkgrey'
     }
  },
}

export default contactFormAtters;

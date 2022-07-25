const contactFormAtters ={
  contentBox:{
    sx : {
      display: 'flex',
      flexDirection:{xs:'column', lg:'row'},
      justifyContent: {xs:'center', lg:'center'},
      alignItems: {xs:'center', lg:'stretch'},
      width: '100%',
      minHeight: '60vh',

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

      p:{xs: 10, lg:30},
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
      alignItems: {xs: 'flex-start', lg:'flex-start'},
      width: '100%',

      p:10,

      boxSizing:'border-box'
    }
  },
  inputProps:{
    sx: {
      height:{
        xs:'4vh',
        lg:'auto'
      },
      fontSize:{
        xs:30,
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
        lg:15,
        md:20
      },
      fontWeight:{
        xs:500,
        lg:400
      },
    }
  },
  inputTextFieldProps:{
    width: '100%',
    bgcolor: 'white',
    borderRadius: 2,
    my:1
  },
  messageInputProps:{
    sx: {
      height:{
        xs:'10vh',
        lg:'10vh'
      },
      fontSize:{
        xs:30,
        lg:15
      },
      display:'flex',
      alignItems:'flex-start'
    }
  },
  submitFormButton:{
    variant: 'contained',
    sx: {
      fontSize:{xs:30,md:20, lg:15},
      my:3
    }
  },
  titleText:{
    variant: 'headerFont',
    sx:{
      mb:1,
      fontWeight: 900,
      fontSize:{xs:85,lg:80},
      color: 'custom.darkgrey'
    }
  },
  subTitle:{
    variant: 'bodyFont',
     sx:{
       fontWeight: 500,
       fontSize: {xs: 30 ,md:25, lg:18},
       color: 'custom.darkgrey'
     }
  },
}

export default contactFormAtters;

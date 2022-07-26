const contactFormAtters ={
  contentBox:{
    sx : {
      display: 'flex',
      flexDirection:{xs:'column', lg:'row'},
      justifyContent: {xs:'center', lg:'center'},
      alignItems: {xs:'center', lg:'center'},
      width: '100%',
      height: '70vh',
      pb:{xs:5, md:5, lg:0},


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
      width: {xs:'100$', md:'100$', lg:'50%'},
      height:'100%',

      px:{xs:10,md:10,lg:15},

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

    my:1,

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
      alignItems:'flex-start',

    }
  },
  submitFormButton:{
    variant: 'contained',
    sx: {
      alignSelf:'flex-end',
      fontSize:{xs:30,md:20, lg:15},
      my:3
    }
  },
  titleText:{
    variant: 'headerFont',
    sx:{
      mb:1,
      fontWeight: 900,
      fontSize:{xs:85,lg:60},
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

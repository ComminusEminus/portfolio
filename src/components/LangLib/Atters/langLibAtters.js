const langLibAtters = {
  //{xs:'',lg:''}
  containerBox:{
      sx:{
        display:'flex',
        flexDirection:{xs:'column',lg:'row'},
        justifyContent:{xs:'flex-start',lg:'center'},
        alignItems: 'center',

        minHeight:'80vh',
        width:'100%',
        p:{xs:10, lg:10}
      }
  },
  titleText:{
    variant: "headerFont",
    sx:{
      mb:4,
      fontWeight: 300,
      fontSize: {xs:60, lg:50},
      color: 'custom.darkgrey'
    }
  },
  subTitleText:{
    variant: "bodyFont",
    sx:{
      textAlign:'start',
      fontWeight: 400,
      fontSize: {xs: 30 ,md: 25, lg:18},
      color: 'custom.darkgrey'
    }
  },
  imgTitleText:{
    variant: "bodyFont",
    sx:{
      fontWeight: 700,
      fontSize: {xs:25,md:20,lg:12},
      color: 'custom.grey'
    }
  },
  titleBox:{
    sx:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'flex-start',
      mb:{xs: 6,lg:0},
      width:{xs:'100%',lg:'60%'},
      height:'100%',

    }
  },
  paperCard:{
    elevation: 5,
    sx:{
      borderRadius: 2,
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      width:{xs:'80%',lg:'80%'},
      height:'60%',
      p:3,
      boxSizing:'border-box'


    }
  },
  imgBox:{
    sx:{
      width:'auto',
      height:'auto',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems: 'center'
    }
  },
  mapLibBox:{
    height:'100%',
    width:'40%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    px:10,



  }
}

export default langLibAtters

const langLibAtters = {
  container:{
      sx:{
        width:'100%',
        display:'flex',
        flexDirection:{xs: 'column', lg:'column'},
        justifyContent:{xs: 'center', lg:'center'},
        alignItems: {xs: 'flex-start', lg:'center'},
        px:{xs:10, lg:10},
        py:15,
        pt:{md:2},
        pb:{md:20},

      }
  },
  textContainer: {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: { md: 'flex-start', lg: 'flex-start' },
      width: { xs: '100%', lg: '70%' },
      height: 'auto',

    }
  },
  titleText:{
    variant: "headerFont",
    sx:{
      mb:4,
      fontWeight: 800,
      fontSize: {xs:50, lg:35},
      color: 'custom.darkgrey'
    }
  },
  subTitleText:{
    variant: "bodyFont",
    sx:{
      textAlign:'start',
      fontWeight: 400,
      fontSize: {xs: 30 ,md: 45, lg:15},
      color: 'custom.darkgrey'
    }
  },
  imgTitleText:{
    variant: "bodyFont",
    sx:{
      fontWeight: 900,
      fontSize: {xs:25,md:25,lg:15},
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
    border:1



  }
}

export default langLibAtters

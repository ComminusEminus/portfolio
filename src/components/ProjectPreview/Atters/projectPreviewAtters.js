const projectPreviewAtters = {
  container:{
    sx : {
      width:'100%',
      display:'flex',
      flexDirection:{xs: 'column', lg:'column'},
      justifyContent:{xs: 'center', lg:'center'},
      alignItems: {xs: 'flex-start', lg:'center'},
      px:{xs:10, lg:15},
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
  mapProjectBox:{
    sx:{
      width:{xs:'100%',lg:'70%'},
      height:'100%',
      display:'flex',
      flexDirection:{xs:'column', md:'column',lg:'row'},
      justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' },
      alignItems: 'center'
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
  paperCard:{
    elevation: 5,
    sx:{
      p:{xs:2,md:4,lg:2},
      mx: {xs:0,md:0,lg:2},
      my: {xs:2,md:2,lg:0},
      borderRadius: 5,
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems: 'flex-start',
      width:{xs: '100%',lg:'40%'},
      height:'20vh',
    }
  },
  cardTitleBox:{
    sx:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: { xs: '100%', lg: '100%' },
      height: '100%',
    }
  },
  cardDescriptionBox: {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: { xs: '100%', lg: '100%' },
      height: '100%',
    }
  },
  cardButtonBox: {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: { xs: '100%', lg: '100%' },
      height: '100%',
    }
  },
  projectCardTitleText:{
    variant: "bodyFont",
    sx:{
      fontSize: {xs: 45, lg:30},
      fontWeight: 400,
      mb:1,
      color: 'custom.darkblue'
    }
  },
  projectCardDescriptionText:{
    variant: "bodyFont",
    sx:{
      fontWeight: 500,
      fontSize: {xs: 30,md:35, lg:14},
      color: 'custom.darkgrey'
    }
  },
  projectGitHubButton:{
    sx:{
      typography: 'headerFont',
      color: 'custom.darkblue',
      fontWeight:800,
      fontFamily: 'bodyFont',
      fontSize:{xs:40,md:40, lg:15},

    }
  },
  projectDetailsButton:{
    variant: "contained",
    sx:{
      alignSelf:'flex-end',
      fontSize:{xs:30,md:35, lg:15},
      mt:{md:5,lg:2}
    },
  },
}

export default projectPreviewAtters

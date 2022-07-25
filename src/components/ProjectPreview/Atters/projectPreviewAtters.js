const projectPreviewAtters = {
  containerBox:{
    sx : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: {xs: 'space-around',lg:'space-between'},
      alignItems: 'center',
      width: '100%',
      minHeight: {xs:'50vh',lg:'60vh'},
      p:10,

    }
  },
  titleBox:{
    sx:{
      width:'100%',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center'
    }
  },
  mapProjectBox:{
    sx:{
      width:'100%',
      height:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center'
    }
  },
  projectButtonsBox:{
    sx:{
      width:'100%',
      height:'50%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems: 'center',
      mt:3,
      mb:1,

    }
  },
  paperCard:{
    elevation: 5,
    sx:{
      p:{xs:2,md:4,lg:3},
      m:2,
      borderRadius: 5,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'flex-start',
      width:{xs: '90%',lg:'25%'},
      height:'auto',
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
  projectCardTitleText:{
    variant: "headerFont",
    sx:{
      fontSize: {xs: 45, lg:30},
      fontWeight: 400,
      mb:2,
      color: 'custom.darkgrey'
    }
  },
  projectCardDescriptionText:{
    variant: "bodyFont",
    sx:{
      fontWeight: 500,
      fontSize: {xs: 30,md:20, lg:15},
      color: 'custom.darkgrey'
    }
  },
  projectGitHubButton:{
    sx:{
      typography: 'headerFont',
      color: 'custom.darkblue',
      fontWeight:800,
      fontFamily: 'bodyFont',
      fontSize:{xs:30,md:25, lg:15},
    }
  },
  projectDetailsButton:{
    variant: "contained",
    sx:{
      fontSize:{xs:30,md:20, lg:15}
    }
  },
}

export default projectPreviewAtters

const skillsAtters = {
  container:{
    width:'100%',
    display:'flex',
    flexDirection:{xs: 'column', lg:'column'},
    justifyContent:{xs: 'center', lg:'center'},
    alignItems: {xs: 'flex-start', lg:'center'},
    px:{xs:10, lg:15},
    py:15,
    pt:{md:2},
    pb:{md:20},

  },
  mapContainer:{
    width:{xs: '100%',lg:'100%'},
    display:'flex',
    flexDirection:{xs: 'column',md:"column", lg:'row'},
    justifyContent:{xs: 'space-between',md:'flex-start',lg:'space-between'},
    alignItems: {xs: 'center',lg:'center'},
    px:{xs: 1,lg:0},
  },
  titleText:{
    variant: "headerFont",
    sx:{
      fontWeight: 800,
      fontSize: {xs:50, lg:35},
      color: 'custom.darkgrey',
      mb:{xs:10,md:10,lg:4}
    }
  },
  cardtitle:{
    variant: 'bodyFont',
    sx:{
      texAlign:{xs:'center', lg:'start'},
      mb:0,
      fontWeight: 700,
      fontSize: {xs: 35, md:35,lg:18},
      color: 'custom.darkgrey'
    }
  },
  cardcontent:{
    variant: 'bodyFont',
    sx:{
      textAlign:'start',
      fontWeight: 400,
      fontSize: {xs: 35 ,md:35, lg:15},
      color: 'custom.darkgrey'
    }
  },
  paperCard:{
    elevation: 5,
    sx:{
      borderRadius: 2,
      display:'flex',
      flexDirection:'column',
      justifyContent:{xs:'space-around', md:'flex-start',lg:'space-between'},
      alignItems: 'center',
      width:{xs: '90%',md:"100%",lg:'22%'},
      height:{xs:'auto',md:'auto',lg:'30vh'},
      mb:{md:5,lg:0},
      pb:{xs:5, lg:4},
    }
  },
  imgBox:{
    sx:{
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      bgcolor:'custom.blue'
    }
  },
  skillContentBox:{

    width:'100%',
    height:'50%',
    display:'flex',
    px:5,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
  },
}

export default skillsAtters

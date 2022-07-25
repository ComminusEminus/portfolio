const skillsAtters = {
  titleText:{
    variant: "headerFont",
    sx:{
      mb:4,
      fontWeight: 300,
      fontSize: {xs:60, lg:50},
      color: 'custom.darkgrey',
      order:{xs:0, lg:1},
      mb:{xs: 10,lg:0},
    }
  },
  cardtitle:{
    variant: 'bodyFont',
    sx:{
      texAlign:{xs:'center', lg:'start'},
      mb:2,
      fontWeight: 600,
      fontSize: {xs: 32, md:25,lg:20},
      color: 'custom.darkgrey'
    }
  },
  cardcontent:{
    variant: 'bodyFont',
    sx:{
      textAlign:'start',
      fontWeight: 400,
      fontSize: {xs: 30 ,md:20, lg:15},
      color: 'custom.darkgrey'
    }
  },
  paperCard:{
    elevation: 5,
    sx:{

      m:2,
      borderRadius: 5,
      display:'flex',
      flexDirection:'column',
      justifyContent:{xs:'space-around', md:'flex-start',lg:'space-around'},
      alignItems: 'center',
      width:{xs: '90%',md:"45%",lg:'40%'},
      height:{xs:'auto',md:'50vw',lg:'25vh'},
      px:{xs:5, lg:3},
      py:3
    }
  },
  imgBox:{
    sx:{
      width:'100%',
      height:'50%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems: 'center'
    }
  },
  skillContentBox:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  contentBox:{
    width:'100%',
    display:'flex',

    flexDirection:{xs: 'column', lg:'row'},
    justifyContent:{xs: 'center', lg:'flex-start'},
    alignItems: {xs: 'flex-start', lg:'center'},
    px:10,
    py:20,
    pt:{md:2},
    pb:{md:20},

  },
  mapSkillsBox:{
    order:{xs:1, lg:0},
    width:{xs: '100%',lg:'60%'},
    display:'flex',
    flexDirection:{xs: 'column',md:"row", lg:'row'},
    justifyContent:{xs: 'space-between',md:'flex-start',lg:'flex-start'},
    alignItems: {xs: 'center',lg:'center'},
    px:{xs: 1,lg:10},
    flexWrap: 'wrap',


  }
}

export default skillsAtters

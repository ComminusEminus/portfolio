const heroAtters = {
  container: {
    sx : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: {xs:'flex-start',md:'flex-start',lg:'center'},
      alignItems: 'stretch ',
      width:'100%',
      height: '50vh',
      bgcolor: 'white',
      px:{xs:2,md:10,lg:15},
      mt:{xs:5,md:5,lg:8},

    }
  },
  textContainer:{
    sx : {
      display: 'flex',
      justifyContent: {xs:'flex-start',md:'flex-start',lg:'center'},
      alignItems: 'center',
      width: {xs:'100%',lg:'50%'},
      height:'100%',



    }
  },
  titleText:{
    variant: 'logoFont',
    sx:{
      mb:1,
      fontWeight: 300,
      fontSize:{xs:80,lg:70},
      color: 'custom.darkgrey',
    }
  },
  subtitleText:{
    variant: 'bodyFont',
     sx:{
       fontWeight: 400,
       fontSize: {xs: 30 ,md:25, lg:18},
       color: 'custom.darkgrey'
     }
  },
  heroLogoAtters:{
    sx:{
      mx:2,
      color: 'custom.red',
      fontSize: {xs:150,lg:120},
    }
  },
}

export default heroAtters;

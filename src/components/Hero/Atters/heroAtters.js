const heroAtters = {
  container: {
    sx : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch ',
      width:'100%',
      height: '50vh',
      bgcolor: 'custom.pink25',
      px:{xs:2,md:10,lg:15},
      mt:{xs:5,md:5,lg:8},
    }
  },
  textContainer:{
    sx : {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: {xs:'100%',lg:'50%'},
      height:'100%',


    }
  },
  titleText:{
    variant: 'headerFont',
    sx:{
      mb:1,
      fontWeight: 400,
      fontSize:{xs:60,lg:30},
      color: 'custom.darkgrey'
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

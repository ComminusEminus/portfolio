const heroAtters = {
  contentSection: {
    sx : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      minHeight: '50vh',
      bgcolor: 'custom.pink25'
    }
  },
  titleText:{
    variant: 'headerFont',
    sx:{
      mb:1,
      fontWeight: 900,
      fontSize:{xs:110,lg:80},
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
  innerBox:{
    sx : {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'auto',
      height:'auto'
    }
  }
}

export default heroAtters;

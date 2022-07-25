const objectiveAtters = {
  titleText:{
    variant: "headerFont",
    sx:{
      mb:4,
      fontWeight: 300,
      fontSize: {xs:60, lg:50},
      color: 'custom.darkgrey'
    }
  },
  contentText:{
    variant: "bodyFont",
    sx:{
      textAlign:'start',
      fontWeight: 400,
      fontSize: {xs: 30 ,md: 25, lg:18},
      color: 'custom.darkgrey'
    }
  },
  titleBox:{
    sx:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      height:'100%',

    }
  },
  contentBox:{
    sx:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: {xs:'100%', lg:'50%'},
      height:'auto',
    }
  },
  boxProps: {
    sx : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      p:10,
    }
  }
}

export default objectiveAtters

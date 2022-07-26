const aboutAtters ={
  container:{
    sx : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: {xs:'100%',md:'100%',lg:'100%'},
      height: {xs:'70vh',md:'auto',lg:'50vh'},
      py:{xs:15,md:15,lg:0},
      px:10,
      bgcolor:'#262626'
    }
  },
  textContainer:{
    sx:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: {md:'flex-start',lg:'center'},
      width: {xs:'100%', lg:'50%'},
      height:'auto',
    }
  },
  titleText:{
    variant: "headerFont",
    sx:{
      mb:4,
      fontWeight: 800,
      fontSize: {xs:50, lg:35},
      color: 'white'
    }
  },
  contentText:{
    variant: "bodyFont",
    sx:{
      textAlign:'start',
      fontWeight: 600,
      fontSize: {xs: 40 ,md: 35, lg:18},
      color: 'white'
    }
  },
}


export default aboutAtters;

import GlobalContext from '../../Provider/GlobalContext'

import langLibAtters from './Atters/langLibAtters'
import MapLang from './MapLang'
import Grid from '@mui/material/Grid'
import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const LangLib =()=> {
  const {state:{content:{langLib}}} = useContext(GlobalContext)

  return(
    <Box {...langLibAtters.container}>
      <Box {...langLibAtters.textContainer}>
        <Typography {...langLibAtters.titleText}>
          {langLib.title}
        </Typography>
      </Box>
      <Grid container sx = {{height:'100%',alignContent:'stretch',flexGrow:1, width:{xs: '100%',lg:'70%'}}} >
        <MapLang content = {langLib.content} />
      </Grid>
    </Box >
  )
}

export default LangLib;

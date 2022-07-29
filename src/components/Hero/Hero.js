import GlobalContext from '../../Provider/GlobalContext'
import heroAtters from './Atters/heroAtters'

import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Hero = () => {
  const {state:{content:{hero}}} = useContext(GlobalContext)

  return(
    <>
      {
        hero && <Box  {...heroAtters.container}>
          <Box {...heroAtters.textContainer}>
            <Typography {...heroAtters.titleText}>
              {hero.subTitle}
            </Typography>
          </Box>
        </Box>
      }
      {
        !hero && <Typography {...heroAtters.titleText}>
          ...Loading
        </Typography>
      }
    </>
  )
}

export default Hero

import GlobalContext from '../../Provider/GlobalContext'

import heroAtters from './Atters/heroAtters'
import SkullCrossbonesLogo from '../common/images/SvgIcons/SkullCrossbonesLogo'

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
/*
          <Typography {...heroAtters.titleText}>
            {hero.title.firstName}{<SkullCrossbonesLogo {...heroAtters.heroLogoAtters} />}{hero.title.lastName}
          </Typography>
          <Typography {...heroAtters.subtitleText}>
            {hero.subTitle}
          </Typography>

*/

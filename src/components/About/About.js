import GlobalContext from '../../Provider/GlobalContext'

import aboutAtters from './Atters/aboutAtters'

import {useContext} from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const About = () => {
  const {state:{content:{about}}} = useContext(GlobalContext)
  return(
    <Box {...aboutAtters.container}>
      <Box {...aboutAtters.textContainer}>
        <Typography {...aboutAtters.titleText}>
          {about.title}
        </Typography>
        <Typography {...aboutAtters.contentText}>
          {about.content}
        </Typography>
      </Box>
    </Box>
  )
}

export default About

import GlobalContext from '../../Provider/GlobalContext'
import ContentSection from '../common/ComponentsNew/ContentSection'

import aboutAtters from './Atters/aboutAtters'

import {useContext} from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const About = () => {
  const {state:{content:{about}}} = useContext(GlobalContext)
  return(
    <Box {...aboutAtters.contentSection}>
      <Box {...aboutAtters.contentBox}>
        <Typography {...aboutAtters.title}>
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

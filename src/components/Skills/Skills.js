import GlobalContext from '../../Provider/GlobalContext'

import skillsAtters from './Atters/skillsAtters'
import MapSkills from './MapSkills'

import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Skills = () => {
  const {state:{content:{skills}}} = useContext(GlobalContext)

  return(
    <Box {...skillsAtters.container}>
      <Typography {...skillsAtters.titleText}>
        {skills.title}
      </Typography>
      <Box {...skillsAtters.mapContainer}>
        <MapSkills content = {skills.content} />
      </Box>
    </Box >
  )

}

export default Skills

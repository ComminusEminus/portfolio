import GlobalContext from '../../Provider/GlobalContext'

import skillsAtters from './Atters/skillsAtters'
import MapSkills from './MapSkills'

import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Skills = () => {
  const {state:{content:{skills}}} = useContext(GlobalContext)

  return(
    <Box {...skillsAtters.contentBox}>
      <Box {...skillsAtters.mapSkillsBox}>
        <MapSkills content = {skills.content} />
      </Box>
      <Typography {...skillsAtters.titleText}>
        {skills.title}
      </Typography>
    </Box >
  )

}

export default Skills

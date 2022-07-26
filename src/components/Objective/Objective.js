import GlobalContext from '../../Provider/GlobalContext'

import objectiveAtters from './Atters/objectiveAtters'

import {useContext} from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Objective = (props) => {
  const {state:{content:{objective}}} = useContext(GlobalContext)

  return(
    <Box {...objectiveAtters.container}>
      <Box {...objectiveAtters.textContainer}>
        <Typography {...objectiveAtters.titleText}>
          {objective.title}
        </Typography>
        <Typography {...objectiveAtters.contentText}>
          {objective.content}
        </Typography>
      </Box>
    </Box>
  )
}

export default Objective

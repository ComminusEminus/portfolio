import GlobalContext from '../../Provider/GlobalContext'
import ContentSection from '../common/ComponentsNew/ContentSection'
import objectiveAtters from './Atters/objectiveAtters'

import {useContext} from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Objective = (props) => {
  const {state:{content:{objective}}} = useContext(GlobalContext)

  return(
    <Box {...objectiveAtters.boxProps}>
      <Box {...objectiveAtters.contentBox}>
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

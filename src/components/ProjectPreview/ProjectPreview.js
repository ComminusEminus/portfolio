import GlobalContext from '../../Provider/GlobalContext'
import projectPreviewAtters from './Atters/projectPreviewAtters'
import MapProjects from './MapProjects'

import {useContext} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const ProjectPreview =()=> {
  const {state:{content:{projectPreview}}} = useContext(GlobalContext)

  return(
    <Box {...projectPreviewAtters.container}>
      <Box {...projectPreviewAtters.textContainer}>
        <Typography {...projectPreviewAtters.titleText}>
          {projectPreview.title}
        </Typography>
      </Box>
      <Box {...projectPreviewAtters.mapProjectBox}>
        <MapProjects content = {projectPreview.content} />
      </Box>
    </Box >
  )
}

export default ProjectPreview;

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import projectPreviewAtters from './Atters/projectPreviewAtters'

const ProjectCards = ({cardData}) => {
  return(
    <Paper {...projectPreviewAtters.paperCard}>
      <Typography {...projectPreviewAtters.projectCardTitleText} >
        {cardData.title}
      </Typography>
      <Typography {...projectPreviewAtters.projectCardDescriptionText} >
        {cardData.description}
      </Typography>
      <Button href = {cardData.gitHubUrl}  {...projectPreviewAtters.projectDetailsButton}>
        View Github
      </Button>
    </Paper>
  )
}

export default ProjectCards

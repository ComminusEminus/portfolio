import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import projectPreviewAtters from './Atters/projectPreviewAtters'

const ProjectCards = ({cardData}) => {
  return(
    <Paper {...projectPreviewAtters.paperCard}>
      <Box {...projectPreviewAtters.cardTitleBox}>
        <Typography {...projectPreviewAtters.projectCardTitleText} >
          {cardData.title}
        </Typography>
     </Box>
      <Box {...projectPreviewAtters.cardDescriptionBox}>
        <Typography {...projectPreviewAtters.projectCardDescriptionText} >
          {cardData.description}
        </Typography>
      </Box>
      <Box {...projectPreviewAtters.cardButtonBox}>
        <Button href={cardData.gitHubUrl}  {...projectPreviewAtters.projectDetailsButton}>
          View Github
        </Button>
      </Box>
    </Paper>
  )
}

export default ProjectCards

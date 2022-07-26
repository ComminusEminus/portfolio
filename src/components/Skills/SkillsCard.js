import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import skillsAtters from './Atters/skillsAtters'
import DatabaseIcon from '../common/images/SvgIcons/DatabaseIcon'
import AuthenticationIcon from '../common/images/SvgIcons/AuthenticationIcon'
import TddIcon from '../common/images/SvgIcons/TddIcon'
import LayoutIcon from '../common/images/SvgIcons/LayoutIcon'

const SkillsCard = ({cardData}) => {

  const {title, content, img} = cardData
  return(
    <Paper {...skillsAtters.paperCard}>
      <Box {...skillsAtters.imgBox}>
        {imageSwitch(img)}
      </Box>
      <Box {...skillsAtters.skillContentBox}>
        <Typography {...skillsAtters.cardtitle}>
          {title}
        </Typography>
        <Typography {...skillsAtters.cardcontent}>
          {content}
        </Typography>
      </Box>
    </Paper>
  )
}

export default SkillsCard

const imageSwitch = (title) => {
  switch (title){
    case 'Database':
      return <DatabaseIcon sx = {{fontSize: {xs:200,md:180,lg:110}}} />
    case 'Authentication':
      return <AuthenticationIcon sx = {{fontSize: {xs:200,md:180,lg:110}}}/>
    case 'TDD':
      return <TddIcon sx = {{fontSize: {xs:200,md:180,lg:110}}} />
    case 'Design':
      return <LayoutIcon sx = {{fontSize: {xs:200,md:180,lg:110}}} />
  }
}

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

const NestedListComponent = ({list, keyVal}) =>{
  return (
    <>
      <Box sx = {{}}>
        {
          list.map((listItem, index) => {
            return(
              <ListItem key = {`requirement-${index}-${keyVal}`}>
                <ListItemIcon>
                  <CircleIcon sx = {{fontSize:{xs:10, lg:10}, color:'custom.darkgrey'}}/>
                </ListItemIcon>
                <ListItemText disableTypography primary = {<Typography variant = 'bodyFont' sx = {{fontWeight: 500, fontSize: {xs: 25,lg:15}, color: 'custom.darkgrey'}} >{listItem}</Typography>}  />
              </ListItem>
            )
          })
        }
      </Box>
    </>
  )
}

export default NestedListComponent;

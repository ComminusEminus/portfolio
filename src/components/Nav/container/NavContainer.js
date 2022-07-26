import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import CollapsedNav from '../presentation/CollapsedNav';
import ExpandedNav from '../presentation/ExpandedNav';



const styles = {
  navContainer: {
    backgroundColor: 'white',

  }
}


const NavContainer = () => {

  return(
    <>
      <AppBar style = {styles.navContainer}>
        <Box sx={{px:{xs:0,md:0,lg:10}}}>
          <Toolbar >
            <CollapsedNav />
            <ExpandedNav  />
          </Toolbar>
        </Box>
      </AppBar>
    </>
  )
}

export default NavContainer;

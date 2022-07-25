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
        <Box >
          <Toolbar disableGutters>
            <CollapsedNav />
            <ExpandedNav  />
          </Toolbar>
        </Box>
      </AppBar>
    </>
  )
}

export default NavContainer;

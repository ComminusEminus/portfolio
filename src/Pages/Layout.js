import Grid from '@mui/material/Grid'
import {Outlet} from "react-router-dom";
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';

import pageAtters from './Atters/pageAtters'

const Layout = ({children}) => {
  return (
    <>
      <Box sx = {{border:1, width :'100%',dispaly:'flex', flexDirection:'column',justifyContent:'center'}}>
        <Box >
          {children}
        </Box>
        <Box sx = {{width :'100%'}}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default Layout;


import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';

import LinkBehavior from '../../common/components/LinkBehavior'
import {Fragment} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import SkullCrossbonesLogo from '../../common/images/SvgIcons/SkullCrossbonesLogo'
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';

const CollapsedNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <Box sx={{display: { xs: 'flex', lg: 'none' }, justifyContent:'center', alignItems:'center' }}>
      <Box  sx={{ display:'flex', justifyContent:'center', alignItems:'center', border:1}}>
        <Link
          variant = 'headerFont'
          component = {LinkBehavior}
          underline="none"
          to = {`/`}
          sx = {{ my:1,mx:3, color:'custom.darkgrey',fontSize: 60, fontWeight:300}}
        >
          Mikael
          {
            <SkullCrossbonesLogo sx = {{mx:2,color: 'custom.darkgrey25',fontSize: {xs:70, lg:60} }} />
          }
          Mirza
        </Link>
      </Box>
    </Box>
  )
}

export default CollapsedNav;
/*

<Box  sx={{flexGrow:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
  <IconButton
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
  >
    <MenuIcon sx = {{color:'custom.darkgrey',fontSize:70}}/>
  </IconButton>
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}


    keepMounted
    open={open}
    onClose={handleClose}

    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem sx = {{ display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
      <Link
        variant = 'headerFont'
        component = {LinkBehavior}
        underline="none"
        to = {`/about`}
        onClick={handleClose}
        sx={{ fontWeight: 600, fontSize: 50, color: 'custom.darkgrey'}}
      >
        ABOUT
      </Link>
    </MenuItem>
    <MenuItem sx = {{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
      <Typography sx = {{fontWeight: 600, fontSize: 50, color: 'custom.darkgrey'}}>
        PROJECTS
      </Typography>
    </MenuItem>
    <MenuItem sx = {{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
      <Link
        variant = 'headerFont'
        component = {LinkBehavior}
        underline="none"
        to = {`viewprojects/ECommerceDemo`}
        onClick={handleClose}
        sx={{ fontWeight: 600, fontSize: 45, color: 'custom.darkblue'}}
      >
        E Commerce Project
      </Link>
    </MenuItem>
  </Menu>
</Box>




*/

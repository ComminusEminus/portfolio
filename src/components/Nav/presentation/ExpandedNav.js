import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

import LinkBehavior from '../../common/components/LinkBehavior'
import {Fragment, useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import SkullCrossbonesLogo from '../../common/images/SvgIcons/SkullCrossbonesLogo'

const ExpandedNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{border:1, flexGrow: 1, display: {xs: 'none', lg: 'flex'}, justifyContent: 'flex-start', alignItems: 'baseline'}}>
      <Link
        variant = 'logoFont'
        component = {LinkBehavior}
        underline="none"
        to = {`/`}
        sx = {{ mx:3, color:'custom.darkgrey',fontSize: 40}}
      >
        Mikael
        {
          <SkullCrossbonesLogo sx = {{mx:2,color: 'custom.darkgrey25',fontSize: {xs:70, lg:50} }} />
        }
        Mirza
      </Link>
    </Box>
  )
}


export default ExpandedNav;

/*

<Link
  variant = 'headerFont'
  component = {LinkBehavior}
  underline="none"
  to = {`/about`}
  sx={{ml:2, fontWeight: 800, fontSize: 25, color: 'custom.darkgrey'}}
>
  ABOUT
</Link>
<Button
  variant = 'text'
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
  sx={{ml:2, fontWeight: 600, fontSize: 25, color: 'custom.darkgrey', }}>
  Projects
</Button>
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
  <MenuItem sx = {{}}>
    <Link
      variant = 'headerFont'
      component = {LinkBehavior}
      underline="none"
      to = {`viewprojects/ECommerceDemo`}
      onClick={handleClose}
      sx={{ fontWeight: 600, fontSize: 20, color: 'custom.darkblue'}}
    >
      E Commerce Project
    </Link>
  </MenuItem>
</Menu>


*/

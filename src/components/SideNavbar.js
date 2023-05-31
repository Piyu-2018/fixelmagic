import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: 1000,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function SideNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          backgroundColor: 'white',
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <img src={require('../assets/icons/Logo.png')}></img>
            </ListItemIcon>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <img src={require('../assets/icons/Shelf-active.png')}></img>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img src={require('../assets/icons/Shelf-default.png')}></img>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img src={require('../assets/icons/Shelf-default.png')}></img>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img src={require('../assets/icons/Shelf-default.png')}></img>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img src={require('../assets/icons/Avatar.png')}></img>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

export default SideNavbar;

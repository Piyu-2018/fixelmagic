import React from 'react';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

function SideNavbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100px',
        backgroundColor: '#222428',
        borderRadius: 10,
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <List>
        <ListItemButton sx={{ paddingX: 2, paddingY: 2 }}>
          <ListItemIcon>
            <img src={require('../assets/icons/Logo.png')}></img>
          </ListItemIcon>
        </ListItemButton>
        <Divider
          sx={{
            backgroundColor: '#8b8c8e',
          }}
        />
        <ListItemButton sx={{ paddingX: 2, paddingY: 2 }}>
          <ListItemIcon>
            <img src={require('../assets/icons/Shelf-active.png')}></img>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ paddingX: 2, paddingY: 2 }}>
          <ListItemIcon>
            <img src={require('../assets/icons/Shelf-default.png')}></img>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ paddingX: 2, paddingY: 2 }}>
          <ListItemIcon>
            <img src={require('../assets/icons/Shelf-default.png')}></img>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ paddingX: 2, paddingY: 2 }}>
          <ListItemIcon>
            <img src={require('../assets/icons/Shelf-default.png')}></img>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton sx={{ paddingX: 2, paddingY: 2 }}>
          <ListItemIcon>
            <img src={require('../assets/icons/Avatar.png')}></img>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  );
}

export default SideNavbar;

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} style={{ position: 'absolute', left: '1rem', top: '1rem' }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem onClick={toggleDrawer}>
            <ListItemText primary="Transactions" />
          </ListItem>
          <ListItem onClick={toggleDrawer}>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

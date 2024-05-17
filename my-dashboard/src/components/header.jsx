import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" style={{ marginBottom: '1rem', backgroundColor: '#c0392b' }}>
      <Toolbar>
        <Typography variant="h6" style={{ color: '#f8f5f0' }}>
          Restaurant Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

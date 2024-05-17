import React from 'react';
import { Container, Grid } from '@mui/material';
import TransactionLog from './TransactionLog';

export default function Dashboard() {
    return (
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TransactionLog />
            </Grid>
          </Grid>
        </Container>
      );
};

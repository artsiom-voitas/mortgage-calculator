import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

function Navbar() {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <Typography variant='h5'>Morgage calculator</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;

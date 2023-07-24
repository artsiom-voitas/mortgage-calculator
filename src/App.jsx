import { Container, Grid } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import SliderSelect from './components/SliderSelect';
import Result from './components/Result';
import TenureSelect from './components/TenureSelect';

function App() {
    const [data, setData] = useState({
        homeValue: 3000,
        downPayment: 3000 * 0.2,
        loanAmount: 3000 * 0.8,
        loanTerm: 5,
        interestRate: 5,
    });

    return (
        <>
            <Navbar />
            <Container maxWidth="xl" sx={{ marginTop: 4 }}>
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <SliderSelect data={data} setData={setData} />
                        <TenureSelect data={data} setData={setData} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Result data={data} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;

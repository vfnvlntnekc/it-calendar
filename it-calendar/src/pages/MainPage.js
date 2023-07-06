import React from 'react';
import NavBar from '../components/NavBar';
import CalendarIT from '../components/CalendarIT';
import { Grid } from '@material-ui/core';
import AddTask from '../components/AddTask';

const MainPage = () => {
    const gridStyle = { height: '100vh', width: 'vmax', background: '#F8F8F8' }

    return (
        <Grid style={gridStyle}>
            <NavBar />
            <CalendarIT />
            <AddTask />
        </Grid>
    );
};

export default MainPage;
import React from 'react';

import Header from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
    const styles = {
        alignSelf: 'stretch'
    };

    return (
        <div style={styles}>
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App

// COLORS:
//
// #05386B
// #379683
// #5CDB95
// #8EE4AF
// #EDF5E1
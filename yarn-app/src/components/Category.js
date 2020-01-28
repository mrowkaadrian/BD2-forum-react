import React from "react";

function Category() {

    const styles = {
        backgroundColor: "#EDF5E1",
        width: '50vw',
        height: '50vh',
        border: '2px solid #000000',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '50px'
    };

    return (
        <div style={styles}>
            Some Category
        </div>
    )
}

export default Category
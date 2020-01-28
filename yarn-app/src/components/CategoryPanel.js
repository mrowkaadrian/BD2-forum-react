import React from "react";
import Category from "./Category";

function CategoryPanel() {

  const styles = {
    backgroundColor: '#8EE4AF',
    border: '2px solid #000000',
    height: '70vh',
    width: '75vw',
    display: 'flex'
  };

  const columnStyles = {
    border: '2px solid #000000',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    alignContent: 'center',
  };

  return (
    <div style={styles}>
      <div style={columnStyles}>
        <Category/>
        <Category/>
        <Category/>
      </div>
    </div>
  );
}

export default CategoryPanel;
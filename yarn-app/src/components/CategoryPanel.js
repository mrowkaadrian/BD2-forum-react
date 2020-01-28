import React from "react";
import Category from "./Category";

function CategoryPanel() {

  const styles = {
    backgroundColor: '#8EE4AF',
    border: '2px solid #000000',
    height: '200vh',
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    marginBottom: "50px",
    marginTop: "50px"
  };

  return (
    <div style={styles}>
        <Category/>
        <Category/>
        <Category/>
    </div>
  );
}

export default CategoryPanel;
import React from 'react';
import CategoryPanel from "./CategoryPanel";
import Shoutbox from "./Shoutbox"

function MainPage() {
  const styles = {
    backgroundColor: "#5CDB95",
    height: "100vh",
    alignSelf: 'stretch',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  return (
    <div style={styles}>
      <CategoryPanel/> <Shoutbox/>
    </div>
  );
}

export default MainPage;
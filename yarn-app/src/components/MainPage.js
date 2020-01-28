import React from 'react';
import CategoryPanel from "./CategoryPanel";
import Shoutbox from "./Shoutbox"

function MainPage() {
  const styles = {
    backgroundColor: "#5CDB95",
    alignSelf: 'stretch',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={styles}>
      <CategoryPanel/> <Shoutbox/>
    </div>
  );
}

export default MainPage;
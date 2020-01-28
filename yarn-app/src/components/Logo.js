import React from 'react'
import { Image } from 'semantic-ui-react'

function Logo() {
  return (
    <div style={{margin: 30, display: "inline-block"}}>
      <Image src='https://fakeimg.pl/220x60' alt='Logo' rounded />
    </div>
  );
}

export default Logo;
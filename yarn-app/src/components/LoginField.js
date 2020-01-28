import React from "react";
import { Button, Icon } from 'semantic-ui-react'
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function LoginField() {

  const styles = {
    margin: '30px',
    display: 'column',
    flexDirection: 'column',
    align: 'right'
  };

  return (
    <div style={styles}>
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default LoginField
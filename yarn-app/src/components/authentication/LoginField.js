import React from "react";
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
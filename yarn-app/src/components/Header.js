import React from 'react';
import Logo from "./Logo";
import LoginField from "./authentication/LoginField";
import SearchPanel from "./SearchPanel";
import {Button, Label} from 'semantic-ui-react'

function Header({ state }) {

    const styles = {
        backgroundColor: "#379683",
        width: "100vw",
        height: '10vh',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    return (
        <div style={styles}>
                <React.Fragment>
                    <Logo/>
                    <SearchPanel/>
                    {!state.isAuthenticated ? <LoginField/> : <Greeting loginState={state} />}
                </React.Fragment>
        </div>
    )
}

function Greeting({loginState}) {

    return (
        <div style={{marginRight: "30px"}}>
            <Label> Hello {loginState.user} </Label>
            <Button>Logout</Button>
        </div>
    )
}

export default Header
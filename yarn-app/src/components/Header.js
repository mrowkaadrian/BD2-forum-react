import React, {Component, createRef} from 'react';
import Logo from "./Logo";
import LoginField from "./LoginField";
import SearchPanel from "./SearchPanel";

export default class Header extends Component {


    render() {
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
                    <Logo />
                    <SearchPanel />
                    <LoginField />
                </div>
        )
    }
}
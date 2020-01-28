import React from "react";
import { Button, Icon } from 'semantic-ui-react'

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
        <div>
            <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <Button animated='vertical'>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
            <Button animated='fade'>
                <Button.Content visible>Sign-up for a Pro account</Button.Content>
                <Button.Content hidden>$12.99 a month</Button.Content>
            </Button>
        </div>
    )
}

export default Category
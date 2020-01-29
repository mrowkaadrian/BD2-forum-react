import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Grid, Form, Segment, Divider } from 'semantic-ui-react'

export default class LoginModal extends Component {
    state = { modalOpen: false };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });

    render() {
        const LoginForm = () => {
            return (
                <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='Login'
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='teal' fluid size='large' onClick={this.handleClose}>
                                    Login
                                </Button>
                                <Divider />
                                <Button color='teal' fluid size='large' onClick={this.handleClose}>
                                    Go back
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            );
        };

        return (
            <Modal
                trigger={
                    <Button size='big' animated='fade' onClick={this.handleOpen}>
                        <Button.Content visible>Login</Button.Content>
                        <Button.Content hidden><Icon name='sign-in' /></Button.Content>
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Modal.Content>
                    <LoginForm />
                </Modal.Content>
            </Modal>
        )
    }
}

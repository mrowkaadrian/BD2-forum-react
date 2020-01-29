import React, { Component } from 'react'
import {
    Button,
    Icon,
    Modal,
    Form,
    Divider,
    TextArea,
    ModalActions,
    Checkbox
} from 'semantic-ui-react'

export default class AddPostForm extends Component {
    state = { modalOpen: false };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });

    render() {

        return (
            <Modal
                trigger={
                    <Button size='big' animated='fade' onClick={this.handleOpen}>
                        <Button.Content visible>Add new post</Button.Content>
                        <Button.Content hidden><Icon name='file' /></Button.Content>
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>Create new Post</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field id='form-textarea-title' required={true}>
                            <input placeholder='Title' />
                        </Form.Field>
                    </Form>
                    <Divider/>
                    <Form size='small'>
                        <Form.Field
                            id='form-textarea-control-content'
                            control={TextArea}
                            placeholder='Type something here...'
                            required={true}
                        />
                    </Form>
                    <Divider/>
                    <Form>
                        <Form.Field id='form-textarea-tags'>
                            <input placeholder="Tags" />
                        </Form.Field>
                    </Form>
                    <br/>
                    <Form.Field required={true}>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                </Modal.Content>
                <ModalActions>
                    <Button onClick={this.handleClose}>Back</Button>
                    <Button onClick={this.handleClose}>Submit</Button>
                </ModalActions>
            </Modal>
        )
    }
}

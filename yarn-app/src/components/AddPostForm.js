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
    state = {
        modalOpen: false,

        categoryId: this.props.categoryId,
        titleTextField: "",
        contentTextField: ""
    };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });

    createJsonFromCurrentData = () => {
        const json = {
            topic: this.state.titleTextField,
            postBody: this.state.contentTextField,
            categoryId: this.state.categoryId
        };

        return JSON.stringify(json);
    };

    printStateInJson = () => {
        const json = this.createJsonFromCurrentData();

        console.log(json);
    };

    render() {

        let someJson = this.createJsonFromCurrentData();
        let base64 = require('base-64');

        const username = 'admin';
        const password = 'admin';

        const url = '/forum/api/thread';

        const addPost = (e) => {
            e.preventDefault();

            let headers = new Headers();
            headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));

            fetch(url, {
                method: 'POST',
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json"
                },
                body: someJson
            })
                .then(resp => resp.json())
                .then(data => console.log(data))
        };

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
                    <Form size='small'>
                        <Form.Field
                            id='form-textarea-title'
                            required={true}
                            onChange={(e) => this.setState({titleTextField: e.target.value})}>
                            <input placeholder='Title' />
                        </Form.Field>
                        <Form.Field
                            id='form-textarea-control-content'
                            control={TextArea}
                            placeholder='Type something here...'
                            required={true}
                            onChange={(e) => this.setState({contentTextField: e.target.value})}
                        />
                        <Divider/>
                        <Form.Field id='form-textarea-tags'>
                            <input placeholder="Tags" />
                        </Form.Field>
                        <Form.Field required={true}>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button onClick={addPost}>Submit</Button>
                    </Form>
                </Modal.Content>
                <ModalActions>
                    <Button onClick={this.handleClose}>Back</Button>
                    <Button onClick={this.printStateInJson}>Print JSON to console</Button>
                </ModalActions>
            </Modal>
        )
    }
}

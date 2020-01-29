import React, { Component } from 'react'
import {Button, Header, Icon, Modal, Grid, Form, Segment, Divider, ModalActions, Label} from 'semantic-ui-react'
import Category from "./Category";

export default class ThreadViewer extends Component {
    state = { modalOpen: false };

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });

    render() {
        const actualThread = this.props.thread;
        const posts = this.props.posts;

        console.log(JSON.stringify(posts));

        const itemsToRender = [];

        if (posts != null) {
            for (const [index, value] of posts.entries()) {
                itemsToRender.push(<Post key={index} post={value}/>)
            }
        }

        const ThreadContent = () => {
            return <React.Fragment>
                <Modal.Description>
                    <Header>{actualThread.topic}</Header>
                    {itemsToRender}
                    <Divider />
                </Modal.Description>
                <ModalActions>
                    <Button onClick={this.handleClose}>Back</Button>
                </ModalActions>
            </React.Fragment>
        };

        return (
            <Modal
                trigger={
                    <Button size='small' animated='fade' onClick={this.handleOpen}>
                        <Button.Content visible>See this post</Button.Content>
                        <Button.Content hidden><Icon name='print' /></Button.Content>
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
            >
                <Modal.Content>
                    <ThreadContent />
                </Modal.Content>
            </Modal>
        )
    }
}

function Post(post) {

    console.log(JSON.stringify(post));

    return <React.Fragment>
        <Divider />
        {post?.post?.body} <br/> <br/>
        <Label>
            <Icon name='pencil alternate' /> {post?.post?.user?.username}
        </Label>
        <Label>
            <Icon name='mail' /> {post?.post?.user?.email}
        </Label>
    </React.Fragment>
}

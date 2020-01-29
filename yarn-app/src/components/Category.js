import React, {useEffect, useState} from "react";
import {List, Header, Icon, Button} from "semantic-ui-react";
import AddPostForm from "./AddPostForm";


function Category({categoryId, categoryName, matchingThreads}) {

    const styles = {
        backgroundColor: "#EDF5E1",
        width: '87vw',
        height: '35vh',
        border: '2px solid #000000',

        marginTop: '25px'
    };

    const [threads, setThreads] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(null);

    const GET_ALL_THREADS_URL = '/forum/api/thread/all';
    const GET_ALL_POSTS_URL = '/forum/api/post/all';

    getOnlyMatchingThreads(categoryId, threads);

    useEffect(() => {
        fetch(GET_ALL_THREADS_URL)
            .then(res => {
                setLoading(true);
                return res.json();
            })
            .then(json => {
                setThreads(json);
                setLoading(false);
            })
    }, [GET_ALL_THREADS_URL]);

    useEffect(() => {
        fetch(GET_ALL_POSTS_URL)
            .then(res => {
                setLoading(true);
                return res.json();
            })
            .then(json => {
                setPosts(json);
                setLoading(false);
            })
    }, [GET_ALL_POSTS_URL]);

    return (
        <div style={styles}>
            <CategoryHeader categoryName={categoryName} />
            <CategoryBody threads={matchingThreads} posts={posts}/>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <AddPostForm />
            </div>
        </div>
    )
}

export default Category

function CategoryHeader({categoryName}) {
    return (
        <div>
            <Header as='h2' icon textAlign='center' color="grey">
                <Icon name='folder' />
                <Header.Content>Category: {categoryName}</Header.Content>
            </Header>
        </div>
    )
}

function CategoryBody({threads, posts}) {

    const itemsToRender = [];

    if (threads != null) {
        for (const [index, value] of threads.entries()) {
            const postToAdd = getOnlyMatchingPost(value?.id, posts);
            console.log(postToAdd);

            itemsToRender.push(
                <List.Item key={index}>
                    <List.Content floated='right'>
                        <Button>See this post</Button>
                    </List.Content>
                    <List.Content>
                        <List.Header>{value?.topic}</List.Header>
                        {postToAdd?.body}
                    </List.Content>
                </List.Item>
            )
        }
    }

    return <React.Fragment>
        <List celled>
            {itemsToRender}
        </List>
    </React.Fragment>
}

function getOnlyMatchingThreads(categoryId, allThreads) {
    if (allThreads != null) {
        const matchingThreads = [];

        for (let i = 0; i < allThreads.length; i++) {
            let thread = allThreads[i];

            if (thread?.category?.categoryId === categoryId)
                matchingThreads.push(thread);
        }

        return matchingThreads;
    }
    else
        return null;
}

function getOnlyMatchingPost(threadId, posts) {
    if (posts != null){
        let matchingPost = {};

        for (let i = 0; i < posts.length; i++) {
            let post = posts[i];

            //console.log(JSON.stringify(post?.thread?.threadId));
            //console.log(JSON.stringify(threadId));

            if (post?.thread?.threadId === threadId)
                matchingPost = post;
        }

        return matchingPost;
    }
    else
        return null;
}
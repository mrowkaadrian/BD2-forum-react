import React, {useState, useEffect} from "react";
import Category from "./Category";

function CategoryPanel() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(null);

    const GET_ALL_THREADS_URL = '/forum/api/post/all';

    useEffect(() => {
        fetch('/forum/api/post/all')
            .then(res => {
                setLoading(true);
                return res.json();
            })
            .then(json => {
                setPosts(json);
                setLoading(false);
            })
    }, [GET_ALL_THREADS_URL]);

    console.log(posts);

    const styles = {
        backgroundColor: '#8EE4AF',
        border: '2px solid #000000',
        height: '200vh',
        width: '90vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        marginBottom: "50px",
        marginTop: "50px"
    };

    const categories = getAllCategories(posts);
    console.log(categories);
    const itemsToRender = [];

    if (categories != null) {
        for (const [index, value] of categories.entries()) {
            itemsToRender.push(<Category key={index} categoryId={value?.id} categoryName={value?.name} matchingThreads={value?.threads}/>)
        }
    }

    return (
        <div style={styles}>
            {itemsToRender}
        </div>
    );
}

export default CategoryPanel;

function getAllCategories(arr) {

    if (arr != null) {
        let categories = [];

        for (let i = 0; i < arr.length; i++) {
            let post = arr[i];

            const category = {
                id: post?.thread?.category?.categoryId,
                name: post?.thread?.category?.name,
                threads: []
            };

            categories.push(category);
        }

        const uniq = Array.from(new Set(categories.map(a => a.id)))         // all unique categories object = {id, name, threads}
            .map(id => {
                return categories.find(a => a.id === id)
            });


        for (let i = 0; i < uniq.length; i++) {
            let category = uniq[i];

            for (let j = 0; j < arr.length; j++) {
                let post = arr[j];

                if (post?.thread?.category?.categoryId === category.id) {

                    const thread = {
                        id: post?.thread?.threadId,
                        topic: post?.thread?.topic
                    };

                    category.threads.push(thread)
                }
            }
        }
                            // after this loop 'uniq' has all matching threads
        return uniq;
    }
    else
        return null;
}

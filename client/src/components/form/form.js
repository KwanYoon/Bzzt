import React, { useState, useEffect } from 'react';
import { Card, TextField, Button, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './formStyles';
import { getPosts, createPost, updatePost } from './../../actions/postsActions';

const Form = ({ currentId, setCurrentId }) => {
    // postData object
    // postData is current state, and setPostData allows updating the state
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
    // if there is a currentId, then find the post, if not, return null
    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();

    // when 'post' changes, run this side effect
    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    // handler functions
    const handleSubmit = (e) => {
        // prevents browser refreshing
        e.preventDefault();

        if (currentId) {
            // dispatches the updated post if currentid present
            dispatch(updatePost(currentId, postData));
            dispatch(getPosts());
        } else {
            // dispatches submit action of the data
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    return (
        <Card className={classes.mainCard}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Post</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth 
                    // puts the value in the state, in postData
                    value={postData.creator} 
                    // ...postData separates the postData so only creator is changed
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value})} 
                />
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value})} 
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth 
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})} 
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} 
                />
                <div>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button type="submit">Submit</Button>
                <Button onClick={clear}>Clear</Button>
            </form>
        </Card>
    )
}

export default Form;
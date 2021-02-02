import React, { useState } from 'react';
import { Card, TextField, Button, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './formStyles';
import { createPost } from './../../actions/postsActions';

const Form = () => {
    // postData object
    // postData is current state, and setPostData allows updating the state
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: ''});
    const dispatch = useDispatch();

    // handler functions
    const handleSubmit = (e) => {
        // prevents browser refreshing
        e.preventDefault();

        // dispatches submit action of the data
        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Card>
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
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value})} 
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
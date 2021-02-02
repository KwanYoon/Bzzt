import React, { useEffect } from 'react';
import { Container, Typography, AppBar, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/postsActions';
import useStyles from './appStyles.js';
import bee from './icons/bee.png';
import Posts from './components/posts/posts';
import Form from './components/form/form';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // useEffect lets you preform side effects in function components
    useEffect(() => {
        // dispatches the action for getting posts
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.navBar} position="static">
                <Typography align="center" variant="h2">Bzzt</Typography>
                <img className={classes.bee} src={bee} alt="bee" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container className={classes.content}>
                    <Container className={classes.posts}>
                        <Posts />
                    </Container>
                    <Container className={classes.form}>
                        <Form />
                    </Container>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
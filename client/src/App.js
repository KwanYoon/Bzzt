import React, { useEffect, useState } from 'react';
import { Container, Typography, AppBar, Grow, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/postsActions';
import useStyles from './appStyles.js';
import bee from './icons/bee.png';
import Posts from './components/posts/posts';
import Form from './components/form/form';
import './index.css';

const App = () => {
    // brings in currentId from state in App as both form and posts use it
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    // useEffect lets you preform side effects in function components
    useEffect(() => {
        // dispatches the action for getting posts, goes to reducer logic
        dispatch(getPosts());
        // when currentId changed (cleared in form), dispatches getPosts()
    }, [currentId, dispatch]);

    const toggleForm = () => {

    }

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.navBar} position="static">
                <Typography align="center" variant="h2">Bzzt</Typography>
                <img className={classes.bee} src={bee} alt="bee" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container className={classes.content}>
                    <Button onClick={toggleForm}>Toggle form</Button>
                    <Container className={classes.form} style={{display: "block"}}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Container>
                    <hr className={classes.line} />
                    <Container className={classes.posts}>
                        <Posts setCurrentId={setCurrentId} />
                    </Container>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
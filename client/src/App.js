import React, { useEffect, useState } from 'react';
import { Container, Grow, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getPosts } from './actions/postsActions';
import useStyles from './appStyles.js';

import Posts from './components/posts/posts';
import Form from './components/form/form';
import Navbar from './components/navbar/navbar';
import Auth from './components/auth/auth';
import './index.css';

const hide = {
    hidden: {
        display: "none"
    },
    nonHidden: {
        display: "block"
    },
}

const HideContext = React.createContext(hide.hidden);

const FormPost = () => {
    const { hide } = React.useContext(HideContext);
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

    return (
        <div>
            <Container>
                <FormToggle />
            </Container>
            <Container className={classes.form} style={{display: hide.display}}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Container>
            <hr className={classes.line} />
            <Container className={classes.posts}>
                <Posts setCurrentId={setCurrentId} />
            </Container>
        </div>
    )
}

const FormToggle = () => {
    const { setHide } = React.useContext(HideContext);

    const hideButton = () => {
        setHide("hidden")
    }

    const unHideButton = () => {
        setHide("nonHidden");
    }

    return (
        <div>
            <Button onClick={hideButton}>Hide Form</Button>
            <Button onClick={unHideButton}>Show Form</Button>
        </div>
    )
}

const Home = () => {
    const classes = useStyles();
    const [stateHide, setHide] = React.useState("hidden");

    return (
        <Grow in>
            <Container className={classes.content}>
                <HideContext.Provider value={{ hide: hide[stateHide], setHide }}>
                    <FormPost />
                </HideContext.Provider>
            </Container>
        </Grow>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
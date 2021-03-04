import React, { useEffect, useState } from 'react';
import { Container, Typography, AppBar, Grow, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/postsActions';
import useStyles from './appStyles.js';
import bee from './icons/bee.png';
import Posts from './components/posts/posts';
import Form from './components/form/form';
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


const App = () => {
    const classes = useStyles();
    const [stateHide, setHide] = React.useState("hidden");

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.navBar} position="static">
                <Typography align="center" variant="h2"> Bzzt</Typography>
                <img className={classes.bee} src={bee} alt="bee" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container className={classes.content}>
                    <HideContext.Provider value={{ hide: hide[stateHide], setHide }}>
                        <FormPost />
                    </HideContext.Provider>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
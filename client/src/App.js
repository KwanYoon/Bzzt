import React from 'react';
import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core';
import useStyles from './appStyles.js';
import pikachu from './icons/pikachu.png';

import Posts from './components/posts/posts';
import Form from './components/form/form';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.navBar} position="static">
                <Typography align="center" variant="h2">Freedom Archives</Typography>
                <img className={classes.pikachu} src={pikachu} alt="pikachu" height="60" width="60" />
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
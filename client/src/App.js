import React from 'react';
import Posts from './components/posts/posts';
import { Container, Typography, AppBar, Grow } from '@material-ui/core';
import useStyles from './appStyles.js';
import pikachu from './icons/pikachu.png';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.navBar} position="static">
                <Typography align="center" variant="h2">Freedom Archives</Typography>
                <img className={classes.pikachu} src={pikachu} alt="pikachu" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Posts />
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
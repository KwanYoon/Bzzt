import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Avatar, Toolbar, Button } from '@material-ui/core';
import useStyles from './navbarStyles';
import bee from '../../icons/bee.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.navBar} position="static">
            <div className={classes.brandContainer}>
                <Typography component={Link} className={classes.heading} to="/" align="center" variant="h2">Bzzt</Typography>
                <img className={classes.bee} src={bee} alt="bee" height="60" width="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.user} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
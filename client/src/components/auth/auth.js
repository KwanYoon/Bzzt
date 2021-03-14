import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import useStyles from './authStyles';
import Input from './input';
import Icon from './icon';
import { signin, signup } from '../../actions/authActions';

const initialState = { email: '', password: '', confirmPassword: '', firstName: '', lastName: '' };

const Auth = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    // password toggle
    const [showPassword, setShowPassword] = useState(false);
    // sign in form data
    const [formData, setFormData] = useState(initialState);
    // checking if signup or signin
    const [isSignup, setIsSignup] = useState(false);

    // when pressed submit on form...
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };
    
    // when input changed...
    const handleChange = (e) => {
        // setting form with name to target value
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup);

    const googleSuccess = async (res) => {
        const result = res?.profileObj; // optional chaining operator
        const token = res?.tokenId;

        try {
            // dispatch authentification
            dispatch(({ type: 'AUTH', data: { result, token } }));

            // redirect back to home
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log("Google sign in failure");
    };
    
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' } 
                    </Button>
                    <GoogleLogin 
                        clientId="852955252667-o9jtp23lh5t7u4nfsnrkk36k579clvm7.apps.googleusercontent.com" 
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{ isSignup ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
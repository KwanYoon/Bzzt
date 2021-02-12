import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navBar: {
        backgroundColor: 'black',
        textAlign: 'center',
        alignItems: 'center',
        margin: '40px 0',
        justifyContent: 'center',
        color: '#dac400',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'row',
    },
    bee: {
        borderRadius: '10px',
        marginLeft: '20px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    posts: {
        marginLeft: '0',
        width: '100%',
    },
    form: {
        width: '100%',
    },
    line: {
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
        backgroundColor: "black",
        width: "90%",
    },
}));
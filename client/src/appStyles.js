import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    navBar: {
        backgroundColor: 'black',
        textAlign: 'center',
        alignItems: 'center',
        margin: '40px 0',
        justifyContent: 'center',
        color: 'yellow',
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
        flexDirection: 'row',
    },
    posts: {
        marginLeft: '0',
        width: '75%',
    },
    form: {
        width: '25%',
    },
}));
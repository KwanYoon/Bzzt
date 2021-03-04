import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

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
    heading: {
        textDecoration: 'none',
        color: '#dac400',
    },
    bee: {
        borderRadius: '10px',
        marginLeft: '20px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
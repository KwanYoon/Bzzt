import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
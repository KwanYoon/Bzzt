import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    postCard: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '15px',
        backgroundColor: "black",
    },
    media: {
        width: 0,
        height: 'auto',
        paddingLeft: "30%",
    },
    content: {
        paddingLeft: "5%",
        backgroundColor: 'black',
        color: '#dac400',
        width: "100%",
    },
    line: {
        margin: "auto",
        marginTop: "30px",
        marginBottom: "30px",
        backgroundColor: "black",
        width: "90%",
    },
}));
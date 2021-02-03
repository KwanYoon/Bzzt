import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    postCard: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '15px',
    },
    media: {
        width: 0,
        height: 'auto',
        paddingLeft: "30%",
    },
    content: {
        paddingLeft: "10%",
    },
}));
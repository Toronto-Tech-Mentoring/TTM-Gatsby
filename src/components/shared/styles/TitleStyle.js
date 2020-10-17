import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Josefin Sans',
        color: 'black',
        fontSize: '22px',
        lineHeight: '38px',
        fontWeight: 600,
        textDecoration: 'underline',
        textDecorationColor: '#FF7500',
        marginLeft: '1.3em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginLeft: '0'
        }
    },
}));

export { useStyles };
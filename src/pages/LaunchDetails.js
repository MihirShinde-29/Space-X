import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LaunchTable } from '../components/LaunchTable';

const useStyles = makeStyles(theme => ({
    back: {
        marginLeft: theme.spacing(2),
    },
}))

export const LaunchDetails = ({ launch, number }) => {
    const classes = useStyles();

    return (
        <>
            <Link to='/' className={classes.back}>
                <Fab size="small">
                    <ArrowBack />
                </Fab>
            </Link>
            <LaunchTable launch={launch[number]} />
        </>
    )
}

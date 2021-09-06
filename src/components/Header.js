import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    logo: {
        textAlign: 'center',
        padding: theme.spacing(7),
        textDecoration: 'none'
    },
    img: {
        height: theme.spacing(7),
        cursor: 'pointer',
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <Link to='/'>
                <img className={classes.img} src="./spacex-logo-black-and-white.png" alt="Space X" />
            </Link>
        </div>
    )
}

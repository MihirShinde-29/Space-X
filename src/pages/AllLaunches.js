import { LaunchList } from "../components/LaunchList";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    listContainer: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}))

export const AllLaunches = ({ change }) => {
    const classes = useStyles();
    return (
        <Container className={classes.listContainer}>
            <LaunchList change={change} />
        </Container>
    )
}

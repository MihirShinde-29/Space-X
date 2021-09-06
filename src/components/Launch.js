import { Link } from "react-router-dom";
import { 
    Grid, 
    Card, 
    CardActionArea, 
    CardHeader
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


export const Launch = ({ launch, change }) => {
    const useStyles = makeStyles((theme) => ({
        img: {
            backgroundImage: `url(${launch.links.mission_patch})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center ',
            backgroundSize: 'cover',
            height: theme.spacing(25),
            paddingTop: '48%',
            marginBottom: theme.spacing(1),
        },
        link: {
            textDecoration: "none",
        },
        black: {
            color: "black"
        },
        card: {
            borderRadius: theme.spacing(2)
        }
    }))

    const classes = useStyles();

    const changeNumber = () => {
        change(+launch.flight_number-1);
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    return (
        <Grid item xs={4}>
            <Card className={classes.card} variant='outlined' onClick={() => {
                changeNumber();
                scrollToTop();
            }}>
                <Link to={`/Flight-Number/${launch.flight_number}`} className={classes.link}>
                    <CardActionArea>
                        <CardHeader
                            className={classes.black}
                            title={launch.mission_name}
                            subheader={`Year: ${launch.launch_year}    Status: ${launch.launch_success ? 'Success' : 'Failure'}`}
                        />
                        <div className={classes.img}></div>
                    </CardActionArea>
                </Link>
            </Card>
        </Grid>
    )
}

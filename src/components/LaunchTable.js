import React from 'react';
import { 
    Container, 
    Grid, 
    Typography, 
    Paper, 
    Table, 
    TableBody, 
    TableRow, 
    TableCell, 
    TableContainer, 
    Link 
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    head: {
        color: "white",
        fontWeight: "600",
    },
    img: {
        width: "60%",
    },
    video: {
        borderRadius: theme.spacing(1),
        margin: theme.spacing(2),
    }, 
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        borderRadius: theme.spacing(1),
    },
    green: {
        color: "green"
    },
    red: {
        color: "red"
    },
}))

export const LaunchTable = ({ launch }) => {
    const classes = useStyles();

    const unix = new Date(launch.launch_date_unix * 1000);
    const dd = String(unix.getDate()).padStart(2, '0');
    const mm = String(unix.getMonth() + 1).padStart(2, '0');
    const yyyy = unix.getFullYear();
    const date = dd + '-' + mm + '-' + yyyy;

    return (
        <div>
            <Container align='center'>
                <Grid 
                    container 
                    justifyContent='space-evenly'
                    alignItems='center'
                >
                    <Grid item xs>
                        <div>
                            <Typography variant='h2' className={classes.head}>
                                {launch.mission_name}
                            </Typography>
                            <Typography variant='h5' className={classes.head}>
                                {launch.launch_year}, {launch.launch_site.site_name}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <img src={launch.links.mission_patch} alt={launch.mission_name} className={classes.img} />
                    </Grid>
                </Grid>
                <TableContainer component={Paper} className={classes.container}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell component='th'>Launch Status</TableCell>
                                <TableCell 
                                    className={launch.launch_success ? classes.green : classes.red}
                                >{launch.launch_success ? 'Success' : 'Failure'}</TableCell>
                            </TableRow>
                            {launch.launch_site.site_name_long && (
                                <TableRow>
                                    <TableCell component='th'>Launch Site</TableCell>
                                    <TableCell>{launch.launch_site.site_name_long}</TableCell>
                                </TableRow>
                            )}
                            {date && (
                                <TableRow>
                                    <TableCell component='th'>Launch Date</TableCell>
                                    <TableCell>{date}</TableCell>
                                </TableRow>
                                )}
                            {launch.details && (
                                <TableRow>
                                    <TableCell component='th'>Details</TableCell>
                                    <TableCell>{launch.details}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.rocket_name && (
                                <TableRow>
                                    <TableCell component='th'>Rocket Name</TableCell>
                                    <TableCell>{launch.rocket.rocket_name}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.rocket_type && (
                                <TableRow>
                                    <TableCell component='th'>Rocket Type</TableCell>
                                    <TableCell>{launch.rocket.rocket_type}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.second_stage.payloads[0].payload_id && (
                                <TableRow>
                                    <TableCell component='th'>Payload ID</TableCell>
                                    <TableCell>{launch.rocket.second_stage.payloads[0].payload_id}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.second_stage.payloads[0].payload_type && (
                                <TableRow>
                                    <TableCell component='th'>Payload Type</TableCell>
                                    <TableCell>{launch.rocket.second_stage.payloads[0].payload_type}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.second_stage.payloads[0].payload_mass_kg && (
                                <TableRow>
                                    <TableCell component='th'>Payload Weight</TableCell>
                                    <TableCell>{launch.rocket.second_stage.payloads[0].payload_mass_kg} kg</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.second_stage.payloads[0].nationality && (
                                <TableRow>
                                    <TableCell component='th'>Nationality</TableCell>
                                    <TableCell>{launch.rocket.second_stage.payloads[0].nationality}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.second_stage.payloads[0].manufacturer && (
                                <TableRow>
                                    <TableCell component='th'>Manufacturer</TableCell>
                                    <TableCell>{launch.rocket.second_stage.payloads[0].manufacturer}</TableCell>
                                </TableRow>
                            )}
                            {launch.rocket.second_stage.payloads[0].orbit && (
                                <TableRow>
                                    <TableCell component='th'>Orbit</TableCell>
                                    <TableCell>{launch.rocket.second_stage.payloads[0].orbit}</TableCell>
                                </TableRow>
                            )}
                            {(launch.links.article_link || launch.links.wikipedia) && (
                                <TableRow>
                                    <TableCell component='th'>More Information</TableCell>
                                    <TableCell>
                                        {
                                            launch.links.article_link && (<Link href={launch.links.article_link}>Article</Link>
                                        )}, {
                                            launch.links.wikipedia && (<Link href={launch.links.wikipedia}>Wikipedia</Link>
                                        )}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {launch.links.youtube_id && (
                    <>
                        <Typography variant='h2' className={classes.head}>
                            Video
                        </Typography>
                        <iframe className={classes.video} width="560" height="315" src={`https://www.youtube.com/embed/${launch.links.youtube_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </>
                )}
            </Container>
        </div>
    )
}

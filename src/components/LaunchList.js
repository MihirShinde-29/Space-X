import { useContext, useState, useEffect } from 'react';
import { Launch } from './Launch';
import { Navbar } from './Navbar';
import { GlobalContext } from '../context/GlobalStates';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    head: {
        marginBottom: theme.spacing(4),
        color: 'white',
        fontWeight: '600'
    }
}))

export const LaunchList = ({ change }) => {
    const classes = useStyles();

    const { launches, startDate, endDate } = useContext(GlobalContext);

    const unixStartDate = Math.round(+new Date(startDate)/1000);
    const unixEndDate = Math.round(+new Date(endDate)/1000);

    const [launchList, setLaunchList] = useState([]);
    
    useEffect(() => {
        launches.then(data => setLaunchList(data))
    });

    const filteredLaunchList = launchList
                                    .filter(launch => launch.launch_date_unix >= unixStartDate)
                                    .filter(launch => launch.launch_date_unix <= unixEndDate)

    return (
        <div>
            <Typography
                variant='h2'
                align='center'
                className={classes.head}
            >
                Launches
            </Typography>
            <Navbar />
            <Grid 
                container 
                justifyContent='space-around'
                alignItems='center'
                spacing={4}
            >
                { filteredLaunchList.map((launch, index) => (
                        (index < 18) && (<Launch key={index} launch={launchList[launch.flight_number-1]} change={change} />)
                ))}
            </Grid>
        </div>
    )
}

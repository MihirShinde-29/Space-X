import { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { GlobalContext } from '../context/GlobalStates';

const useStyles = makeStyles(theme => ({
    container: {
        background: 'rgb(255, 255, 255, 0.3)',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(5),
        borderRadius: theme.spacing(5)
    },
    head: {
        fontWeight: '600'
    },
    date: {
        marginRight: theme.spacing(2)
    }
}));

export const Navbar = () => {
    const classes = useStyles();
    const { startDate, endDate, changeStartDate, changeEndDate } = useContext(GlobalContext);

    return (
        <div className={classes.container}>
            <Grid 
                container 
                justifyContent='space-around'
                alignItems='center'
            >
                <Grid item xs={12} sm={4}>
                    <Typography 
                        variant='h4'
                        align='center'
                        className={classes.head}
                    >
                        Dates
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            id="start-date"
                            value={startDate}
                            onChange={date => changeStartDate(date)}
                            format="yyyy-MM-dd"
                            label="Start Date"
                            color='secondary'
                            className={classes.date}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            id="end-date"
                            value={endDate}
                            onChange={date => changeEndDate(date)}
                            format="yyyy-MM-dd"
                            label="End Date"
                            color='secondary'
                            className={classes.date}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
        </div>
    )
}

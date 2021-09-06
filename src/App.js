import { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import { AllLaunches } from './pages/AllLaunches';
import { LaunchDetails } from './pages/LaunchDetails';
import { GlobalProvider, GlobalContext } from './context/GlobalStates';
import { makeStyles } from '@material-ui/core/styles';
import "@fontsource/roboto";

const useStyles = makeStyles((theme) => ({
  layer: {
    backgroundImage: 'linear-gradient(rgb(0,0,0, 0.6), rgba(0,0,0, 0.3))',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center ',
    backgroundSize: 'cover',
    top: 0,
    height: '100%',
    width: '100%',
    paddingBottom: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();
  
  const { launches } = useContext(GlobalContext);
  const [flightNumber, setFlightNumber] = useState('0');
  const [launch, setLaunch] = useState([]);
  
    useEffect(() => {
      launches.then(data => setLaunch(data));
    }, [launches]);

  return (
    <GlobalProvider>
      <Router>
        <div className={classes.layer}>
          <Header />
          <Switch>
            <Route path="/" exact>
              <AllLaunches change={setFlightNumber} />
            </Route>
            <Route path={`/Flight-Number`}>
              <LaunchDetails launch={launch} number={flightNumber} />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
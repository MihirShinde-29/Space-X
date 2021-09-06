import { createContext, useReducer } from "react";
import axios from 'axios';
import AppReducer from './AppReducer';

const date = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

// Initial State
const getLaunches = async () => {
    try {
        const resp = await axios.get('https://api.spacexdata.com/v3/launches');
        return resp.data;
    } catch (err) {
        console.error(err);
    }
}

const initialStates = {
    launches: getLaunches(),
    startDate: "2006-03-24",
    endDate: date(),
}

// Create Context
export const GlobalContext = createContext(initialStates);

export const GlobalProvider = ({ children }) => {
    const[state, dispatch] = useReducer(AppReducer, initialStates);

    // Actions
    const changeStartDate = (date) => {
        dispatch({
            type: 'START_DATE',
            payload: date
        });
    }

    const changeEndDate = (date) => {
        dispatch({
            type: 'END_DATE',
            payload: date
        });
    }

    return (
        <GlobalContext.Provider value={{
            launches: state.launches,
            startDate: state.startDate,
            endDate: state.endDate,
            changeStartDate,
            changeEndDate,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
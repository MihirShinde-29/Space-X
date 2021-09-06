export default (state, action) => {
    switch(action.type) {
        case 'START_DATE':
            return {
                ...state,
                startDate: action.payload
            };
        case 'END_DATE':
            return {
                ...state,
                endDate: action.payload
            };
        default: 
            return state; 
    }
}

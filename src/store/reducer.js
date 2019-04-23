import { types } from './actions';

export default function reducer(state, { type, payload }){
    switch (type){

        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                data: payload
            };

        case types.GET_TEMPLATES_SUCCESS:
            return {
                ...state,
                schema: payload
            };

        case types.CHANGE_TYPE_OF_VIEW:
            return {
                ...state,
                currentView: payload
            };

        default:
            return state;
    }
}
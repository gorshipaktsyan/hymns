import {createAction, createReducer} from "redux-action";

const GET_MENU = "GET_MENU";

const getMenu = createAction(GET_MENU, () => {
   
});

export const actions = {
    getMenu
};

const initialState = {
    menu : []
};

const HymnReducer = createReducer(initialState, ({
    [GET_MENU]: (actionPayload, state) => {
        if (actionPayload.message) {
            return { ...state, menu: [], errorMessage: actionPayload.message };
        }
        return { ...state, menu: actionPayload.data, errorMessage: ''};
    },
}));

export default HymnReducer;
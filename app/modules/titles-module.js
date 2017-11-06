import {createAction, createReducer} from "redux-action";
import getTitles from './../services/TitlesService'

const SEARCH_TITLES = "SEARCH_TITLES";

const searchTitles = createAction(SEARCH_TITLES, () => {
    return getTitles().then(function (titles) {
        return titles
    }).catch(function (error) {
        return error
    })
});

export const actions = {
    searchTitles
};

const initialState = {
   titles: []
};

const TitlesReducer = createReducer(initialState, ({
    [SEARCH_TITLES]: (actionPayload, state) => {
        return { ...state, titles: actionPayload };
    },
}));

export default TitlesReducer;

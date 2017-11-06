import {createAction, createReducer} from "redux-action";
import getHymn from './../services/HymnService'

const SEARCH_HYMN = "SEARCH_HYMN";

const searchHymn = createAction(SEARCH_HYMN, (hymnNumber) => {
    return getHymn(hymnNumber).then(function (hymn) {
        return {hymnNumber, hymn}
    }).catch(function (error) {
        return error
    })
});

export const actions = {
    searchHymn
};

const initialState = {
    hymnNumber : "",
    hymn : ""
};

const searchReducer = createReducer(initialState, ({
    [SEARCH_HYMN]: (actionPayload, state) => {
        return { ...state, ...actionPayload};
    },
}));

export default searchReducer;

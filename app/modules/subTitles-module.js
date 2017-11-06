import {createAction, createReducer} from "redux-action";
import getSubTitles from './../services/SubTitlesService'
import getHymns from './../services/HymnsService'

const SEARCH_SUB_TITLES = "SEARCH_SUB_TITLES";
const SEARCH_HYMNS = "SEARCH_HYMNS";

const searchSubTitles = createAction(SEARCH_SUB_TITLES, (titleId) => {
    return getSubTitles(titleId).then(function (subTitles) {
        return subTitles
    }).catch(function (error) {
        return error
    })
});

const searchHymns = createAction(SEARCH_HYMNS, (subTitleId) => {
    return getHymns(subTitleId).then(function (hymns) {
        return hymns
    }).catch(function (error) {
        return error
    })
});

export const actions = {
    searchSubTitles,
    searchHymns
};

const initialState = {
    subTitles: [],
    hymns: []
};

const SubTitlesReducer = createReducer(initialState, ({
    [SEARCH_SUB_TITLES]: (actionPayload, state) => {
        return { ...state, subTitles: actionPayload };
    },
    [SEARCH_HYMNS]: (actionPayload, state) => {
        return { ...state, hymns: actionPayload };
    },
}));

export default SubTitlesReducer;


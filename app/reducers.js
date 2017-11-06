import { combineReducers } from "redux";
import HymnReducer from "./modules/hymn-module";
import SearchReducer from "./modules/search-module";
import TitlesReducer from "./modules/titles-module";
import SubTitlesReducer from "./modules/subTitles-module";

const rootReducer= combineReducers({
    hymn: HymnReducer,
    search: SearchReducer,
    titles: TitlesReducer,
    subTitles: SubTitlesReducer
});

export default rootReducer;

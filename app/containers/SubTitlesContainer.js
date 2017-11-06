import {connect} from "react-redux";
import {actions} from "../modules/subTitles-module";
import {actions as searchActions} from "../modules/search-module";
import SubTitlesComponent from "../components/SubTitlesComponent";

const mapStateToProps = (store) => {
    return ({
        subTitles: store.subTitles.subTitles,
        hymns: store.subTitles.hymns,
    });
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        searchHymns: (subTitleId) => {
            dispatch(actions.searchHymns(subTitleId));
        },
        searchHymn: (hymnNumber) => {
            dispatch(searchActions.searchHymn(hymnNumber));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubTitlesComponent);

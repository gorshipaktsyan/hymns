import {connect} from "react-redux";
import {actions} from "../modules/subTitles-module";
import TitlesComponent from "../components/TitlesComponent";

const mapStateToProps = (store) => {
    return ({
        titles: store.titles.titles,
    });
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        searchSubTitles: (titleId) => {
            dispatch(actions.searchSubTitles(titleId));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TitlesComponent);
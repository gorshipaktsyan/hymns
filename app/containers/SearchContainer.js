import {connect} from "react-redux";
import {actions} from "../modules/search-module";
import SearchComponent from "../components/SearchComponent";

const mapStateToProps = (store) => {
    return ({
        menu: store
    });
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        searchHymn: (hymnNumber) => {
            dispatch(actions.searchHymn(hymnNumber));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);

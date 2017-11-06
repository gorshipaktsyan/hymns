import {connect} from "react-redux";
import {actions} from "../modules/hymn-module";
import HymnComponent from "../components/HymnComponent";

const mapStateToProps = (store) => {
    return ({
        hymnNumber: store.search.hymnNumber,
        hymn: store.search.hymn
    });
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        getPredicts: (url, params) => {
            dispatch(actions.getPredicts(url, params));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HymnComponent);

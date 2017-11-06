import {connect} from "react-redux";
import {actions} from "../modules/titles-module";
import ControlPanel from "../components/ControlPanel";

const mapStateToProps = (store) => {
    return ({
    });
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        searchTitles: () => {
            dispatch(actions.searchTitles());
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlPanel);

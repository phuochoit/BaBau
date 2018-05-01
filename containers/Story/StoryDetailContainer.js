//react redux
import { connect } from 'react-redux';

import StoryDetailComponent from "../../components/Story/StoryDetailComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { updattingStoryFavouriteAction } from "../../actions/actionStory";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onUpdattingStoryFavourite: (action) => {
            dispatch(updattingStoryFavouriteAction(action))
        },

    }
};

const StoryDetailContainer = connect(mapStateToProps, mapDispatchToProps)(StoryDetailComponent);
export default StoryDetailContainer;
//react redux
import { connect } from 'react-redux';

import StoryComponent from "../../components/Story/StoryComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchStoryAction, fetchStoryFavouriteAction, fetchStoryMoreAction, updattingStoryFavouriteAction} from "../../actions/actionStory";

const mapStateToProps = (state) => {
   
    return {
        isConnected: state.isConnected.isConnected,
        story: state.story.story
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchStory: () => {
            dispatch(fetchStoryAction())
        },
        onfetchStoryFavourite: (action) => {
            dispatch(fetchStoryFavouriteAction(action))
        },
        onfetchStoryMore: (action) => {
            dispatch(fetchStoryMoreAction(action))
        },
        onUpdattingStoryFavourite: (action) => {
            dispatch(updattingStoryFavouriteAction(action))
        },
    }
};

const StoryContainer = connect(mapStateToProps, mapDispatchToProps)(StoryComponent);
export default StoryContainer;
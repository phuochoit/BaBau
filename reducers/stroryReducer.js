import { FETCH_STORY, FETCH_STORY_MORE, FETCH_STORY_FAVOURITE, UPDATING_STORY_FAVOURITE, FETCH_STORY_SUCCEEDED, FETCH_STORY_MORE_SUCCEEDED, FETCH_STORY_FAVOURITE_SUCCEEDED, UPDATING_STORY_FAVOURITE_SUCCEEDED, FETCH_STORY_FAILED } from "../actions/actionsTypes";
import { concat, filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    story: {
        all: [],
        favourite: []
    }
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STORY:
            return { ...state, currentlySending: true }
        case FETCH_STORY_SUCCEEDED:
            return {
                ...state, currentlySending: false, story: {
                    ...state.story,
                    all: action.result
                }
            }
        case FETCH_STORY_MORE_SUCCEEDED:
            return {
                ...state, currentlySending: false, story: {
                    ...state.story,
                    all: concat(state.story.all, action.result)
                }
            }
        case FETCH_STORY_FAVOURITE_SUCCEEDED:
            return {
                ...state, currentlySending: false, story: {
                    ...state.story,
                    favourite: action.result
                }
            }
            
        case UPDATING_STORY_FAVOURITE_SUCCEEDED:
            
            return {
                ...state, story: {
                    ...state.story,
                    all: filter(state.story.all, function (val, key) {
                        if (action.result.id === val._id) {
                            return { ...val, is_favourite: (val.is_favourite === 0) ? 1 : 0  }
                        } else {
                            return val
                        }
                    })
                }
            }
        case FETCH_STORY_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default storyReducer;
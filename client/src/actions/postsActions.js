// import everything from actions as API
import * as api from '../api';

// Action creators, functions that return actions
// Because fetching posts take time, it is async

// action for grabbing all the posts
export const getPosts = () => async (dispatch) => {
    try {
        // try grabbing data (posts)
        const { data } = await api.fetchPosts();

        // action needs type
        // payload is the property that holds actual data in a redux action object
        const action = { type: 'FETCH_ALL', payload: data }

        // dispatching action to the store
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (newPost) => async (dispatch) => {
    try {
        // sending post api request to backend server
        const { data } = await api.createPost(newPost);

        // dispatches action to the store
        dispatch({ type: 'CREATE', payload: data });
        
    } catch (error) {
        console.log(error);
    }
}

export const reversePosts = (reverse) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        if (reverse) {
            dispatch({ type: 'FETCH_ALL', payload: data });
        } else {
            dispatch({ type: 'FETCH_ALL', payload: data.reverse() });
        }
    } catch (error) {
        console.log(error);
    }
}
import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actions';

//Action Creators

//to fetch all posts:
export const getPosts = () => async (dispatch) => {
    try{
      const {data} = await api.fetchPosts();  

      dispatch({type: FETCH_ALL, payload: data})
    }
    catch(error){
        console.log(error)
    }
  }
  // to create a new post:
  export const createPost = (post)  => async (dispatch) => {
      try{
          const {data} = await api.createPost(post);

          dispatch({type: CREATE, payload: data})
      }
      catch(error){
          console.log(error)
      }
}
// to update a post:
export const updatePost = (id, post)  => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data})
    }
    catch(error){
        console.log(error)
    }
}
// to delete a post
export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    }
    catch(error){
        console.log(error)
    }
}
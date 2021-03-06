import axios from 'axios';
// URL for my deployed API on heroku:
const url = 'https://vhs-api.herokuapp.com/posts';

// API calls to my database 
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
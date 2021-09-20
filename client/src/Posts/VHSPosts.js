import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux';
import Post from './Post/Post';

// map of all current posts to render in 'entries' section:
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts)

    
    return(
        !posts.length ? <CircularProgress /> : (
            <div>
            <h2 style={{textAlign: "center"}}>ENTRIES</h2>
        <Container className="post-box">
            {posts.map((post) => (
                <div key={post._id}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                    <hr/>
                </div>
            ))}
            
        </Container>
        </div>
        )
    )
}
export default Posts;
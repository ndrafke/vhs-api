import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


import { CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux';

import Post from './Post/Post';

// map of all current posts to render table in 'entries' section:
const Posts = (post, {setCurrentId}) => {

    
    const posts = useSelector((state) => state.posts);

    
    return(
        !posts.length ? <CircularProgress /> : (
            <div>
            <h2 style={{textAlign: "center"}}>ENTRIES</h2>
        <Container className="post-box">
          
        <Post setCurrentId={setCurrentId} post={[{key: post._id, title: post.title, movieYear: post.movieYear, vhsYear: post.vhsYear, vhsCompany: post.vhsCompany, genre: post.genre, vhsId: post.vhsId, clamShell: post.clamShell}]}/>
       
        </Container>
        </div>
        )
    )
}
export default Posts;
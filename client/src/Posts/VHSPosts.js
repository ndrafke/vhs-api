import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
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
        <Table responsive striped bordered hover>
        <thead>
              <tr>
                <th>Title</th>
                <th>Movie Release Year</th>
                <th>VHS release Year</th>
                <th>VHS Company</th>
                <th>Genre</th>
                <th>VHS Catalog ID</th>
                <th>Clamshell Case?</th>
                <th></th>
              </tr>
            </thead> 
            {posts.map((post) => (
                  
                  
                <tbody key={post._id}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </tbody>
                
            ))}
          </Table> 
        </Container>
        </div>
        )
    )
}
export default Posts;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table'
import {useDispatch} from 'react-redux';
import {deletePost} from '../../actions/posts';

// Component for how each individual post will display:
const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();

    //Pulls id from database for updating posts button:
    const editEntry = () => {
        setCurrentId(post._id)
    }
    // For button to delete a post:
    const deleteEntry = () => {
        dispatch(deletePost(post._id))
    }


    return(
    <Container>
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
         <tbody>
    <tr>
      <td>{post.title}</td>
      <td>{post.movieYear}</td>
      <td>{post.vhsYear}</td>
      <td>{post.vhsCompany}</td>
      <td>{post.genre}</td>
      <td>{post.vhsId}</td>
      <td>{post.clamShell}</td>
      <td><DropdownButton size="sm" variant="outline-secondary" id="dropdown-basic-button" title="" drop="up" className="post-button">
        <Dropdown.Item size="sm" href="#form" onClick={editEntry}>Edit</Dropdown.Item>
        <Dropdown.Item size="sm" href="#form" onClick={deleteEntry}>Delete</Dropdown.Item>
        </DropdownButton></td>
    </tr>
         </tbody>
        </Table>
     </Container>
    )

    }
export default Post;
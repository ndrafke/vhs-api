import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
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
        <div className = "container">
        <div className="row">
        <div className="col-sm-10 d-flex flex-row align-items-center">
        <p>{post.title}({post.movieYear})</p>
        </div>
        <div className="col-sm-2 d-flex align-items-center">
      <DropdownButton size="sm" variant="outline-secondary" id="dropdown-basic-button" title="" className="post-button">
        <Dropdown.Item size="sm" >Movie Release Year:{post.movieYear}</Dropdown.Item>
        <Dropdown.Item size="sm" >VHS Release:{post.vhsYear}</Dropdown.Item> 
        <Dropdown.Item size="sm" >VHS Company:{post.vhsCompany}</Dropdown.Item>
        <Dropdown.Item size="sm" >Genre:{post.genre}</Dropdown.Item>
        <Dropdown.Item size="sm" >VHS ID Code:{post.vhsId}</Dropdown.Item>
        <Dropdown.Item size="sm" >Clamshell Case?:{post.clamShell}</Dropdown.Item> 
        <Dropdown.Item size="sm" href="#form" onClick={editEntry}>Edit</Dropdown.Item>
        <Dropdown.Item size="sm" href="#form" onClick={deleteEntry}>Delete</Dropdown.Item>
        </DropdownButton>
        </div>
        </div>
  </div> 
     
      
     </Container>
    )

    }
export default Post;
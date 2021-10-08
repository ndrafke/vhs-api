import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../actions/posts';


// Component for how each individual post will display:
const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();
    
    
    // Pulls id from database for updating posts button:
    const editEntry = () => {
      setCurrentId(post._id)
}
// For button to delete a post:
     const deleteEntry = () => {
       dispatch(deletePost(post._id))
     }
    
    // //exports data in table row
    return( 
      <tr>
      <td>{post.title}</td>
      <td>{post.movieYear}</td>
      <td>{post.vhsYear}</td>
      <td>{post.vhsCompany}</td>
      <td>{post.genre}</td>
      <td>{post.vhsId}</td>
      <td>{post.clamShell}</td>
      <td style={{textAlign: "center"}}>
      <DropdownButton size="sm" variant="outline-secondary" id="dropdown-basic-button" title="" drop="left" className="post-button">
        <Dropdown.Item size="sm" href="#form" onClick={editEntry}>Edit</Dropdown.Item>
        <Dropdown.Item size="sm" href="#form" onClick={deleteEntry}>Delete</Dropdown.Item>
        </DropdownButton>
      </td>
      </tr>
    )
    }
export default Post;
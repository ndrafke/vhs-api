import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table'
import {useDispatch} from 'react-redux';
import {deletePost} from '../../actions/posts';
import sortTable from './sortTable';

// Component for how each individual post will display:
const Post = ({post, setCurrentId}, props) => {
    const dispatch = useDispatch();
    
    const {posts, requestSort, sortConfig} = sortTable(props.post);

    const getName = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
      };
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
        <Table responsive striped bordered hover size="sm">
        <thead>
              <tr>
                <th><button type="button" onClick={() => requestSort('title')} className={getName('title')}>Title</button></th>
                <th><button type="button" onClick={() => requestSort('movieYear')} className={getName('movieYear')}>Movie Release Year</button></th>
                <th><button type="button" onClick={() => requestSort('vhsYear')} className={getName('vhsYear')}>VHS release Year</button></th>
                <th><button type="button" onClick={() => requestSort('vhsCompany')} className={getName('vhsCompany')}>VHS Company</button></th>
                <th><button type="button" onClick={() => requestSort('genre')} className={getName('genre')}>Genre</button></th>
                <th><button type="button" onClick={() => requestSort('vhsId')} className={getName('vhsId')}>VHS Catalog ID</button></th>
                <th><button type="button" onClick={() => requestSort('clamShell')} className={getName('clamShell')}>Clamshell Case?</button></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
       {posts.map((data) =>(          
    <tr key={data._id}>
      <td>{data.title}</td>
      <td>{data.movieYear}</td>
      <td>{data.vhsYear}</td>
      <td>{data.vhsCompany}</td>
      <td>{data.genre}</td>
      <td>{data.vhsId}</td>
      <td>{data.clamShell}</td>
      <td style={{textAlign: "center"}}><DropdownButton size="sm" variant="outline-secondary" id="dropdown-basic-button" title="" drop="left" className="post-button">
        <Dropdown.Item size="sm" href="#form" onClick={editEntry}>Edit</Dropdown.Item>
        <Dropdown.Item size="sm" href="#form" onClick={deleteEntry}>Delete</Dropdown.Item>
        </DropdownButton></td>
    </tr> 
    ))}  
    </tbody> 
    </Table>
    )
    }
export default Post;
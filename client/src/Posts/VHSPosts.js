import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table'
import Post from './Post/Post';
import sortTable from './Post/sortTable';
// map of all current posts to render table in 'entries' section:
const Posts = ({setCurrentId}) => {

    
    const posts = useSelector((state) => state.posts);

    // Import sortTable hook and apply to post entries: 
    const {data, requestSort, sortConfig} = sortTable(posts);

    // Action for accessing each column by className for sorting:
    const getName = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return(
        !data.length ? <CircularProgress /> : (
            <div>
            <h2 style={{textAlign: "center"}}>ENTRIES</h2>
        <Container className="post-box">
        <Table responsive striped bordered hover>
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
            {data.map((post) => (

                <tbody key={data._id}>
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
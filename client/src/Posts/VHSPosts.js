import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
        <Table responsive striped bordered hover style={{fontSize: "0.9rem"}}>
        <thead>
              <tr>
              <th style={{textAlign: "center"}}>
                <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('title')} className={getName('title')} style={{fontSize: "0.7rem"}}>Title</Button>
                </th>
                <th style={{textAlign: "center"}}>
                  <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('movieYear')} className={getName('movieYear')} style={{fontSize: "0.7rem"}}>Movie Release Year</Button>
                  </th>
                <th style={{textAlign: "center"}}>
                  <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('vhsYear')} className={getName('vhsYear')} style={{fontSize: "0.7rem"}}>VHS release Year</Button>
                  </th>
                <th style={{textAlign: "center"}}>
                  <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('vhsCompany')} className={getName('vhsCompany')} style={{fontSize: "0.7rem"}}>VHS Company</Button>
                  </th>
                <th style={{textAlign: "center"}}>
                  <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('genre')} className={getName('genre')} style={{fontSize: "0.7rem"}}>Genre</Button>
                  </th>
                <th style={{textAlign: "center"}}>
                  <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('vhsId')} className={getName('vhsId')} style={{fontSize: "0.7rem"}}>VHS Catalog ID</Button>
                  </th>
                <th style={{textAlign: "center"}}>
                  <Button type="button" variant="secondary" size="sm" onClick={() => requestSort('clamShell')} className={getName('clamShell')} style={{fontSize: "0.7rem"}}>Clamshell Case?</Button>
                  </th>
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
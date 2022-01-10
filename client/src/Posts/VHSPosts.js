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
        <div className="post-box">
        <table responsive striped bordered hover style={{fontSize: "0.9rem"}} className="sticky-table">
        <thead>
              <tr className="tr-black">
              <th onClick={() => requestSort('title')} className={getName('title')}>
                Title
                </th>
                <th onClick={() => requestSort('movieYear')} className={getName('movieYear')}>
                  Movie Release Year
                  </th>
                <th onClick={() => requestSort('vhsYear')} className={getName('vhsYear')}>
                  VHS release Year
                  </th>
                <th onClick={() => requestSort('vhsCompany')} className={getName('vhsCompany')}>
                  VHS Company
                  </th>
                <th onClick={() => requestSort('genre')} className={getName('genre')}>
                  Genre
                  </th>
                <th onClick={() => requestSort('vhsId')} className={getName('vhsId')}>
                  VHS Catalog ID
                  </th>
                <th onClick={() => requestSort('clamShell')} className={getName('clamShell')}>
                  Clamshell Case?
                  </th>
                <th></th>
              </tr>
            </thead> 
            {data.map((post) => (

                <tbody key={data._id}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </tbody>

            ))}
            
          </table>      
        </div>
        </div>
        )
    )
}
export default Posts;
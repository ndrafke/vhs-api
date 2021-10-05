import React, {useState, useMemo} from 'react';
import {useSelector} from 'react-redux';
const sortTable = (config = null) => {
    const posts = useSelector((state) => state.posts);
    const [sortConfig, setSortConfig] = useState(config);

    
    
    const sortedData = useMemo(() => {
    let sortableData = [...posts];
    if (sortConfig !== null){
    sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
      return sortableData
    }, [posts, sortConfig])
     
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
        console.log(posts)
      }
     
    return { posts: sortedData, requestSort, sortConfig}

}
export default sortTable;
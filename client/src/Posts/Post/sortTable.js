import {useState, useMemo} from 'react';

const sortTable = (data, config = null) => {
    
    const [sortConfig, setSortConfig] = useState(config);

    
    //useMemo hook to initialize sorting of each table column:
    const sortedData = useMemo(() => {
    let sortableData = [...data];
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
    }, [data, sortConfig])
    
    //Function for onClick action for each table column:
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
        console.log(data)
      }
     
    return { data: sortedData, requestSort, sortConfig}

}
export default sortTable;
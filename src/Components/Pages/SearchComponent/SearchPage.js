import { Input } from 'antd';
import React from 'react'

const SearchPage = ({setFilteredList,filteredList,data}) => {
    // function for filtering data or searching data
    const FilteringData = (event) => {
        // Access input value
        const query = event.target.value;
        var valuesearch = query.toLowerCase();
        // search after 1 second
        setTimeout(() => {

        // Create copy of item list
        var listupdated = [...data];
        console.log(query,'listdata')
        listupdated = listupdated.filter((item) => {
            return Object.keys(item).some(key => item[key].toString().toLowerCase().search(valuesearch) !== -1);
        });
        console.log(listupdated,'list')
        // Trigger render with updated values
        setFilteredList(listupdated);
        console.log(listupdated,'list2',filteredList,'filter')
    }, 1000); // 1000 milliseconds = 1 second

      };
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <Input.Search
        style={{ flex: '1', marginRight: '10px' }}
        placeholder="Search Data"
        enterButton
        onChange={FilteringData}
    />
    {/* testing input*/}
    {/* <input id="search-box" onChange={FilteringData} /> */}
</div>
  )
}

export default SearchPage

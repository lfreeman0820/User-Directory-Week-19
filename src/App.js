import React, {useState} from 'react';
import './App.css';
import {getUsers} from './API';
// console.log(arr2.sort((a,b)=> {
//   if(a<b){
//       return 1
//   }else if(a>b){
//       return -1
//   }else{
//       return 0
//   }
// }))
function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState({list:[]});
  const [sortOrder, setSortOrder] = useState(1)

  const handleGetUsers = ({target:{name}}) => {
    getUsers(name).then(({data})=>{
      console.log(data);
      setUsers(data.results);
      setFilteredUsers({list:data.results})
    })
  }

  const handleFilter = e => {
    const val = e.target.value.toLowerCase();
    const filtered = users.filter(function(item){
      return item.name.first.toLowerCase().includes(val) || item.name.last.toLowerCase().includes(val) || item.email.includes(val)
    });
    setFilteredUsers({list:filtered});
  }

  const handleSortByFirstname = () =>{
    const sorted = filteredUsers.list.sort(function(a,b){
      if(a.name.first < b.name.first){
        return -1*sortOrder
      }else if(a.name.first > b.name.first){
        return 1*sortOrder
      }else{
        return 0
      }
    })
    setFilteredUsers({list:sorted});
    setSortOrder(-sortOrder)
  }

  return (
    <>
    <div className="jumbotron" style={{textAlign:"center"}}>
      <h1>Employee Directory</h1>
    </div>
    <div className="container" style={{textAlign:"center"}}>
      <input onChange={handleFilter} style={{width:"30%"}} placeholder="search employee here"/> <button onClick={handleGetUsers} name="50" className="btn btn-warning btn-lg">Get 50 Random Users</button> <button onClick={handleGetUsers} name="200" className="btn btn-warning btn-lg">Get 200 Random Users</button>
      <table className="table mt-5 table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th onClick={handleSortByFirstname} scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.list.map(function(item){
      //take each arr item and modify
      //return that modified data
       return <tr>
      <th scope="row"><img src={item.picture.thumbnail}/></th>
      <td>{item.name.first}</td>
      <td>{item.name.last}</td>
      <td>{item.cell}</td>
      <td>{item.email}</td>
      <td></td>
    </tr>
    })}
  </tbody>
</table>
    </div>
    
    </>
  );
}

export default App;

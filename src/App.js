
import './App.css';
import react,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [users,setUsers]=useState([])
  const [loadUser,setLoaduser]=useState(true)
  const getUsers =()=>{ axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{setLoaduser(false)
setUsers(res.data)

})

.catch((err)=>console.log(err))
}
useEffect(()=>{getUsers();},[])

  return (
    <div >
      {loadUser?(<h1>.......loading</h1>):(users.map((user)=>
      <div
key={user.id}>
  <h1>name :{user.name}</h1>
  <h3>user name:{user.username}</h3>
  <h3>phone:{user.phone}</h3>
  <h3>e-mail:{user.email}</h3>
        </div>
         
      ))}
    </div>
  );
}

export default App;

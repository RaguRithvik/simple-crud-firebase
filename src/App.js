/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'

function App() {
  //getDB All db
  const getDataBase = collection(db,'users');
  const [users, setUsers] = useState([]);
  console.log(users)
  //AddDetails
  const [name, setName] =useState();
  const [age, setAge] =useState();
    //addUserDetails
    const addUserDetails = async () =>{
      await addDoc(getDataBase,{name:name,age:age})
    }
    //DeleteDetails
    const deleteUser = async (id) =>{
      //we use doc not getdb ? bcz getdb whole db collection
      await deleteDoc(doc(db,'users',id))
    }
    //UpdateDetails
    const editAge = async(id, age) => {
      const addage = {age:age+1};
      const getUserID = doc(db,'users',id)
      await updateDoc(getUserID,addage)
    }
    useEffect(() => {
      //GetData
      const getUsers = async () => {
      const data = await getDocs(getDataBase);
      setUsers(data.docs.map((doc) =>({...doc.data(), id: doc.id})))
      }
      getUsers()
    }, [])
  return (
    <div className="App">
      <input placeholder='Enter Name' onChange={(e) =>setName(e.target.value)}/> 
      <input placeholder='Enter Age' onChange={(e) =>setAge(e.target.value)}/>
      <button onClick={addUserDetails}>Add Users</button>
      {users.map((data,index)=>(
        <div key={index}>
          <h3>Name: {data.name}</h3>
          <h3>Age: {data.age}</h3>
          <button onClick={()=>editAge(data.id,data.age)}>Edit</button>
          <button onClick={()=>deleteUser(data.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;

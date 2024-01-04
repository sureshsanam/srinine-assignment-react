import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './styles.css'; 
// Sno, User Id, User Name, Email Id, Mobile No, Address

function AddUser(){
    const navigate = useNavigate();
    const [user,setUser] = useState({
        userId:"",
        userName:"",
        emailId:"",
        mobileNo:'',
        address:''
        
        
    })
    const handleSubmit = (event)=>{
        event.preventDefault()
            var userDetails = []
            var getUserDetails  = JSON.parse(localStorage.getItem('userDetails'))
            console.log("getUserDetails",getUserDetails)
            if(getUserDetails){
                getUserDetails.unshift(user)

            localStorage.setItem("userDetails", JSON.stringify(getUserDetails));

            }
            else{
                userDetails.unshift(user)
            localStorage.setItem("userDetails", [JSON.stringify(userDetails)]);

            }
            navigate("/");

    }
    return(
      <div>
          <form onSubmit={handleSubmit} className="user-form">
            <h1>Add User</h1>

            <label>UserName:
                <input type="text" onChange={ (e)=>{setUser(usr => ({...usr,"userName" :e.target.value}))}} className="inputStyle" />
            </label>
            <label>User Id:
                <input type="text" onChange={ (e)=>{setUser(usr => ({...usr,"userID" :e.target.value}))}} />
            </label>
            <label>Email Id:
                <input type="text" onChange={ (e)=>{setUser(usr => ({...usr,"emailId" :e.target.value}))}} />
            </label>
            <label>Mobile No:
                <input type="Number" onChange={ (e)=>{setUser(usr => ({...usr,"mobileNo" :e.target.value}))}} />
            </label>
            <label>Address:
                <input type="text" onChange={ (e)=>{setUser(usr => ({...usr,"address" :e.target.value}))}} />
            </label>
            <input type="submit" />
         </form>
      </div>
    )
  }
  
  export default AddUser
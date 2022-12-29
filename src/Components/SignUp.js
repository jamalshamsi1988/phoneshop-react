
import React, { useState } from 'react';


const SignUp= ()=> {

const [data , setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAccepted:false
})

const changeHandeler= event =>{

    if(event.target.name === "isAccepted"){
        setData({...data,[event.target.name]:event.target.checked} )
    }else{
        setData({...data ,[event.target.name]:event.target.value})
    }
}

  return (
    <div>
      <form>
        <div>
            <label>Name</label>
            <input type="text" name='name' value={data.name} />
        </div>
        <div>
            <label>Email</label>
            <input type="text" name='email' value={data.email} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name='password' value={data.password} />
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" name='password' value={data.confirmPassword} />
        </div>
        <div>
            <label>I accepted terms and policy</label>
            <input type="checkbox" name='isAccepted' value={data.isAccepted} />
        </div>

        <div>
            <a href='#'>Login</a>
            <button type='submit'>SignUp</button>
        </div>


      </form>
    </div>
  )
}

export default SignUp;
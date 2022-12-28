import React from 'react';
import { useNavigate,Link,Outlet} from 'react-router-dom';
import useTitle from '../hooks/useTitle';

 const AboutUs =()=> {
  
  useTitle("AboutUs");

    const navigate=useNavigate();

    const clickHandler =()=>{
        navigate("/");
    }
    return (
      <div>
        <h1>About Us</h1>
        <ul>
          <li><Link to="programmers">Programmers</Link></li>
          <li><Link to="drivers">Drivers</Link></li>
        </ul>
        {/* where show the new componenet(programmers & drivers) */}
        <Outlet/>
        <button onClick={clickHandler}>Go Home Page</button>
      </div>
    )
  }


export default AboutUs;




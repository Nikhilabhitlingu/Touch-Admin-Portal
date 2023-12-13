import React, { useEffect, useState } from 'react';
import Home from './home';
import "../Touch admin portal/home.css";
import Header from './header';
import PageName from './pagename';
import { adminUserAction } from '../search/actionserach';
import { useDispatch, useSelector } from 'react-redux';
import "../Touch admin portal/user.css";

function Users() {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const usersearch = useSelector(state => state.data.data.search_result)||[];

  console.log(usersearch);

  const handleinput = (e) => {
    setinput(e.target.value);
  }

  useEffect(() => {
    dispatch(adminUserAction(input));
  }, [input, dispatch]);

  return (
    <>
      <div className='container'>
        <Home />
        <Header />
      </div>
      <div>
        <PageName Name={"Users"} />
      </div>
      <div className='search'>
        <div className="search-container">
          <form action="/search">
            <input type="text" placeholder="Search.." name="query" value={input} onChange={handleinput} />
            <button type="submit"><i className="fa fa-search"></i></button>
            <h6 className='usercount'>Total Users Count:{usersearch.length}</h6>
          </form>
        </div>
      </div>
      <div>
        <table className='table'>
          <h3 className='user'> All Users</h3>
          <tr className='headings'>
            <td className='first'>UserId</td>
            <td className='second'>UserName</td>
            <td className='third'>First_Name</td>
            <td className='four'>Last_Name</td>
            <td className='five'>UserProfile</td>
          </tr>
          { usersearch.map((user, index) => (
            <tr className='tabledata' key={index}>
              <td className='userid'><h6>{user.userid}</h6></td>
              <td className='imageusername'><img src={user.profile_pic} alt='' width={50} height={50} />
                <h6>{user.username}</h6></td>
              <td ><h6 id='firstname'>{user.first_name}</h6></td>
              <td id='lastname'><h6 id='lastname'>{user.last_name}</h6></td>
              <td id='userprofile'><button id='userprofile'>user profile</button></td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}

export default Users;

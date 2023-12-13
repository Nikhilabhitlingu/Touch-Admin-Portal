import React, { useEffect } from 'react';
import Home from './home';
import "../Touch admin portal/home.css";
import Header from './header';
import PageName from './pagename';
import { useDispatch, useSelector } from 'react-redux';
import "../Touch admin portal/reports.css";

import { fetchReports } from '../reports/reportsaction';

function Reports() {
  const report = useSelector(state => state.data.data)||[];
  const dispatch = useDispatch();
  console.log(report);
  

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  return (
    <>
      <div className='container'>
        <Home />
        <Header />
      </div>
      <PageName Name={"Reports"} />
      <div className='block'>
        <h4 className='report'>Total Reports Count:{}</h4>
        </div>
          <table className='table'>
            <h3 className='user'> All Reports</h3>
            <tr className='headings'>
              <td className='first'>UserId</td>
              <td className='second'>UserImage</td>
              <td className='third'>UserName</td>
              <td className='four'>PostID</td>
              <td className='five'>ReportCount</td>
              <td className='first'>Reason</td>
              <td className='first'>BlockUser</td>
              <td className='first'>UnblockUser</td>
            </tr>
            {report.map((user, key) => (
  <tr key={key} className='tabledata'>
    <td className='userid'><h6>{user.userid}</h6></td>
    <td className='imageusername'><img src={user.profile_pic} alt='' width={50} height={50}/></td>
    <td><h6>{user.username}</h6></td>
    <td><h6 id='firstname'>{user.activity_id}</h6></td>
    <td id='lastname'><h6 id='lastname'>{user.reports_count}</h6></td>
    <td>{user.reason}</td>
    <td id='userprofile'><button id='userprofile'>block</button></td>
    <td id='userprofile'><button id='userprofile'>unblock</button></td>
  </tr>
))}
          </table>
        
     
    </>
  );
}

export default Reports;

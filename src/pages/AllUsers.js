import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination'; 
import './AllUsers.css'; 

function AllUsers() {
  const [userDetails, setUserDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const userDetailsString = localStorage.getItem('userDetails');
    const userDetailsArray = userDetailsString ? JSON.parse(userDetailsString) : [];

    setUserDetails(userDetailsArray);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userDetails.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const filteredUsers = currentItems.filter((user) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      user.userName.toLowerCase().includes(searchValue) ||
      user.emailId.toLowerCase().includes(searchValue) ||
      user.mobileNo.toLowerCase().includes(searchValue) 
    );
  });

  return (
    <div className="main-container">
      <div className="container">
        <div className="top-buttons">
          <Link to="/add">
            <button className="add-user-button">Add User</button>
          </Link>
          <input type="search"
             placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
         />
        </div>

        <div>
          {filteredUsers.length > 0 ? (
        <table className="responsive-table">
         <thead>
              <tr>
                <th>SNo</th>
                <th>UserId</th>
                <th>UserName</th>
                <th>EmailId</th>
                <th>MobileNo</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{user.userID}</td>
                  <td>{user.userName}</td>
                  <td>{user.emailId}</td>
                  <td>{user.mobileNo}</td>
                  <td>{user.address}</td>
                </tr>
              ))}
            </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
        </div>
        <div className="pagination">
          <Pagination itemsPerPage={itemsPerPage} totalItems={userDetails.length} paginate={paginate} />
        </div>
      </div>
    </div>
  );
}

export default AllUsers;

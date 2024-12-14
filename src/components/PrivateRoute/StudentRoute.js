import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const StudentRoute = ({ element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <Route 
      {...rest} 
      element={user && user.role === "Student" ? element : <Navigate to="/login" />} 
    />
  );
};

export default StudentRoute;


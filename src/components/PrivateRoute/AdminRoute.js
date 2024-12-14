import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AdminRoute = ({ element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Route 
      {...rest} 
      element={user && user.role === "Admin" ? element : <Navigate to="/login" />} 
    />
  );
};

export default AdminRoute;

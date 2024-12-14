import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const TeacherRoute = ({ element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Route 
      {...rest} 
      element={user && user.role === "Teacher" ? element : <Navigate to="/login" />} 
    />
  );
};

export default TeacherRoute;

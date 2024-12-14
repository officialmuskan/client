import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  
  useNavigate,
} from "react-router-dom";

import DashBoard from "./pages/DashBoard/Dashboard";
import Settings from "./pages/Settings/Settings";

import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import StudentRoute from "./components/PrivateRoute/StudentRoute";
import TeacherRoute from "./components/PrivateRoute/TeacherRoute";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import AdminCourseInfo from "./pages/Admin/Course/AdminCourseInfo";
import StudentInfo from "./pages/Admin/Student/StudentInfo";
import TeacherInfo from "./pages/Admin/Teacher/TeacherInfo";
import AllCourses from "./pages/All-Courses/AllCourses";
import NotFound from "./pages/404NotFoud/NotFound";

import Home from "./pages/Home";

const Routing = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user)
  useEffect(() => {
    if (!user) {
      history("/")
      // history("/login");
    } else {
      dispatch({ type: "SET__USER", payload: user });
    }
  }, [user, dispatch]);
  return (
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={user && user.role === "Student" ? <DashBoard /> : <Navigate to="/login" />} />
      <Route path="/teacher-dashboard" element={user && user.role === "Teacher" ? <TeacherDashboard /> : <Navigate to="/login" />} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      <Route path="/admin/course-info" element={user && user.role === "Admin" ? <AdminCourseInfo /> : <Navigate to="/login" />} />
      <Route path="/admin/student-info" element={user && user.role === "Admin" ? <StudentInfo /> : <Navigate to="/login" />} />
      <Route path="/admin/teacher-info" element={user && user.role === "Admin" ? <TeacherInfo /> : <Navigate to="/login" />} />
      
      {/* <Route path="/admin-dashboard" element={user && user.role === "Admin" ? <AdminDashboard /> : <Navigate to="/login" />} /> */}
      {/* <Route path="/admin/course-info" element={user && user.role === "Admin" ? <AdminCourseInfo /> : <Navigate to="/login" />} />
      <Route path="/admin/student-info" element={user && user.role === "Admin" ? <StudentInfo /> : <Navigate to="/login" />} />
      <Route path="/admin/teacher-info" element={user && user.role === "Admin" ? <TeacherInfo /> : <Navigate to="/login" />} />
      <Route path="/messages" element={user && user.role === "Student" ? <Messages /> : <Navigate to="/login" />} /> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/all-courses" element={<AllCourses />} />
      <Route path="/course/:id" element={<CourseInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      
        {/* <Header /> */}
        <Routing />
      
    </div>
  );
}

export default App;

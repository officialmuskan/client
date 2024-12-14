import React from "react";
import Styles from "./SidebarAdmin.module.css";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
// import ExitToAppIcon from "@mui/icons-material/ExitToAppIcon";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
const SidebarAdmin = () => {
  return (
    <div className={Styles.sidebarAdmin}>
      <Sidebar title="Dashboard" link="/admin-dashboard" Icon={DashboardIcon} />
      <Sidebar
        title="Course"
        link="/admin/course-info"
        Icon={LocalLibraryIcon}
      />
      <Sidebar
        title="Student"
        link="/admin/student-info"
        Icon={GroupIcon}
      />
      <Sidebar
        title="Teacher"
        link="/admin/teacher-info"
        Icon={PersonIcon}
      />
      <Sidebar title="Logout" link="/admin/teacher-info" Icon={ExitToAppIcon} />
    </div>
  );
};

export default SidebarAdmin;

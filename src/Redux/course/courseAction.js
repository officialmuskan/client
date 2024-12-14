import axios from "axios";
import { GET__COURSES } from "./courseTypes";

export const getCourses = (courseInfo) => {
  return {
    type: GET__COURSES,
    payload: courseInfo,
  };
};

export const fetchCourseInfo = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/get-courses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      });
      dispatch(getCourses(response.data.courses));
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };
};

export const deleteCourseItem = (courseId) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:5000/delete-course", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
          "Content-Type": "application/json",
        },
        data: { courseId },
      });
      dispatch(fetchCourseInfo());
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };
};

import { Container, Paper, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./CourseInfo.module.css";
import NoticeToggle from "./NoticeToggle/NoticeToggle";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseInfo = () => {
  const { id } = useParams();
  console.log(id)
  const [title, setTitle] = useState("")
    
    useEffect(()=>{
      const fetchDetails = async()=>{
        const response = await axios.get(`http://localhost:5000/get-course/${id}`)
        console.log(response)
        setTitle(response.data.course.courseName)
      }
      fetchDetails()
      
    },[])
  return (
    <div>
      <CommonHeader title={title} />
      
      <Container className="my-5">
        <Paper className="px-5 py-3">
          <div className="">
            <div className="d-flex justify-content-between align-items-center my-4">
              <Typography variant="h6">Course Content</Typography>
              <Typography style={{ color: "GrayText" }} variant="subtitle2">
                Course start date: 19/09/20 Category: Jan - Jun 2021
              </Typography>
            </div>
            <NoticeToggle />
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default CourseInfo;

import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Toast_Comp from "../../../../../components/Toast/Toast_Comp";
import Spinner_comp from "../../../../../components/Spinner/Spinner_comp";
import "./AddCourseModal.css";
import { useDispatch } from "react-redux";
import { fetchCourseInfo } from "../../../../../Redux/course/courseAction";

const AddCourseModal = () => {
  const [show, setShow] = useState(false);
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [imgLabel, setImgLabel] = useState("Choose photo");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (courseThumbnail) {
      setImgLabel(courseThumbnail.name);
    }
  }, [courseThumbnail]);

  const courseFormHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDescription", courseDescription);
    formData.append("img", courseThumbnail);

    fetch("http://localhost:5000/post-course", {
      body: formData,
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setToast(true);
        setLoading(false);
        setCourseDescription("");
        setCourseName("");
        setCourseThumbnail("");
        dispatch(fetchCourseInfo());
        dispatch({ type: "UPDATE__COURSE__LIST", payload: true });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleShow}>
        Add Course
      </Button>

      <Toast_Comp
        setToast={setToast}
        renderToast={toast}
        msg="Course Uploaded Successfully"
      />

      <Modal
        size="lg"
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography color="textSecondary" variant="h4">
              Add Course
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Spinner_comp />}

          <Form onSubmit={courseFormHandler} encType="multipart/form-data">
            <Form.Group>
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                required
                onChange={(e) => setCourseName(e.target.value)}
                value={courseName}
                type="text"
                placeholder="Enter course name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                required
                onChange={(e) => setCourseDescription(e.target.value)}
                value={courseDescription}
                as="textarea"
                rows={3}
                placeholder="Enter course description"
              />
            </Form.Group>
            <Form.Group className="input__file">
              <Form.Label>Course Thumbnail</Form.Label>
              <br />
              <Form.Control
                required
                type="file"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
              />
            </Form.Group>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCourseModal;

import React from "react";
import "../assets/css/Slide.css";
import { Link } from "react-router-dom";

export default function Slide() {
  const userExist = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/img/carousel-2.jpg" alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h6 className="text-primary text-uppercase mb-2 animated slideInDown">
                        Best Online Courses
                      </h6>
                      <h1 className="display-4 text-white animated slideInDown">
                        The Best Online Learning Platform
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                        Welcome to E-Shiksha, your gateway to limitless learning!
                        Discover a world of knowledge with our wide range of
                        courses designed to empower and inspire. Start your
                        learning journey today and unlock your full potential!{" "}
                      </p>
                      <Link
                        to="/about"
                        className="btn btn-primary py-md-3 px-md-3 me-4 animated slideInLeft z-5"
                      >
                        Read More
                      </Link>

                      {userExist ? (
                        <Link
                        to="/dashboard"
                        className="btn btn-primary py-md-3 px-md-4 animated slideInRight"
                      >
                        Enroll
                      </Link>
                      ) : (
                        <Link
                        to="/login"
                        className="btn btn-primary py-md-3 px-md-4 animated slideInRight"
                      >
                        Login
                      </Link>
                      )}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        
          
      </div>
    </>
  );
}

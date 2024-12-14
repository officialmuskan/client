import React from 'react'
import { Link } from 'react-router-dom'
import ClassIcon from '@mui/icons-material/Class';
import SchoolIcon from '@mui/icons-material/School';
// import {} from "@fortawesome/fontawesome-svg-core"
export default function Service() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <Link to="/test">
                  <div className="p-5">
                    <SchoolIcon sx={{ fontSize: 60 }}></SchoolIcon>
                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                    <h5 className="mb-3">Online Assessment</h5>
                    <p>Online assessment provides a personalized evaluation of your skills to enhance your learning and development.</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <Link to="/">
                  <div className="p-5 m-1">
                    <ClassIcon sx={{ fontSize: 60 }}></ClassIcon>
                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                    <h5 className="mb-3">Online Classes</h5>
                    <p>Take advantage of our online classes to expand your knowledge and skills.</p>
                  </div>
                </Link>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ResumeGenerator = () => {
  return (
    <>
      <div className="container my-5">
        <h4 className="text-center mt-5">
          Create a job winning Resume in minutes
        </h4>
        <div className='d-flex justify-content-between'>
          <div className="informationDiv shadow border rounded p-5 text-center">
            <FaFileAlt className='text-primary fs-1 mb-3' />
            <h4>Add your informations</h4>
            <p>Add pre-written examples to each section</p>
            <h4>Step-1</h4>
          </div>
          <div className="downloadDiv shadow border rounded p-5 text-center">
            <FaFileDownload className='text-danger  fs-1 mb-3' />
            <h4>Download Your Resume</h4>
            <p>Download and start applying</p>
            <h4>Step-2</h4>
          </div>
        </div>
        <div className="text-center">
          <Link to={'/form'} className='btn btn-primary'>Let's Start</Link>
        </div>
      </div>
    </>
  )
}

export default ResumeGenerator
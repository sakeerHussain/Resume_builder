import React from "react";
import "../pages/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        {/* section 1 */}
        <section className="bg bg-top">
          {/* content on first image */}
          <div className="content">
            <h3>Design to get hired!</h3>
            <h5>our skills, your story, your next job — all in one.</h5>
            <button>Make your Resume</button>
          </div>
        </section>

        {/* First intermittent section */}
        <section className="info">
         <div className="info-content">
           <h2>Resume</h2>
          <p>Modern templates, easy editing, and one-click download.</p>
          <h2>Cover Letters</h2>
          <p>Modern templates, easy editing, and one-click download.</p>
          <h2>Jobs</h2>
          <p>Modern templates, easy editing, and one-click download.</p>
          <h2>Applications</h2>
          <p>Modern templates, easy editing, and one-click download.</p>
         </div>
         <div className="info-image">
          <img src="https://imgs.search.brave.com/KNcMsIJYWuWaZMIZmcnYxwzbWDOFYZq-HZypk95u-Ds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXN1bWVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy9yZXN1bWUt/c2FtcGxlcy1mb3It/V29yZC5wbmc" alt="" />
         </div>
        </section>

        {/* second background image */}
        <section className="bg bg-bottom">
          {/* <div className="content">
            <h2>Get Started Today</h2>
            <button>Create Resume</button>
          </div> */}
        </section>

        {/* testimonial section */}

        <section className="testimonial">
          <h4>Testimonial</h4>
          <div className="testimonial-content">
            {/* Left Content */}
            <div className="testimonial-text">
              <h4>Trusted by professionals worldwide.</h4>
              <p>
                At LiveCareer, we don't just help you create résumés — we help
                you land the job. Whether you're a seasoned professional or just
                starting out, our tools are designed to get results.
              </p>
              <p>
                In fact, users who used LiveCareer reported getting hired an
                average of 48 days faster.
              </p>
            </div>

            {/* Right Grid */}
            <div className="testimonial-grid">
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
              <img
                src="https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg"
                alt="user"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

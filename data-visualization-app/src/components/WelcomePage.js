import React, { useEffect, useState } from 'react';
import './styles/WelcomePage.css';
import studentCareerImage from './images/career-ladder.jpg';
import professorImage from './images/professor.png';
import classesImage from './images/classesImage.png';
import calendarImage from './images/calendarImage.png';
import heroImage from './images/hero.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const WelcomePage = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const welcomeText = 'Welcome to the Computing Careers Club!';

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);




  return (
    <div>
      <section className="hero">
        <div className="hero-image" data-aos="fade-in" data-aos-duration="2000">
          <img src={heroImage} alt="Hero" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </div>
      </section>


        <section className="professor-and-career-guide">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-md-6">
                <h2>Professor of the Month</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={professorImage} alt="Professor of the Month" className="img-fluid shadow" />
                    </div>
                    <div className="col-sm-8 d-flex align-items-center">
                      <div>
                        <h3>Dr. John Smith</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lorem non dolor sodales pulvinar.</p>
                        <button className="btn btn-secondary">Learn More</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2>Student Career Guide</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={studentCareerImage} alt="Student Career Guide" className="img-fluid shadow" />
                    </div>
                    <div className="col-sm-8 d-flex align-items-center">
                      <div>
                        <p>
                          The <a href="https://github.com/CSS-Student-Advisory-Council/css-career-guide">Student Career Guide</a> made by UWB students is a comprehensive resource that provides tips, advice, and information on how to prepare for your career as a student. It covers everything from choosing a major to building your resume and networking with professionals. Check it out and start preparing for your future today!
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="courses-and-events">
          <div className="container">
            <div className="row" data-aos="fade-up">
            <div className="col-md-6">
                <h2>Featured Courses</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={classesImage} alt="Featured Course" className="img-fluid shadow" />
                    </div>
                    <div className="col-sm-8 d-flex align-items-center">
                      <div>
                        <h3>Course Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lorem non dolor sodales pulvinar.</p>
                        <button className="btn btn-secondary">Learn More</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2>Upcoming Events</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={calendarImage} alt="Upcoming Event" className="img-fluid shadow" />
                    </div>
                    <div className="col-sm-8 d-flex align-items-center">
                      <div>
                        <h3>Event Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lorem non dolor sodales pulvinar.</p>
                        <button className="btn btn-secondary">Learn More</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default WelcomePage;

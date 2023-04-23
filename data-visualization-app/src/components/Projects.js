import React from 'react';
import styles from './Projects.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <>
      <div className={styles['some-space']}>
        <div className={styles.container}>
          <div className={styles.text}>
            <center>
              <h2>Computer Careers Club and Student Advisory Projects</h2>
            </center>
          </div>
        </div>
      </div>

      <div className={styles.layer} data-depth="0.4">
        <div id="particles-js"></div>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className="card" style={{ width: '22rem' }}>
            <img src="https://via.placeholder.com/150" alt="Project Image" />
            <div className="card-body">
              <b>
                <h5 className="card-title">Career Guide</h5>
              </b>
              <p className="card-text">
                A comprehensive guide to help students navigate their careers in
                computer science and related fields.
              </p>
              <a
                href="https://css-student-advisory-council.github.io/css-career-guide/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >Visit Project</a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className="card" style={{ width: '22rem' }}>
            <img src="https://via.placeholder.com/150" alt="Project Image" />
            <div className="card-body">
              <b>
                <h5 className="card-title">Tech Career Panel</h5>
              </b>
              <p className="card-text">
                A panel of industry professionals sharing their experience and
                expertise to help students make informed decisions about
                their careers in tech.
              </p>
              <a
                href="https://css-student-advisory-council.github.io/css-career-panel/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >Visit Project</a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className="card" style={{ width: '22rem' }}>
            <img src="https://via.placeholder.com/150" alt="Project Image" />
            <div className="card-body">
              <h5 className="card-title">Curriculum Development</h5>
              <p className="card-text">
                Collaborating with faculty and students to develop and improve
                the computer science curriculum.
              </p>
              <button className="btn btn-primary" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className="card" style={{ width: '22rem' }}>
            <img src="https://via.placeholder.com/150" alt="Project Image" />
            <div className="card-body">
              <b>
                <h5 className="card-title">Professor of the Quarter</h5>
              </b>
              <p className="card-text">
                Help us know what makes a good professor by providing feedback! If there is enough data, we could nominate a professor to the Distinguished Teaching Award!
              </p>
              <a
                href="https://css-student-advisory-council.github.io/css-career-panel/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >Visit Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
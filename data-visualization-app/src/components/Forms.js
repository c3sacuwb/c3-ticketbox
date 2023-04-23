import React from 'react';
import axios from 'axios';
import './styles/Forms.css';

const Forms = ({
  formData,
  setFormData,
  handleChange,
  handleFormSubmit,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/data', formData);
      console.log(response);
      handleFormSubmit(formData); // Call the prop function
      setFormData({
        label: '',
        value: '',
        classQuality: '',
        hasInternship: '',
        favoriteSubject: '',
        bestProfessor: '',
        graduationDate: '',
        email: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
      
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
            <div className="form-group">
              <label htmlFor="label">Label</label>
              <input
                type="text"
                name="label"
                id="label"
                placeholder="Label"
                value={formData.label}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hasInternship">Have you had an internship before?</label>
                <select
                    name="hasInternship"
                    id="hasInternship"
                    value={formData.hasInternship}
                    onChange={handleChange}
                    className="form-control">
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>  

            <div className="form-group">
              <label htmlFor="favoriteSubject">Favorite Subject</label>
              <select
                name="favoriteSubject"
                id="favoriteSubject"
                value={formData.favoriteSubject}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select a subject</option>
                {/* Add your customizable options here */}
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="English">English</option>
              </select>
            </div>
                        <div className="form-group">
            <label htmlFor="classQuality">Class Quality (1-5)</label>
            <select
                name="classQuality"
                id="classQuality"
                value={formData.classQuality}
                onChange={handleChange}
                className="form-control"
            >
                <option value="">Rate the class quality</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>


            <div className="form-group">
              <label htmlFor="graduationDate">Graduation Date</label>
              <select
                name="graduationDate"
                id="graduationDate"
                value={formData.graduationDate}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select a graduation date</option>
                {/* Add your customizable options here */}
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                pattern=".+@uw\.edu$"
                required
              />
              <small className="form-text text-muted">
                Please use an email ending with @uw.edu
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="hoursPerWeek">How many hours per week you had in this class?</label>
              <select
                name="hoursPerWeek"
                id="hoursPerWeek"
                value={formData.hoursPerWeek}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select an option</option>
                <option value="0-5">0-5 hours</option>
                <option value="5-10">5-10 hours</option>
                <option value="10-15">10-15 hours</option>
                <option value="15+">15+ hours</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="classDifficulty">In a scale from 1 to 5, being 1 easy to 5 very difficult, how challenging was this class?</label>
              <select
                name="classDifficulty"
                id="classDifficulty"
                value={formData.classDifficulty}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Rate the class difficulty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="classRelevance">Was the class relevant to you for personal projects, internships, or research?</label>
              <select
                name="classRelevance"
                id="classRelevance"
                value={formData.classRelevance}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bestProfessor">Select the best professor</label>
              <select
                name="bestProfessor"
                id="bestProfessor"
                value={formData.bestProfessor}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select the best professor</option>
                <option value="Prof. John">Prof. John</option>
                <option value="Prof. Jane">Prof. Jane</option>
                <option value="Prof. Smith">Prof. Smith</option>
                <option value="Prof. Brown">Prof. Brown</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;

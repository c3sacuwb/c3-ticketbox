import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './components/Forms';
import Charts from './components/Charts';
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    label: '',
    value: '',
    classQuality: '',
    hasInternship: '',
    favoriteSubject: '',
    bestProfessor: '',
    graduationDate: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (newData) => {
    setSubmittedData([...submittedData, newData]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/data', formData);
      handleFormSubmit(formData);
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
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/forms"
            element={
              <Forms
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
              />
            }
          />
          <Route path="/charts" element={<Charts data={submittedData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

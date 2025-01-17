import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import './form.css'; // Import the CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    city: '',
    currentLocation: '',
    interestReason: ''
  });

  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  if (state.succeeded) {
    return (
      <div className="gpt3__form section__padding">
        <div className="gpt3__footer-heading" data-aos="zoom-in">
          <h1 className="gradient__text">Thank you for registering!</h1>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const formFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'College', name: 'college', type: 'text' },
    { label: 'City', name: 'city', type: 'text' },
    { label: 'Current Location', name: 'currentLocation', type: 'text' },
    { label: 'Why are you interested in this meetup?', name: 'interestReason', type: 'textarea' }
  ];

  return (
    <div className="gpt3__form section__padding"  id='Register' data-aos="fade-up">
      <div className="gpt3__footer-heading" data-aos="zoom-in">
        <h1 className="gradient__text">Register now</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index}>
            <label>{field.label}:</label>
            {field.type === 'textarea' ? (
              <textarea name={field.name} value={formData[field.name]} onChange={handleChange} required />
            ) : (
              <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} required />
            )}
          </div>
        ))}
        
        <div className="gpt3__cta-btn">
        <button type="submit" disabled={state.submitting}>Submit</button>

        </div>
      </form>
    </div>
  );
};

export default Form;
import React from 'react';
import './ReportSubmission.css';

const ReportSubmission = ({ onClose }) => {
  return (
    <div className='submission'>
      <form className='submission-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            required
          />
        </div>
        
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            required
          />
        </div>
        
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            placeholder='Enter your message'
            rows='5'
            required
          ></textarea>
        </div>
        
        <button type='submit' className='submit-button'>Submit</button>
      </form>
    </div>
  );
}

export default ReportSubmission;

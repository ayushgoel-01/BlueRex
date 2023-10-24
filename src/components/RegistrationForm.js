import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    // Reset input fields
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';

    // Additional registration logic
  };

  return (
    <div className='top'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h2 className='contact-heading'>Contact us</h2>
        <input type="text" placeholder="Name" ref={nameInputRef} required />
        <input type="email" placeholder="Email" ref={emailInputRef} required />
        <textarea ref={passwordInputRef} placeholder='Enter your Query' required></textarea>
        <button type="submit" className='contact-btn' onClick={()=>{alert('Your query is Submitted, Thanks for contacting us.')}}><Link to="/Home">Contact</Link></button>
      </form>
    </div>
    
  );
};

export default RegistrationForm;
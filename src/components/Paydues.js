import React, { useState } from 'react';
import Header from './Header';
import Full_bg from './particle-config/fullbg';
import PayPalButtonComponent from './paypal_btn';
import '../index.css'; // Import your CSS file
import emailjs from 'emailjs-com';

const Paydues = () => {
  const [discordUsername, setDiscordUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [resText, setResText] = useState('');
  const [paypalButton, setPaypalButton] = useState(false);




  const sendEmail = () => {
    // Your Email.js template ID, user ID, and service ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const userId = process.env.REACT_APP_USER_ID;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    console.log("template: " + templateId);
    console.log("user: " + userId);
    console.log("service: " + serviceId);
  
    // Send the email using Email.js
    emailjs.send(serviceId, templateId, { email: email, from_name: fullName, discord: discordUsername }, userId)
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };





  const validateForm = () => {
    // Implement your custom form validation logic here
    if (!discordUsername || !fullName || !email) {
      setResText('Please fill out all fields.');
      return false;
    }

    // Add more validation checks as needed
  
    setPaypalButton(true);
    setResText('Select an option');

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before proceeding
    if (validateForm()) {
      console.log('Form is valid, proceed with PayPal payment.');

      // Proceed with PayPal payment logic here

    } else {
      console.log('Form validation failed.');
      // Optionally, display an error message to the user
    }
  };

  const handlePaymentSuccess = (details, data) => {
    setResText('Your payment was successful, thank you!');
    sendEmail();
    console.log('Payment successful');
    // Handle successful payment, e.g., show a success message to the user
  };

  const handlePaymentCancel = () => {
    console.log('Payment cancelled');
    setResText('Payment cancelled, please try again.');
    // Handle cancelled payment
  };

  const handlePaymentError = (error) => {
    console.error('Payment error', error);
    setResText('Payment error, please try again.');
    // Handle payment error
  };

  return (
    <div className="paydues-container">
      <Header />
      <div className="canvas">
        <Full_bg></Full_bg>
        <div className="your-div"></div>
      </div>
      <div className="home-header-container">
        <p className="home-header">Pay Dues</p>
      </div>
      <div className="form-container">
        {
          !paypalButton ? 
        <form onSubmit={handleSubmit} className='form-pp'>
          <label className="label-text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="600">
            <p className='label-text-mobile'>Discord Username:</p>
            <input
              className="text-field dark-theme"
              placeholder="Example: Slipperyfountain123"
              type="text"
              value={discordUsername}
              onChange={(e) => setDiscordUsername(e.target.value)}
            />
          </label>
          <label className="label-text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="800">
          <p className='label-text-mobile'>Full Name:</p>
            <input
              className="text-field dark-theme"
              type="text"
              placeholder="Example: Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label className="label-text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="1000">
          <p className='label-text-mobile'>Email:</p>
            <input 
              className="text-field dark-theme"
              placeholder="Example: JaneD1@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className='submit-btn-pp-wrapper'>
            <button className='submit-btn-pp'>Next</button>
          </div>
        </form>
        : null}
      </div>
      <div className="paypal-options">
        {paypalButton ? 
        <div className='user-info'>
          <p>Discord: {discordUsername}</p>
          <p>Name: {fullName}</p>
          <p>Email: {email}</p>
        </div>
        :
        null
            }
        <p className="res-text">{resText}</p>
        { paypalButton ? 
        <PayPalButtonComponent
          className="pp"
          amount={15} // Set the amount you want to charge
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
          onError={handlePaymentError}
        />
        :
        null
      }
      </div>
    </div>
  );
};

export default Paydues;

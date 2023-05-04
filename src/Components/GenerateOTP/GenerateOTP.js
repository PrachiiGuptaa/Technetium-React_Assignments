import React, {useState} from "react";
import "./GenerateOTP.css";

export default function GenerateOTP() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [error, setError] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const handleChange = (e) => {
    setMobileNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleFocus = () => {
    setMobileNumber("");
    setError("");
    setOtpSent(false);
  };

  const sendOTP = async () => {
    try {
      // Validating Mobile Number 
      const regex = /^[6-9]\d{9}$/;
      if (!regex.test(mobileNumber)) {
        setError('Please enter a valid 10-digit Indian Mobile Number');
        return;
      }

      // Calling API for OTP Generation
      const response = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({mobile:mobileNumber})
      });

      if (!response.ok) {
        throw new Error('Unable to generate OTP');
      }
      setMobileNumber('');
      setError('');
      setOtpSent(true)
      console.log('OTP sent successfully');
    } 
    
    catch (error) {
      setError(error.message);
      console.error(error);
    }
  }

  return (
    <div className="container">
      <p className="heading">Enter your Mobile Number</p>
      <form onSubmit={handleSubmit}>
      <input type="number"
             value={mobileNumber}
             placeholder="Type your Number"
             className="input-field"
             onChange={handleChange}
             onFocus={handleFocus}
             required/>
      <button type='submit' onClick={sendOTP} className="button-field">Send OTP</button>
      </form>
      {error && <p className="error">{error}</p>}
      {otpSent && <p className="success">OTP sent successfully</p>}
    </div>
    
  );
}

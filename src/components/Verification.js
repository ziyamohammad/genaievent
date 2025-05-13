import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verification = ({useremail}) => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) { 
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

     
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    const correctOtp = "1234"; 
    if (enteredOtp === correctOtp) {
      toast.success("OTP Verified Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } else {
      toast.error("Invalid OTP. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const handleResend = () => {
    toast.info("OTP Resent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
    
  };

  return (
    <div className="verification">
      <ToastContainer />
      <div className="verihead">Verification Code</div>
      <div className="para">
        We have sent a verification code to your college id <span>{useremail}</span>✏
      </div>
      <div className="otp">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            className="no"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
      
        <button className="submitbtn" onClick={handleSubmit}>
          Submit
        </button>
     
      <div className="resend" onClick={handleResend}>
        Resend OTP
      </div>
    </div>
  );
};

export default Verification;

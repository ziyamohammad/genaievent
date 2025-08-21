import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verification = ({useremail}) => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleChange = (value, index) => {
    if (/^[A-Za-z0-9]?$/.test(value)) { 
        const newOtp = [...otp];
        newOtp[index] = value.toUpperCase(); // optional: force uppercase
        setOtp(newOtp);


     
       if (value && index < 3) {
          document.getElementById(`otp-input-${index + 1}`).focus();
        }
    }
  };

  const handleSubmit = async () => {
  try {
    const enteredOtp = otp.join("");
    console.log("Sending body:", { otp: enteredOtp, email: useremail });

    const response = await axios.post(
      "https://3.232.162.197:5054/api/v1/student/verify",
      { otp: enteredOtp, email: useremail },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      }
    );

    console.log("Response:", response.data);
    toast.success("OTP Verified Successfully!");
    setOtp(new Array(4).fill(""));
  } catch (error) {
    console.error("Error Response:", error.response?.data || error.message);
    toast.error("Invalid OTP. Please try again.");
  }
};
    

  const handleResend = async() => {
    try {
       const response = await axios.get("http://3.232.162.197:5054/api/v1/student/resend-otp",{withCredentials:true})
       console.log(response)
      toast.info("OTP Resent!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      console.log("error");
       toast.error("OTP not send", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });

    }
    
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

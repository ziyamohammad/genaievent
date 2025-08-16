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

  const handleSubmit = async() => {
    try {
      const enteredOtp = otp.join("");
      console.log(enteredOtp)
      const response = await axios.post("https://form-backend-5y0u.onrender.com/api/v1/student/verify",{otp:enteredOtp},{withCredentials:true})
      console.log(response)
      toast.success("OTP Verified Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        setOtp(new Array(4).fill(""));
    } catch (error) {
      console.log("error");
         toast.error("Invalid OTP. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });

    }
    // const enteredOtp = otp.join("");
    // const correctOtp = "1234"; 
    // if (enteredOtp === correctOtp) {
    //   toast.success("OTP Verified Successfully!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //   });
    // } else {
    //   toast.error("Invalid OTP. Please try again.", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //   });
    // }
  };

  const handleResend = async() => {
    try {
       const response = await axios.get("https://form-backend-5y0u.onrender.com/api/v1/student/resend-otp",{withCredentials:true})
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

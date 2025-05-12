import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Input = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  // Individual field states
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [univRoll, setUnivRoll] = useState('');
  const [gender, setGender] = useState('');
  const [scholarType, setScholarType] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  // Collect all in an array (if storing multiple submissions)
  const [formEntries, setFormEntries] = useState([]);

  const regexPatterns = {
    name: /^[A-Za-z\s]{3,30}$/, 
    branch: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^[0-9]{10}$/, 
    studentNumber: /^[0-9]{5,7}$/,
  };

  const validateField = (field, value) => {
    const pattern = regexPatterns[field];
    if (pattern && !pattern.test(value)) {
      setErrors((prev) => ({ ...prev, [field]: `Invalid ${field}` }));
    } else {
      setErrors((prev) => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

      if (
      !name || !branch || !univRoll || !gender || !scholarType ||
      !studentNumber || !email || !mobile
    ) {
      toast.error("Please fill all the required fields.");
      return;
    }


    // Final check before adding
    if (Object.keys(errors).length === 0) {
      const formData = {
        name,
        branch,
        univRoll,
        gender,
        scholarType,
        studentNumber,
        email,
        mobile,
      };
      setFormEntries((prev) => [...prev, formData]);
       toast.success("Form submitted successfully! 🎉");
       navigate("/Verify");
       

      // Optional: Reset fields
      setName('');
      setBranch('');
      setUnivRoll('');
      setGender('');
      setScholarType('');
      setStudentNumber('');
      setEmail('');
      setMobile('');
    }
  };

  return (
    <div className="inputcontainer">
      <form>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validateField("name", e.target.value)}
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

        <div className="input">
          <label htmlFor="branch">Branch</label>
          <select
            type="text"
            id="branch"
            name="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            onBlur={(e) => validateField("branch", e.target.value)}
            required
          >
             <option value="" disabled>Select Branch</option>
              <option value="male">CSIT</option>
              <option value="female">CSE</option>
              <option value="other">CSE(AIML)</option>
               <option value="other">CSE(DS)</option>
                <option value="other">CSE(HINDI)</option>
                 <option value="other">IT</option>
                  <option value="other">EN</option>
                   <option value="other">CIVIL</option>
                    <option value="other">MECHANICAL</option>
                    <option value="other">AIML</option>
                       <option value="other">ECE</option>
                    <option value="other">CS</option>
                    
            </select>


          {errors.branch && <small className="error">{errors.branch}</small>}
        </div>

        <div className="input">
          <label htmlFor="univRoll">University Roll no.</label>
          <input
            type="text"
            id="univRoll"
            name="univRoll"
            value={univRoll}
            onChange={(e) => setUnivRoll(e.target.value)}
            required
          />
        </div>

        <div className="input1">
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="scholar">
            <label htmlFor="scholar-type">Scholar</label>
            <select
              name="scholarType"
              value={scholarType}
              onChange={(e) => setScholarType(e.target.value)}
              required
            >
              <option value="" disabled>Select Scholar Type</option>
              <option value="day">Day Scholar</option>
              <option value="hostel">Hostler</option>
            </select>
          </div>
        </div>

        <div className="input">
          <label htmlFor="student-number">Student Number</label>
          <input
            type="tel"
            name="studentNumber"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            onBlur={(e) => validateField("studentNumber", e.target.value)}
            required
          />
          {errors.studentNumber && (
            <small className="error">{errors.studentNumber}</small>
          )}
        </div>

        <div className="input">
          <label htmlFor="email">College Email Id</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateField("email", e.target.value)}
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="input">
          <label htmlFor="mobile">Mobile No</label>
          <input
            type="tel"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={(e) => validateField("mobile", e.target.value)}
            required
          />
          {errors.mobile && <small className="error">{errors.mobile}</small>}
        </div>

        <button
          onClick={handleClick}
          type="submit"
          className="verifybtn input"
          disabled={Object.keys(errors).length > 0}
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default Input;

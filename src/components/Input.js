import { useState } from 'react';
import { Link } from 'react-router-dom';

const Input = () => {
  const [errors, setErrors] = useState({});
 
  
  const regexPatterns = {
    name: /^[A-Za-z\s]{3,30}$/, 
    branch: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^[0-9]{10}$/, 
    studentNumber: /^[0-9]{5,7}$/,
  };

  
  const validateField = (name, value) => {
    const pattern = regexPatterns[name];
    if (pattern && !pattern.test(value)) {
      setErrors((prev) => ({ ...prev, [name]: `Invalid ${name}` }));
    } else {
      setErrors((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  return (
    <div className="inputcontainer">
      <form action="">
       
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onBlur={(e) => validateField("name", e.target.value)}
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>

       
        <div className="input">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            required
            onBlur={(e) => validateField("branch", e.target.value)}
          />
          {errors.branch && <small className="error">{errors.branch}</small>}
        </div>

       
        <div className="input">
          <label htmlFor="domain">University Roll no.</label>
           <input
            type="text"
            id="branch"
            name="branch"
            required
            onBlur={(e) => validateField("branch", e.target.value)}
          />
        </div>

       
        <div className="input1">
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" required>
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="scholar">
            <label htmlFor="scholar-type">Scholar </label>
            <select name="scholarType" required>
              <option value="" disabled selected>
                Select Scholar Type
              </option>
              <option value="full">Day Scholar</option>
              <option value="partial">Hostler</option>
            </select>
          </div>
        </div>

       
        <div className="input">
          <label htmlFor="student-number">Student Number</label>
          <input
            type="tel"
            name="studentNumber"
            required
            onBlur={(e) => validateField("studentNumber", e.target.value)}
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
            required
            onBlur={(e) => validateField("email", e.target.value)}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

      
        <div className="input">
          <label htmlFor="mobile">Mobile No</label>
          <input
            type="tel"
            name="mobile"
            pattern="[0-9]{10}"
            required
            onBlur={(e) => validateField("mobile", e.target.value)}
          />
          {errors.mobile && <small className="error">{errors.mobile}</small>}
        </div>

        
        <Link to="/Verify">
          <button
            type="submit"
            className="verifybtn input"
            disabled={Object.keys(errors).length > 0} 
          >
            Verify
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Input;

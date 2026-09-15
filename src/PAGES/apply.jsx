import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Apply() {

  const location = useLocation();

  const selectedProgram =
    location.state?.program || "";


  const [submitted, setSubmitted] =
    useState(false);


  const [formData, setFormData] = useState({

    fullName: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    year: "",
    program: selectedProgram,
    duration: "",
    skills: "",
    message: ""

  });


  useEffect(() => {

    if (selectedProgram) {

      setFormData((previous) => ({

        ...previous,

        program: selectedProgram

      }));

    }

  }, [selectedProgram]);


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

  };


  return (

    <div className="apply-page">


      {/* APPLICATION INTRO */}

      <div className="apply-intro">

        <span className="apply-label">
          INTERNSHIP APPLICATION
        </span>

        <h1>
          Start Your Internship Journey
        </h1>

        <p>
          Take the next step toward practical technology
          experience with Hipoo Corporation.
        </p>

      </div>


      {/* FORM */}

      <form
        className="apply-form"
        onSubmit={handleSubmit}
      >


        <div className="form-heading">

          <h2>
            Intern Information
          </h2>

          <p>
            Please provide accurate information to
            complete your application.
          </p>

        </div>


        {/* SELECTED PROGRAM */}

        <div className="selected-program">

          <span>
            Selected Program
          </span>

          <strong>

            {formData.program ||
              "Please select a program"}

          </strong>

        </div>


        <div className="form-grid">


          {/* NAME */}

          <div className="form-group">

            <label>
              Full Name *
            </label>

            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              required
            />

          </div>


          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email Address *
            </label>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              required
            />

          </div>


          {/* PHONE */}

          <div className="form-group">

            <label>
              Phone Number *
            </label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your phone number"
              required
            />

          </div>


          {/* UNIVERSITY */}

          <div className="form-group">

            <label>
              University / College *
            </label>

            <input
              name="university"
              value={formData.university}
              onChange={handleChange}
              type="text"
              placeholder="Your university or college"
              required
            />

          </div>


          {/* COURSE */}

          <div className="form-group">

            <label>
              Course / Degree *
            </label>

            <input
              name="course"
              value={formData.course}
              onChange={handleChange}
              type="text"
              placeholder="e.g. B.Tech CSE"
              required
            />

          </div>


          {/* YEAR */}

          <div className="form-group">

            <label>
              Current Year *
            </label>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >

              <option value="">
                Select year
              </option>

              <option>
                1st Year
              </option>

              <option>
                2nd Year
              </option>

              <option>
                3rd Year
              </option>

              <option>
                4th Year
              </option>

              <option>
                Postgraduate
              </option>

              <option>
                Other
              </option>

            </select>

          </div>


          {/* PROGRAM */}

          <div className="form-group">

            <label>
              Internship Program *
            </label>

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >

              <option value="">
                Select a program
              </option>

              <option>
                Web Development
              </option>

              <option>
                App Development
              </option>

              <option>
                React JS
              </option>

              <option>
                JavaScript
              </option>

              <option>
                UI / UX Design
              </option>

              <option>
                Data & AI Fundamentals
              </option>

            </select>

          </div>


          {/* DURATION */}

          <div className="form-group">

            <label>
              Preferred Duration *
            </label>

            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            >

              <option value="">
                Select duration
              </option>

              <option>
                4 Weeks
              </option>

              <option>
                5 Weeks
              </option>

              <option>
                6 Weeks
              </option>

              <option>
                8 Weeks
              </option>

            </select>

          </div>

        </div>


        {/* SKILLS */}

        <div className="form-group full-width">

          <label>
            Skills / Technologies
          </label>

          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            type="text"
            placeholder="e.g. HTML, CSS, JavaScript, React"
          />

        </div>


        {/* MESSAGE */}

        <div className="form-group full-width">

          <label>
            Why do you want to join? *
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us briefly about your goals and interests..."
            required
          />

        </div>


        {/* SUBMIT */}

        <button
          type="submit"
          className="submit-application"
        >
          Submit Internship Application
        </button>


        {/* SUCCESS MESSAGE */}

        {submitted && (

          <div className="application-success">

            ✓ Application submitted successfully!

            <span>
              Thank you for applying to Hipoo Corporation.
            </span>

          </div>

        )}

      </form>

    </div>

  );
}

export default Apply;
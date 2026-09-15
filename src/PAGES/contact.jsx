import { useState } from "react";

function Contact() {

  const [submitted, setSubmitted] =
    useState(false);


  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

    e.target.reset();

  };


  return (

    <div className="contact-page">

      <div className="contact-intro">

        <span className="section-label">
          CONTACT HIPOO
        </span>

        <h1>
          We'd Love To Hear From You
        </h1>

        <p>
          Ask us about internships, programs,
          certificates or your technology learning journey.
        </p>

      </div>


      <div className="contact-layout">


        <div className="contact-info">

          <div className="contact-info-card">

            <span>
              01
            </span>

            <h2>
              Internships
            </h2>

            <p>
              Questions about internship programs
              and applications.
            </p>

          </div>


          <div className="contact-info-card">

            <span>
              02
            </span>

            <h2>
              Programs
            </h2>

            <p>
              Need help choosing the right
              technology track?
            </p>

          </div>


          <div className="contact-info-card">

            <span>
              03
            </span>

            <h2>
              Certificate
            </h2>

            <p>
              Need assistance with certificate
              verification?
            </p>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h2>
            Send a Query
          </h2>


          <label>
            Name
          </label>

          <input
            type="text"
            placeholder="Your Name"
            required
          />


          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Your Email"
            required
          />


          <label>
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Your Phone Number"
          />


          <label>
            Message
          </label>

          <textarea
            placeholder="Write your query here..."
            required
          />


          <button type="submit">
            Submit Query
          </button>


          {submitted && (

            <div className="success-message">

              ✓ Your query has been submitted successfully!

            </div>

          )}

        </form>

      </div>

    </div>

  );
}

export default Contact;
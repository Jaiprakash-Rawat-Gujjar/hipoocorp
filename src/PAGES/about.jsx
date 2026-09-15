import { useState } from "react";

function About() {

  const [submitted, setSubmitted] =
    useState(false);


  const handleQuery = (e) => {

    e.preventDefault();

    setSubmitted(true);

    e.target.reset();

  };


  return (

    <div className="about-page">


      {/* ABOUT HERO */}

      <section className="about-hero">

        <span id="aus">
          ABOUT US
        </span>

        <h1>
          Code With Purpose, Create With Impact
        </h1>

        <h3>
          Hipoo Corporation is transforming learning through
          practical, real-world implementation. Our vision is
          to turn student curiosity and ideas into real-world
          projects and meaningful experience through
          mentorship, projects, skill development and
          certification.
        </h3>

      </section>


      {/* TECHNOLOGY */}

      <section className="tech-learning">

        <div className="section-heading">

          <span className="section-label">
            TECHNOLOGY IN ACTION
          </span>

          <h1>
            Explore The World of Technology
          </h1>

          <p>
            Technology is more than writing code. It combines
            problem solving, design, creativity and practical
            implementation.
          </p>

        </div>


        <div className="tech-image-grid">


          {/* WEB DEVELOPMENT */}

          <article className="tech-image-card">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
              alt="Web Development"
            />

            <div>

              <h2>
                Web Development
              </h2>

              <p>
                Websites connect ideas with people. Students
                can learn HTML, CSS, JavaScript and responsive
                design while building useful web experiences.
              </p>

            </div>

          </article>


          {/* APP DEVELOPMENT */}

          <article className="tech-image-card">

            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=85"
              alt="App Development"
            />

            <div>

              <h2>
                App Development
              </h2>

              <p>
                Mobile applications bring digital services
                into everyday life. App development combines
                interface design, programming and user-focused
                problem solving.
              </p>

            </div>

          </article>


          {/* AI / TECHNOLOGY */}

          <article className="tech-image-card">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
              alt="Emerging Technology"
            />

            <div>

              <h2>
                Innovation & Emerging Tech
              </h2>

              <p>
                Modern technology includes AI, cloud
                platforms, automation and data-driven systems
                that help organizations solve problems faster.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* QUERY */}

      <section className="query-section">

        <div className="query-copy">

          <span className="section-label">
            HAVE A QUESTION?
          </span>

          <h1>
            Let's Talk Technology
          </h1>

          <p>
            Have a question about internships, programs or
            technology learning? Send us a query and our
            team can get back to you.
          </p>

        </div>


        <form
          id="emailform"
          onSubmit={handleQuery}
        >

          <h2>
            Send Your Query
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
            placeholder="Your Email Address"
            required
          />


          <label>
            Message
          </label>

          <textarea
            placeholder="How can we help you?"
            required
          />


          <button
            id="sndmsg"
            type="submit"
          >
            Send Message
          </button>


          {submitted && (

            <div className="success-message">
              ✓ Your query has been submitted successfully!
            </div>

          )}

        </form>

      </section>

    </div>

  );
}

export default About;
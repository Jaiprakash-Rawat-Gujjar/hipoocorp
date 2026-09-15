import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const programs = [

    {
      title: "Web Development",
      tag: "Frontend",
      text: "Build responsive websites using HTML, CSS, JavaScript and modern frontend technologies."
    },

    {
      title: "App Development",
      tag: "Mobile",
      text: "Learn the fundamentals of creating practical mobile applications and user-friendly interfaces."
    },

    {
      title: "React JS",
      tag: "Frontend",
      text: "Create modern component-based web applications using React and reusable UI components."
    },

    {
      title: "JavaScript",
      tag: "Programming",
      text: "Strengthen programming fundamentals and create interactive real-world web projects."
    },

    {
      title: "UI / UX Design",
      tag: "Design",
      text: "Learn interface design, layouts, wireframes and how to create better digital experiences."
    },

    {
      title: "Data & AI Fundamentals",
      tag: "Technology",
      text: "Explore data concepts, automation and introductory artificial intelligence technologies."
    }

  ];


  return (

    <>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            HIPOO CORPORATION • TECHNOLOGY & SKILL DEVELOPMENT
          </span>

          <h1>
            TURN YOUR DREAMS INTO REALITY.
          </h1>

          <h3>
            Join Hipoo Corporation Internship Program and work on
            real projects, learn from industry mentors, develop
            practical skills and earn valuable certification.
          </h3>


          <div className="btns1">

            <button
              id="internshipapply"
              onClick={() => navigate("/apply")}
            >
              Apply Internship
            </button>


            <button
              id="explorebtn"
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({
                    behavior: "smooth"
                  })
              }
            >
              Explore Programs
            </button>

          </div>


          <div className="span1">

            <span>
              <strong>2K+</strong> Interns Trained
            </span>

            <span>
              <strong>8</strong> Career Tracks
            </span>

            <span>
              <strong>100%</strong> Practical Learning
            </span>

            <span>
              <strong>Certificate</strong> On Completion
            </span>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE */}

      <section id="choose">

        <div className="mainch">

          <span className="section-label">
            WHY HIPOO
          </span>

          <h1>
            Why Choose Hipoo Corporation?
          </h1>

          <h3>
            Designed to gain real-world knowledge so that your
            time is invested in practical skill building.
          </h3>

        </div>


        <div className="feature-grid">

          <div className="identcont">

            <div className="feature-icon">
              ⌘
            </div>

            <h1>
              Real Projects
            </h1>

            <h4>
              Learn through practical implementation and
              project-based learning.
            </h4>

          </div>


          <div className="identcont">

            <div className="feature-icon">
              ✓
            </div>

            <h1>
              Certification
            </h1>

            <h4>
              Receive a certificate after successfully
              completing your internship.
            </h4>

          </div>


          <div className="identcont">

            <div className="feature-icon">
              ⚡
            </div>

            <h1>
              Flexible Learning
            </h1>

            <h4>
              Simple and accessible learning designed
              especially for students.
            </h4>

          </div>

        </div>

      </section>


      {/* PROGRAMS */}

      <section
        id="programs"
        className="programs-section"
      >

        <div className="section-heading">

          <span className="section-label">
            EXPLORE TECHNOLOGY
          </span>

          <h1>
            Explore Our Programs
          </h1>

          <p>
            Choose a technology track, develop practical
            skills and apply for an internship matching
            your interests.
          </p>

        </div>


        <div className="program-grid">

          {programs.map((program) => (

            <div
              className="program-card"
              key={program.title}
            >

              <span className="program-tag">
                {program.tag}
              </span>

              <h2>
                {program.title}
              </h2>

              <p>
                {program.text}
              </p>


              <button
                className="program-apply"
                onClick={() =>
                  navigate("/apply", {
                    state: {
                      program: program.title
                    }
                  })
                }
              >
                Apply for this Program →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* TECHNOLOGY INFORMATION */}

      <section className="tech-strip">

        <div>

          <span className="section-label">
            LEARN • BUILD • GROW
          </span>

          <h1>
            Technology skills are built through practice.
          </h1>

          <p>
            From websites and applications to UI/UX design,
            programming, data and artificial intelligence,
            practical experience helps students turn concepts
            into useful digital solutions.
          </p>

        </div>

      </section>

    </>

  );
}

export default Home;
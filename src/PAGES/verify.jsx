import { useState } from "react";

import mandeepCert from "../assets/mandeep cert.jpeg";
import jaiprakashCert from "../assets/jaiprakash certificate.jpeg";
import rahulCert from "../assets/rahul cert.jpeg";
import sachinCert from "../assets/saschin certificate.jpeg";
import mohakCert from "../assets/mohak cert.jpeg";
import nishantCert from "../assets/NISHANT.jpeg";
import riteshCert from "../assets/RITESH.jpeg";
import niteshCert from "../assets/NITESH.jpeg";

function Verify() {
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");

const certificates = {
  HIPOOCERT580: {
    name: "Mandeep",
    email: "mandeeprao2007@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development with JS & Web Design",
    duration: "5 Weeks",
    certificateImage: mandeepCert
  },

  HIPOOCERT864: {
    name: "Jaiprakash",
    email: "jpgujjarr@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development with JS & Web Design",
    duration: "5 Weeks",
    certificateImage: jaiprakashCert
  },

  HIPOOCERT456: {
    name: "Rahul",
    email: "s84011447@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development with JS & Web Design",
    duration: "5 Weeks",
    certificateImage: rahulCert
  },

  HIPOOCERT545: {
    name: "Sachin",
    email: "sachingurjar5435651@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development with JS & Web Design",
    duration: "5 Weeks",
    certificateImage: sachinCert
  },

  HIPOOCERT762: {
    name: "Mohak",
    email: "mohaksharma1567@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development with JS & Web Design",
    duration: "5 Weeks",
    certificateImage: mohakCert
  },
   HIPOOCERT234: {
    name: "Nishant",
    email: "nishant586@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development ",
    duration: "5 Weeks",
    certificateImage: nishantCert
  },
   HIPOOCERT290: {
    name: "Ritesh",
    email: "riteshyadav56@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development ",
    duration: "5 Weeks",
    certificateImage: riteshCert
  }, 
  HIPOOCERT423: {
    name: "Nitesh",
    email: "niteshpilania98@gmail.com",
    university: "GURU JAMBHESHWAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
    program: "Web Development ",
    duration: "5 Weeks",
    certificateImage: niteshCert
  },
};


  const handleVerify = (e) => {
    e.preventDefault();

    const enteredId = e.target.certificateId.value
      .trim()
      .toUpperCase();

    if (certificates[enteredId]) {
      setCertificate({
        id: enteredId,
        ...certificates[enteredId]
      });

      setError("");
    } else {
      setCertificate(null);
      setError("Invalid Certificate ID");
    }
  };

  return (
    <div className="verify-page">

      {/* Header */}
      <div className="verify-hero">
        <span className="verify-label">
          HIPOO CORPORATION
        </span>

        <h1>Certificate Verification</h1>

        <p>
          Verify the authenticity of a certificate issued by
          Hipoo Corporation.
        </p>
      </div>

      {/* Verification Box */}
      <div className="verify-container">

        <div className="verify-card">

          <div className="verify-icon">
            ✓
          </div>

          <h2>Verify Your Certificate</h2>

          <p className="verify-description">
            Enter the certificate ID provided on your certificate
            to verify its authenticity.
          </p>

          <form onSubmit={handleVerify} className="verify-form">

            <label>
              Certificate ID
            </label>

            <input
              type="text"
              name="certificateId"
              placeholder="e.g. HIPOOCERT001"
              required
            />

            <button type="submit">
              Verify Certificate
            </button>

          </form>

          {/* Invalid */}
          {error && (
            <div className="verification-error">
              <div className="status-symbol">✕</div>

              <div>
                <strong>Invalid Certificate</strong>
                <p>
                  The Certificate ID entered could not be verified.
                  Please check the ID and try again.
                </p>
              </div>
            </div>
          )}

          {/* Verified */}
          {certificate && (
            <div className="verification-success">

              <div className="success-header">
                <div className="success-symbol">
                  ✓
                </div>

                <div>
                  <strong>Certificate Verified</strong>
                  <p>
                    This certificate has been successfully verified.
                  </p>
                </div>
              </div>

              <div className="certificate-details">

                <div className="detail-row">
                  <span>Certificate ID</span>
                  <strong>{certificate.id}</strong>
                </div>

                <div className="detail-row">
                  <span>Intern Name</span>
                  <strong>{certificate.name}</strong>
                </div>

                <div className="detail-row">
                  <span>Email</span>
                  <strong>{certificate.email}</strong>
                </div>

                <div className="detail-row">
                  <span>University / College</span>
                  <strong>{certificate.university}</strong>
                </div>

                <div className="detail-row">
                  <span>Program</span>
                  <strong>{certificate.program}</strong>
                </div>

                <div className="detail-row">
                  <span>Duration</span>
                  <strong>{certificate.duration}</strong>
                </div>

              </div>

              {/* Certificate */}
              <div className="certificate-preview">

                <h3>Certificate Preview</h3>

                <img
                  src={certificate.certificateImage}
                  alt="Verified Certificate"
                />

              </div>

            </div>
          )}

        </div>

        {/* Bottom Info */}
        <div className="verification-info">

          <div>
            <span>🔒</span>
            <h3>Secure Verification</h3>
            <p>
              Certificate information is verified against
              Hipoo Corporation records.
            </p>
          </div>

          <div>
            <span>✓</span>
            <h3>Authentic Records</h3>
            <p>
              Only certificates issued by Hipoo Corporation
              can be verified through this portal.
            </p>
          </div>

          <div>
            <span>⚡</span>
            <h3>Instant Results</h3>
            <p>
              Get verification results instantly by entering
              the certificate ID.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Verify;
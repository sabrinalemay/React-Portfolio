import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Sabrina LeMay</h2>
          <ul>
            <li>
              Fullstack Software Developer student.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/sabrina-lemay-63932923a/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/sabrinalemay/React-Portfolio"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Familiar with</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, <br />
            Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
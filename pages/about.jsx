import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__col">
          <img
            src="/Profile.jpg"
            alt="Profile Image"
            className="about__image"
          />
        </div>
        <div className="about__col">
          <div className="about__col__container">
            <div className="about__col__description">
              <h2>Patrick Keenan</h2>
              <p>
                Hi, I'm Pat Keenan. I'm a self-taught developer living is Asbury
                Park NJ. I learned to code back in 2017 starting with Python.
                Now I focus mainly on React and Javascript.
              </p>
            </div>
            <h3>Frameworks & Langauges</h3>
            <div className="about__language__list">
              <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>HTML/CSS</li>
              </ul>
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>Gatsby</li>
              </ul>
              <ul>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>Material UI</li>
              </ul>
            </div>
            <div className="about__getInTouch">
              <h3>Get In Touch</h3>
              <p>
                Email: <a>patkeenan.dev@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

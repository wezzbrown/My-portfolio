import React from "react";
// import './App.css'
import Image from "../assets/image/image1.jpeg";
import Image2 from "../assets/image/image2.jpeg";
import Image3 from "../assets/image/image3.jpeg";
import Profilepic from "../assets/image/profilepic.png";


const Profile = () => {
  return (
    <section id="profile" className="profile">
      <h2>Developer</h2>

      <div className="main-profile" >

        <div className="profile-box">
          {/* <p>My name is Wisdom Sunday. I am a tech lover from time which lead me into learning  the fundamentals like Microsoft-word,Execl,Powerpoint and Corel-draw but yet it was still not enough for me to take tech as a side hustle, so I decided to advance into tech. which lead me into web development</p>
       <p>I'm a passionate developer with experience in building modern web applications. I specialize in "React" and other langanges like html,bootstrap,javascript,tailwind,and of cause css because what is a website without css, which makes me a  front-end developer.</p> */}
          {/* <div className="image">
      <img src={Image} alt="Profile" className="profile-pic" />
      <img src={Image2} alt="Profile" className="profile-pic" />
      </div> */}

          <img src={Profilepic} alt="Profile" className="profile-pi" />
          <h5>Wezzdev</h5>
          <p>Front-end Developer</p>
          <div className="contact-info">
            <h5>Contact infomation</h5>
            <ul className="icon-list">
              <li>
                <i className="fas fa-envelope"></i>{" "}
                sumdaywisdomifiok@gmail.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Nigeria
              </li>
              <li>
                <i className="fas fa-briefcase"></i> Front-end developer
              </li>
              <li>
                <i className="fas fa-link"></i> <a  href="">https://my-portfolio-jade-nu.vercel.app/</a>
              </li>
            </ul>
          </div>
        </div>
        

        <div className="about-me">
          <h1>
            Hey <br /> I'm <span>Wezzdev,</span> <br />  A Front-end Developer
          </h1>
          <p>I help business grow by crafting amazing web experience. If you're looking for a developer that likes to get stuff done,</p>
          <h3>
            Let's Talk
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Profile;

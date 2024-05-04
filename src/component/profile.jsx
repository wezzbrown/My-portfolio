import React from 'react';
// import './App.css'
import Image from '../assets/image/image1.jpeg'
import Image2 from '../assets/image/image2.jpeg'
import Image3 from '../assets/image/image3.jpeg'


const Profile = () => {
  return (
    <section id="profile" className="profile">
      <h2>About Me</h2>
      <p>My name is Wisdom Sunday. I am a tech lover from time which lead me into learning  the fundermentals like Microsoft-word,Execl,Powerpoint and Corel-draw but yet it was still not enough for me to take tech as a side hustle, so i decided to advance into tech. which lead me into web development</p>
       <p>I'm a passionate developer with experience in building modern web applications. I specialize in React and other langanges like html,bootstrap,javascript,tailwind,and of cause css because what is a website without css, which makes me a  front-end developer.</p>
      <div className="image">
      <img src={Image} alt="Profile" className="profile-pic" />
      <img src={Image2} alt="Profile" className="profile-pic" />
      {/* <img src={Image3} alt="Profile" className="profile-pic" /> */}
      </div>
     
    </section>
  );
};

export default Profile;

import Html from '../assets/image/html.png'
import Css from '../assets/image/css.png'
import Tailwind from '../assets/image/tailwind.png'
import Reactp from '../assets/image/react.png'
import Bootstrap from '../assets/image/bootstrap.png'
import Js from '../assets/image/js.png'
import About from "../assets/image/About.jpeg";
import Lottie from "lottie-react";
import animation from "./lootie2.json"

const Tools = () => {
    return ( 
        <div className='tools-container1'>
        <div className='tools-container'>
         
          <div className='short-id'>
          <h3 className='short-id-h'>About Me </h3>
                
                <p className='short-id-p' > 
                <h2>Hello!</h2>
                    My name is Sunday Wisdom and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
                    I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                    When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
                    I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                </p>
          </div>
          <Lottie animationData={animation}  className='tool-anime'/>
          </div>

       
       
 <div className='lib'>
          <h2>Libaries and Frameworks Learnt</h2>
        <div className='tools'>
           
            <div className='indi-tool'>
            <img src={Html} alt="Profile" className="tools-pic" />
            <h3 className='indi-tool-h'>HTML</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Css} alt="Profile" className="tools-pic" />
            <h3 className='indi-tool-h'>CSS</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Bootstrap} alt="Profile" className="tools-pic" />
            <h3 className='indi-tool-h'>BOOTSTRAP</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Js} alt="Profile" className="tools-pic" />
            <h3 className='indi-tool-h'>JAVASCRIPT</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Reactp} alt="Profile" className="tools-pic" />
            <h3 className='indi-tool-h'>REACT JS</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Tailwind} alt="Profile" className="tools-pic" />
            <h3 className='indi-tool-h'> TAILWIND</h3>
            </div>
        </div>
         </div>
          </div>
    );
}
 
export default Tools;
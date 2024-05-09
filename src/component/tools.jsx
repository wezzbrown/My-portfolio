import Html from '../assets/image/html.png'
import Css from '../assets/image/css.png'
import Tailwind from '../assets/image/tailwind.png'
import Reactp from '../assets/image/react.png'
import Bootstrap from '../assets/image/bootstrap.png'
import Js from '../assets/image/js.png'

const Tools = () => {
    return ( 
        <div className='tools-container'>
          <h2>Libaries and Frameworks Learnt</h2>
        <div className='tools'>
           
            <div className='indi-tool'>
            <img src={Html} alt="Profile" className="tools-pic" />
            <h3 className=''>HTML</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Css} alt="Profile" className="tools-pic" />
            <h3>CSS</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Bootstrap} alt="Profile" className="tools-pic" />
            <h3>BOOTSTRAP</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Js} alt="Profile" className="tools-pic" />
            <h3>JAVASCRIPT</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Reactp} alt="Profile" className="tools-pic" />
            <h3>REACT JS</h3>
            </div>
            <div  className='indi-tool'>
            <img src={Tailwind} alt="Profile" className="tools-pic" />
            <h3>TAILWIND</h3>
            </div>
        </div>
        </div> 
    );
}
 
export default Tools;
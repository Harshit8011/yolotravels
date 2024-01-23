import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
         <div className='header'>
        <div className='row ghi'>
          <div className='col-1 threedots'>
          </div>
          <div className='col-8'>

            <input className='searchbar' placeholder='Search Or Enter Website Name'></input>
          </div>
          <div className='col-2'>
            <h4 className='ylo'>YOLO TRAVELS</h4>
          </div>
        </div>
      </div>

      <div className='aboutsctn'>
                <div className='row firstrw'>
                    <div className='col-3'>
                        <p className='p1'>84 Forest Ave, Lake Grove-Manali..</p>
                    </div>
                    <div className='col-2'>
                        <p className='p2'>(+91)345 678 876</p>
                    </div>
                    <div className='col-2'>
                        <p className='p2'>yolotravel@gmail.com</p>
                    </div>

                    <div className='col-1'>
                        <FontAwesomeIcon className=" fight1" icon={faFacebookF} size="1x" />
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon className=" fight1" icon={faTwitter} size="1x" />
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon className=" fight1" icon={faWhatsapp} size="1x" />
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon className=" fight1" icon={faInstagram} size="1x" />
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon className=" fight1" icon={faYoutube} size="1x" />

                    </div>
                </div>

                <div className='row secondrw'>

                    <div className='col-1 logo'> </div>
                    <div className='col-2 '>
                        <p className='yolo'>YOLO TRAVELS</p>
                    </div>
                    <div className='col-9'>

                        <nav class="navbar navbar-expand-lg navbar-light bg-light nv">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse clse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <Link to="/home"><a class="nav-link hme1" href="#">HOME</a></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/about"><a class="nav-link hme1" href="#">ABOUT</a></Link>    
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/packages"> <a class="nav-link hme1" href="#">PACKAGES</a></Link>   
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/contact"><a class="nav-link hme1" href="#">CONTACT US</a></Link> 
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
                <div className='row aboutthirdrw'>
                    

                    
                </div>
            </div>
      
    </div>
  )
}

export default About

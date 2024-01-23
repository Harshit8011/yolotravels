import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Section1 = () => {
    return (
        <div className='redy'>
            <div className='sctn'>
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
                <div className='row thirdrw'>
                    <div className='col-7 colm1'>
                        <div className='row'></div>
                        <p className='wlcm'>WELCOME TO HIMACHAL</p>
                        <div className='row fourthrw'>
                            <div className='col-2 clnm1'>
                                <p className='sml1'>SHIMLA</p>
                            </div>
                            <div className='col-2 clnm1'>
                                <p className='sml1'>MANALI</p>
                            </div>
                            <div className='col-2 clnm1'>
                                <p className='sml1'>KULLU</p>
                            </div>
                            <div className='col-2 clnm1'>
                                <p className='sml1'>KHAJJIAR</p>
                            </div>
                            <div className='col-2 clnm2'>
                                <p className='sml1'>DHARAMSHALA</p>
                            </div>
                            <div className='col-2 clnm3'>
                                <p className='sml1'>DHALOUSIE</p>
                            </div>
                        </div>
                        <p className=' best '>BEST PRICE GUARANTEED</p>
                    </div>

                    <div className='col-4 colm2'>
                        <div className='servicing'>
                            <p className='sevc'>“Serving You Since 8 Years”</p>
                            <p className='sevc1'>Get Free Quotes</p>
                        </div>

                        <input className='box1' placeholder='Name'></input>
                        <input className='box2' placeholder='Email'></input>
                        <input type="number" className='box2' placeholder='Mobile No.'></input>
                        <input className='box2' type="date" name="begin" placeholder="dd-mm-yyyy"></input>
                        <input className='box2' placeholder='Message'></input>
                        <button type="button" class="btn btn-danger btn1">Send Enquiry</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section1

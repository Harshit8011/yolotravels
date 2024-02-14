import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
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
                    <div class="dropdown">
                      <button class="dropbtn nav-link"><a>PACKAGES</a></button>
                      <div class="dropdown-content">
                        <Link to="/packagegrid">Package Grid</Link>
                        <Link to="/packageslidebar">package Slidebar</Link>
                        <Link to="/packagedetails">package Details</Link>
                      </div>
                    </div>
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
          <h1 className='aboutus'>Contact Us</h1>
        </div>
      </div>

      <div className='row rwy'>
        <div className='col-4 igms1'></div>
        <div className='col-5'>
          <h2 className='cntct'>Contact Info.</h2>
          <button type="button" class="btn btn-light cntctbtn">
            <p className='lets'>Let’s Talk</p>
            <p className='lets1'>[email protected]</p>
            <p className='lets5'>+ 70186-91973</p>
          </button>

          <button type="button" class="btn btn-light cntctbtn">
            <p className='lets'>Location</p>
            <p className='lets2'>Village Manla , P.O Neri , Summerhill,Shimla,Himachal Pradesh (1711003)</p>
          </button>

          <button type="button" class="btn btn-light cntctbtn">
            <p className='lets'>Visit Us.</p>
            <p className='lets3'>Facebook: https://www.facebook.com/egenslab
            </p>
            <p className='lets4'>Twitter: https://www.twitter.com/egenslab</p>
          </button>
        </div>
      </div>

      <div className='mainboxinput'>
        <h4 className='gt'>Get a free Keystroke quote now</h4>
        <h6 className='gt1'>Your email address will not be published. Required fields are marked *</h6>

        <div className='row inptyrwe'>
          <div className='col-6'>
            <h6 className='nbh'>Name</h6>
            <input className='cnjhty' placeholder='Your Name'></input>
          </div>

          <div className='col-6'>
            <h6 className='nbh'>Email</h6>
            <input className='cnjhty' placeholder='Your Email'></input>
          </div>

          <div className='row inptyrwe1'>
            <input className='cnjhty1' placeholder='Your Message'></input>
          </div>
          <button type="button" class="btn btn-danger onme">Send Message</button>


        </div>
      </div>




      <div className='secondlast'>
            <p className='dscvrsc'>PRIVATE TOURS , EDUCATIONAL TOURS , GROUP TOURS , TOUR PICK-UP SERVICE , CITY TOURS , SIGHTSEEING TOURS , CUSTOMIZE PACKAGE , CYCLING TOUR</p>
            <p className='dscvrsc1'>CAB TOUR , CAMPING TOUR , CAR BOOKING , CAR TOUR , CULTURAL TOURS , FULL DAY TOUR , HILL STATION TOUR , HOLIDAY PACKAGE  </p>
            <p className='dscvrsc1'>DESTINATION MANAGEMENT , DOMENSTIC PACAKGE , FULL DAY EXURSION  ,HOTEL PACKAGES , INTERNATIONAL PACKAGES </p>
            <p className='dscvrsc1'>HOLIDAY TOUR , HONEYMOON PACKAGE , HONEYMOON SPECIAL TOUR , HOTEL BOOKING ,  TOUR PACKAGE TOUR  </p>
            <p className='dscvrsc1'>LEH LADAKH TOUR , MEAL PLAN , MOTORBIKE TOUR , RAJASTHAN TOUR , RIVER RAFITING </p>
            <p className='dscvrsc1'>TRANSPORT SERVICES , TREKKING TOUR , TRAVEL PACKAGES  </p>
            <p className='dscvrsc1'>TEMPLE TOUR PACKAGE  </p>

            <h3 className='hmchl'>The Yolo Travels</h3>
            <p className='dscvrsc2'>A TOUR AND TRAVEL MANAGEMENT COMPANY </p>
            <p className='dscvrsc2'>Village Manla , P.O Neri , Summerhill.</p>
            <p className='dscvrsc2'>Shimla,Himachal Pradesh (1711003)</p>
        </div>

      <div className='footer'>
      <p className='cpyright'>@ Copyright All Right Reserved For "THE YOLO TRAVELS" Design By MILLIYUNIUM SOFT</p>
        </div>


    </div>
  )
}

export default Contact

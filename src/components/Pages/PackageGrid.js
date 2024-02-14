import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
const PackageGrid = () => {
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
          <h1 className='aboutus'>Tour Package</h1>
        </div>
      </div>

      <div className='griddiv'>
        <div className=' row pckgrow'>
          <div className='col-4'>

            <div class="card cr1">
              <img class=" crd22"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd23"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd24"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className=' row pckgrow'>
          <div className='col-4'>

            <div class="card cr1">
              <img class=" crd25"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd26"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd27"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className=' row pckgrow'>
          <div className='col-4'>

            <div class="card cr1">
              <img class=" crd28"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd29"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd30"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=' row pckgrow'>
          <div className='col-4'>

            <div class="card cr1">
              <img class=" crd31"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd32"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div class="card cr1">
              <img class=" crd33"></img>
              <div class="card-body">
                <p class="card-title incrderdble">Incredible Shimla Manali by Car</p>
                <p class="card-text duration">Duration: 05Nights/06 Days</p>
                <div className='row crdicnrow1'>
                  <div className='col-6'>
                    <button type="button" class="btn btn-danger book1">Book Now</button>
                  </div>
                  <div className='col-6'>
                    <p className='from'>From</p>
                    <p className='from1'>2000 Per Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='row bnyu'>
        <div className='col-2'>
          <button type="button" class="btn btn-danger rfg">01</button>
        </div>
        <div className='col-2'>
          <button type="button" class="btn btn-danger rfg">02</button>
        </div>
        <div className='col-2'>
          <button type="button" class="btn btn-danger rfg">03</button>
        </div>
        <div className='col-2'>
          <button type="button" class="btn btn-danger rfg">04</button>
        </div>
        <div className='col-2'>
          <button type="button" class="btn btn-danger rfg">05</button>
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

export default PackageGrid

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube, faClock } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faBus, faPerson, faShoePrints, faStopwatch, faUserGroup } from '@fortawesome/free-solid-svg-icons'


const PackageDetails = () => {
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
          <h1 className='aboutus'>Tour Details</h1>
        </div>
      </div>

      <div className='row detailsrow'>
        <div className='col-7 nji'>
          <div className='row topdurationrow'>
            <div className='col-3'>
              <div className='row bhk'>
                <div className='col-4'>
                  <FontAwesomeIcon className=" stpwatch" icon={faStopwatch} size="2x" />
                </div>
                <div className='col-8'>
                  <p className='drtn'>Duration</p>
                  <p className='fr'>4 Days</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='row'>
                <div className='col-4'>
                  <FontAwesomeIcon className=" stpwatch" icon={faShoePrints} size="2x" />
                </div>
                <div className='col-8'>
                  <p className='drtn'>Tour Type</p>
                  <p className='fr'>Daily Tour</p>
                </div>
              </div>
            </div>
            <div className='col-3'>

              <div className='row'>
                <div className='col-4'>
                  <FontAwesomeIcon className=" stpwatch" icon={faUserGroup} size="2x" />
                </div>
                <div className='col-8'>
                  <p className='drtn'>Group Size</p>
                  <p className='fr'>30 People</p>
                </div>
              </div>

            </div>
            <div className='col-3'>

              <div className='row'>
                <div className='col-4'>
                  <FontAwesomeIcon className=" stpwatch" icon={faPerson} size="2x" />
                </div>
                <div className='col-8'>
                  <p className='drtn'>Tour Guide</p>
                  <p className='fr'>05 People</p>
                </div>
              </div>
            </div>
          </div>

          <div className='tjmhl'></div>
          <p className='snk'>Shimla</p>
          <p className='twnhl'>Town Hall</p>

          <div className='row dtlbtnrow'>
            <div className='col-3'>
              <button type="button" class="btn btn-danger ngrbtn">Information</button>
            </div>
            <div className='col-3'>
              <button type="button" class="btn btn-danger ngrbtn1">Travel Plan</button>
            </div>
            <div className='col-3'>
              <button type="button" class="btn btn-danger ngrbtn1">Tour gallery</button>
            </div>
            <div className='col-3'>
              <button type="button" class="btn btn-danger ngrbtn1">Location</button>
            </div>

          </div>

          <p className='pkgdtl'>Package Details</p>
          <p className='snk'>Town Hall :-</p>
          <p className='twnhdng'>The Town Hall Shimla was constructed in 1910 during the British Rule in India. The British had made Shimla, the summer capital of the nation. During summers, government officials used to come and stay in Shiml and lots of administrative jobs used to be done here at Shimla.
            The Town Hall Building constructed in 1908 by Scottish Architect James Ransome has been the center of municipal activities since the beginning and it currently houses the Shimla Municipal Corporation. The building adds to the surrounding architecture, reminiscent of the pre-independence era. The large steps and the entrance to this building are a common site for pictures depicting the Mall at Shimla. A project was started in 2014 to restore the building to its original look and more than 8 crore rupees were spent in renovating this colonial architectural marvel.[9]
          </p>

          <div className='row imagerow'>
            <div className='col-5 image1'></div>
            <div className='col-5 image2'></div>
          </div>

          <div className='detailsmaindiv'>
            <div className='row brdrrew'>
              <div className='col-4 dstnationclm'>
                <p className='destination'>Destination</p>
              </div>
              <div className='col-8'>
                <p className='shimla'>Shimla</p>
              </div>
            </div>

            <div className='row brdrrew'>
              <div className='col-4 dstnationclm'>
                <p className='destination'>Depature</p>
              </div>
              <div className='col-8'>
                <p className='shimla'>Yes Required</p>
              </div>
            </div>

            <div className='row brdrrew'>
              <div className='col-4 dstnationclm'>
                <p className='destination'>Departure Time</p>
              </div>
              <div className='col-8'>
                <p className='shimla'>01 january, 2024 10.00AM</p>
              </div>
            </div>

            <div className='row brdrrew'>
              <div className='col-4 dstnationclm'>
                <p className='destination'>Included</p>
              </div>
              <div className='col-8'>
                <p className='shimla'>Specilaized Bilingual Guide
                  Private Transport
                  Entrance Fees
                  Box Lunch,Water,Dinner and Snacks</p>
              </div>
            </div>

            <div className='row brdrrew1'>
              <div className='col-4 dstnationclm'>
                <p className='destination'>Excluded</p>
              </div>
              <div className='col-8'>
                <p className='shimla'>Additional Services
                  Insurance
                  Drink
                  Tickets</p>
              </div>

            </div>
            <div className='row'>
              <div className='col-6'>
                <FontAwesomeIcon className=" bs" icon={faBus} size="2x" />

              </div>
              <div className='col-6'>
                <p className='trvlbus'>Travel With Bus</p>
              </div>
            </div>

          </div>
          <p className='ovrvw'>Overview</p>

          <div className='overviewdiv'>
            <div className='row  overviewrow'>
              <div className='col-4 grayclr'>
                <p className='tens'>10.00</p>
                <p className='exlnt'>Excellent</p>
              </div>
              <div className='col-8'>

                <p className='Accommodation'>Accommodation</p>
                <input className='rnge' type="range" id="points" name="points" min="0" max="10"></input>


                <p className='Accommodation'>Transport</p>
                <input className='rnge' type="range" id="points" name="points" min="0" max="10"></input>


                <p className='Accommodation'>Comfort</p>
                <input className='rnge' type="range" id="points" name="points" min="0" max="10"></input>


                <p className='Accommodation'>Hospitality</p>
                <input className='rnge' type="range" id="points" name="points" min="0" max="10"></input>


                <p className='Accommodation'>Food</p>
                <input className='rnge1' type="range" id="points" name="points" min="0" max="10"></input>

              </div>
            </div>

          </div>
          <div className='row imgsrow'>
            <div className='col-3 imagess1'></div>
            <div className='col-9'>
              <p className='slvpry'>Silvia Perry</p>
              <p className='two'>2 january, 2024  10.00PM</p>
              <p className='mrbii'>Morbi Dictum Pulvinar Velit, Id Mollis Lorem Faucibus AcUt Sed Lacinia Ipsum. Cibuses AcUt Sed Lacinia Ipsum. Suspendisse</p>
              <p className='rply'>Reply</p>
            </div>
          </div>

          <div className='row imgsrow1'>
            <div className='col-3 imagess2'></div>
            <div className='col-9'>
              <p className='slvpry'>Silvia Perry</p>
              <p className='two'>2 january, 2024  10.00PM</p>
              <p className='mrbii'>Morbi Dictum Pulvinar Velit, Id Mollis Lorem Faucibus AcUt Sed Lacinia Ipsum. Cibuses AcUt Sed Lacinia Ipsum. Suspendisse</p>
              <p className='rply'>Reply</p>
            </div>
          </div>

          <div className='row imgsrow1'>
            <div className='col-3 imagess3'></div>
            <div className='col-9'>
              <p className='slvpry'>Silvia Perry</p>
              <p className='two'>2 january, 2024 10.00PM</p>
              <p className='mrbii'>Morbi Dictum Pulvinar Velit, Id Mollis Lorem Faucibus AcUt Sed Lacinia Ipsum. Cibuses AcUt Sed Lacinia Ipsum. Suspendisse</p>
              <p className='rply'>Reply</p>
            </div>
          </div>

          <p className='vacmnts'>View All Comment</p>

          <div className='leavecommentform'>
            <p className='lvecmnt'>Leave Your Comment</p>

            <div className='row bnhh'>
              <div className='col-5'>
                <input className='bux1' type='text' placeholder='Your Full Name'></input>
              </div>
              <div className='col-5'>
                <input className='bux1' type='text' placeholder='Your Full Name'></input>
              </div>
              <input className='bux2' type='text' placeholder='Tour Type'></input>
              <input className='bux3' type='text' placeholder='Your Full Name'></input>
              <button type="button" class="btn btn-danger lstbyt">Send Message</button>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='booktour'>
            <div className='inrdiv1'>
              <p className='bnkk'>Book This Tour &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                $75 Per Person</p>
            </div>
            <input className='bkthis' type="text" placeholder='Your Full Name'></input>
            <input className='bkthis1' type="text" placeholder='Your Email'></input>
            <input className='bkthis1' type="number" placeholder='Phone'></input>
            <input className='bkthis1' type="text" placeholder='Tickets Type'></input>

            <div className='row chldrw'>
              <div className='col-6'>
                <input className='bkthis2' type="text" placeholder='Adult'></input>
              </div>
              <div className='col-6'>
                <input className='bkthis2' type="text" placeholder='Child'></input>
              </div>
            </div>
            <input className='bkthis1' type="text" placeholder='Select Your Date'></input>
            <input className='bkthis3' type="text" placeholder='Your Messages'></input>
            <button type="button" class="btn btn-danger kju">Book Now</button>
          </div>


          <div className='booktour'>
            <div className='inrdiv1'>
              <p className='ofr'>Offer Package</p>
            </div>

            <div className='row offerboxrow '>
              <div className='col-4 offerboximage'></div>
              <div className='col-8'>
                <p className='fan'>San Francisco Golden Gate Bridge, cable cars & fog</p>
                <p className='frmm'>From</p>
                <p className='frmm1'>$67.00 Per Person</p>
              </div>
            </div>

            <div className='row offerboxrow '>
              <div className='col-4 offerboximage1'></div>
              <div className='col-8'>
                <p className='fan'>San Francisco Golden Gate Bridge, cable cars & fog</p>
                <p className='frmm'>From</p>
                <p className='frmm1'>$67.00 Per Person</p>
              </div>
            </div>

            <div className='row offerboxrow '>
              <div className='col-4 offerboximage2'></div>
              <div className='col-8'>
                <p className='fan'>San Francisco Golden Gate Bridge, cable cars & fog</p>
                <p className='frmm'>From</p>
                <p className='frmm1'>$67.00 Per Person</p>
              </div>
            </div>

            <div className='row offerboxrow '>
              <div className='col-4 offerboximage3'></div>
              <div className='col-8'>
                <p className='fan'>San Francisco Golden Gate Bridge, cable cars & fog</p>
                <p className='frmm'>From</p>
                <p className='frmm1'>$67.00 Per Person</p>
              </div>
            </div>


          </div>

          <div className='booktour1'>
            <div className='inrdiv1'>
              <p className='ofr'>Package Tag</p>

              <div className='row pckggroww'>
                <div className='col-3 btnclmm1'>
                  <button type="button" class="btn btn-danger packageebtn">Adventure</button>
                </div>
                <div className='col-3 btnclmm2'>
                  <button type="button" class="btn btn-danger packageebtn1">Trip</button>
                </div>
                <div className='col-3 btnclmm3'>
                  <button type="button" class="btn btn-danger packageebtn">Guided</button>
                </div>
              </div>

              <div className='row pckggroww1'>
                <div className='col-3 btnclmm1'>
                  <button type="button" class="btn btn-danger packageebtn">Historical</button>
                </div>
                <div className='col-3 btnclmm4'>
                  <button type="button" class="btn btn-danger packageebtn1"> Road Trips</button>
                </div>
                <div className='col-3 btnclmm3'>
                  <button type="button" class="btn btn-danger packageebtn">Tourist</button>
                </div>
              </div>

              <div className='row pckggroww1'>
                <div className='col-3 btnclmm1'>
                  <button type="button" class="btn btn-danger packageebtn">Weekend</button>
                </div>
                <div className='col-3 btnclmm4'>
                  <button type="button" class="btn btn-danger packageebtn1">Hill</button>
                </div>
              </div>
            </div>

          </div>

          <div className='ofseventy1'>
            <p className='bgst'>Biggest Offer</p>
            <p className='bgst1'>75%</p>
            <p className='bgst2'>OFF</p>
            <button type="button" class="btn btn-danger bknw">Book Now</button>
          </div>

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

export default PackageDetails

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const About = () => {
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
                    <h1 className='aboutus'>About Us</h1>
                </div>
            </div>
            
            <div className='row mrgnrew'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-5 frstimg'></div>
                        <div className='col-5 secondimg'></div>
                    </div>
                </div>
                <div className='col-6'>
                    <h1 className='abtpgeab'>About Our Company And What We Are Offer.</h1>
                    <div className='row'>
                        <button type="button" class="btn btn-danger tenyear">10<br></br>Years Experience</button>
                        <button type="button" class="btn btn-danger tenyear">100+<br></br>Tour Guide</button>
                        <button type="button" class="btn btn-danger tenyear">500+<br></br>Traveler Connect</button>
                    </div>
                    <p className='duis'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consente consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc consectetur.</p>
                </div>
            </div>

            <div className='row packagebookmainrow'>
                <div className='col-6'>
                    <h1 className='pckg1'>Why Package Book With Yolo Travels</h1>
                    <button type="button" class="btn btn-light panchsw">
                        <div className='row'>
                            <div className='col-3'>
                                <p className='hhh'>500+</p>
                                <p className='iii'>Awesome Tour</p>

                            </div>
                            <div className='col-9'>
                                <p className='jj'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt enlane molestie turpis nec lacinia vehicula.</p>
                            </div>
                        </div>
                    </button>

                    <button type="button" class="btn btn-light panchsw">
                        <div className='row'>
                            <div className='col-3'>
                                <p className='hhh'>300+</p>
                                <p className='iiij'>Destinations</p>

                            </div>
                            <div className='col-9'>
                                <p className='jj'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt enlane molestie turpis nec lacinia vehicula.</p>
                            </div>
                        </div>
                    </button>

                    <button type="button" class="btn btn-light panchsw">
                        <div className='row'>
                            <div className='col-3'>
                                <p className='hhh'>150+</p>
                                <p className='iiij'>Mountains</p>

                            </div>
                            <div className='col-9'>
                                <p className='jj'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt enlane molestie turpis nec lacinia vehicula.</p>
                            </div>
                        </div>
                    </button>
                </div>

                <div className='col-6 clge'></div>
            </div>

            <div className='row guiderow'>
                <h1 className='trgd'>Tour Guide</h1>
                <div className='col-4'>
                    <div class="card tour1" >
                        <img class="card-img-top prm1" src="prem-sagar.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text prmsgr">Prem Sagar - Himachal Pradesh</p>
                            <p className='ter'>Tour Guide</p>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div class="card tour1 " >
                        <img class="card-img-top prm1" src="hadlee-renjith.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text prmsgr">Hadlee Renjith - Munnar</p>
                            <p className='ter'>Tour Guide</p>
                        </div>
                    </div>

                </div>
                <div className='col-4'>
                    <div class="card tour1" >
                        <img class="card-img-top prm1" src="Anwar.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text prmsgr">Anwar Wain - Gulmarg</p>
                            <p className='ter'>Tour Guide</p>
                        </div>
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

export default About

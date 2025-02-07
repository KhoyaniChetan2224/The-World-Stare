import './App.css'
// import './main1.jsx'
// import './ScrollReveal.js'
import about1 from './img/about-1.avif';
import about2 from './img/about-2.jpg';
import room1 from './img/room-1.jpg';
import room2 from './img/room-2.jpg';
import room3 from './img/room-3.jpg';
import video from './img/luxury.mp4';
import menu1 from './img/menu-1.jpg';
import menu2 from './img/menu-2.jpg';
import menu3 from './img/menu-3.jpg';
import menu4 from './img/menu-4.jpg';
import menu5 from './img/menu-5.jpg';
import menu6 from './img/menu-6.jpg';
import menu7 from './img/menu-7.jpg';
import menu8 from './img/menu-8.jpg';
import menu9 from './img/menu-9.jpg';
import news1 from './img/news-1.jpg';
import news2 from './img/menu-2.jpg';
import news3 from './img/menu-3.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function App() {

  return (
    <>
      <div>
        <nav>
          <div className="nav__bar">
            <div className="nav__header">
              <div className="logo nav__logo">
                <span>
                  <a href="#">
                    The World Stare
                  </a>
                </span>
              </div>
              <div className="nav__menu__btn" id="menu-btn">
                <i className="ri-menu-line"></i>
              </div>
            </div>
            <ul className="nav__links" id="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#room">Room</a></li>
              <li><a href="#feature">Feature</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </nav>

        <header className="header" id="home">
          <div className="section__container header__container">
            <p className="section__subheader">WELCOM</p>
            <h4>The Perfect<br />Hotel For You</h4>
          </div>
        </header>

        <section className="booking">
          <div className="section__container booking__container">
            <form action="/">
              <div className="input__group">
                <label form="arrival">Arrival Date</label>
                <input type="text" placeholder="Your Arrival Date" />
              </div>
              <div className="input__group">
                <label form="departure">Departure Date</label>
                <input type="text" placeholder="Your Departure Date" />
              </div>
              <div className="input__group">
                <label form="guests">Guests</label>
                <input type="text" placeholder="No Of Guests" />
              </div>
              <button className="btn">Check Availability</button>
            </form>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section__container about__container">
            <div className="about__grid">
              <div className="about__image">
                <img src={about1} alt="about Image" />
              </div>
              <div className="about__card">
                <span><i className="ri-user-line"></i></span>
                <h4>Strong Team</h4>
                <p>
                  Unlocking Hospitality Excellence And Ensures Your Perfect Stay
                </p>
              </div>
              <div className="about__image">
                <img src={about2} alt="header Image" />
              </div>
              <div className="about__card">
                <span><i className="ri-calendar-check-line"></i></span>
                <h4>Luxury Room</h4>
                <p>Experience Unrivaled Luxury at Our Exquisite Luxury Rooms</p>
              </div>
            </div>
            <div className="about__content">
              <p className="section__subheader">ABOUT US</p>
              <h2 className="section__header">Discover Our Underground</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis quas esse dignissimos cumque veritatis
                natus accusantium itaque illo eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
                officia.
              </p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </section>

        <section className="room__container" id="room">
          <p className="section__subheader">ROOMS</p>
          <h2 className="section__header">Hand Picked Rooms</h2>
          <div className="room__grid">
            <div className="room__card">
              <img src={room1} alt="room1 Image" />
              <div className="room__card__details">
                <div>
                  <h4>Deluxe Suite</h4>
                  <p>Well-appointed rooms designed for guests who desire a more.</p>
                </div>
                <h3>$399<span>/night</span></h3>
              </div>
            </div>
            <div className="room__card">
              <img src={room2} alt="room2 Image" />
              <div className="room__card__details">
                <div>
                  <h4>Family Suite</h4>
                  <p>Consist of multiple rooms and a common living area.</p>
                </div>
                <h3>$599<span>/night</span></h3>
              </div>
            </div>
            <div className="room__card">
              <img src={room3} alt="room3 Image" />
              <div className="room__card__details">
                <div>
                  <h4>Luxury Penthouse</h4>
                  <p>
                    Top-tier accommodations usually on the highest floors of a
                    hotel.
                  </p>
                </div>
                <h3>$799<span>/night</span></h3>
              </div>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="section__container intro__container">
            <div className="intro__cotent">
              <p className="section__subheader">INTRO VIDEO</p>
              <h2 className="section__header">Meet With Our Luxury Place</h2>
              <p className="section__description">
                Whether youre seeking a cozy and exclusive hideaway or an immersive
                journey beneath the surface, Hotel Miranda promises to be an
                unforgettable stay, where the depths of comfort and excitement await
                your arrival.
              </p>
              <button className="btn">Book Now</button>
            </div>
            <div className="intro__video">
              <video src={video} alt="luxury Video" autoPlay muted loop></video>
            </div>
          </div>
        </section>

        <section className="section__container feature__container" id="feature">
          <p className="section__subheader">FACILITIES</p>
          <h2 className="section__header">Core Features</h2>
          <div className="feature__grid">
            <div className="feature__card">
              <span><i className="ri-thumb-up-line"></i></span>
              <h4>Have High Rating</h4>
              <p>
                We take pride in curating a selection of hotels that consistently
                receive high ratings and positive reviews.
              </p>
            </div>
            <div className="feature__card">
              <span><i className="ri-time-line"></i></span>
              <h4>Quite Hours</h4>
              <p>
                We understand that peace and uninterrupted rest are essential for a
                rejuvenating experience.
              </p>
            </div>
            <div className="feature__card">
              <span><i className="ri-map-pin-line"></i></span>
              <h4>Best Location</h4>
              <p>
                At our hotel booking website, we take pride in offering
                accommodations in the most prime and sought-after locations.
              </p>
            </div>
            <div className="feature__card">
              <span><i className="ri-close-circle-line"></i></span>
              <h4>Free Cancellation</h4>
              <p>
                We understand that travel plans can change unexpectedly, which is
                why we offer the flexibility of free cancellation.
              </p>
            </div>
            <div className="feature__card">
              <span><i className="ri-wallet-line"></i></span>
              <h4>Payment Options</h4>
              <p>
                Our hotel booking website offers a range of convenient payment
                options to suit your preferences.
              </p>
            </div>
            <div className="feature__card">
              <span><i className="ri-coupon-line"></i></span>
              <h4>Special Offers</h4>
              <p>
                Whether you re planning a romantic getaway, or a business trip, our
                carefully curated special offers cater to all your needs.
              </p>
            </div>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="section__container menu__container">
            <div className="menu__header">
              <div>
                <p className="section__subheader">MENU</p>
                <h2 className="section__header">Our Food Menu</h2>
              </div>
              <div className="section__nav">
                <span><i className="ri-arrow-left-line"></i></span>
                <span><i className="ri-arrow-right-line"></i></span>
              </div>
            </div>
            <ul className="menu__items">
              <li>
                <img src={menu1} alt="menu Image" />
                <div className="menu__details">
                  <h4>Fggs & Bacon</h4>
                  <p>
                    It is a culinary innovation that puts a unique spin on the
                    beloved breakfast combination.
                  </p>
                </div>
              </li>
              <li>
                <img src={menu2} alt="menu Image" />
                <div className="menu__details">
                  <h4>Tea or Coffee</h4>
                  <p>
                    A classNameic choice for your daily dose of comfort and calmness.
                  </p>
                </div>
              </li>
              <li>
                <img src={menu3} alt="menu Image" />
                <div className="menu__details">
                  <h4>Chia Oatmeal</h4>
                  <p>
                    Our Chia Oatmeal is a wholesome nutrient-packed breakfast
                    delight.
                  </p>
                </div>
              </li>
              <li>
                <img src={menu4} alt="menu Image" />
                <div className="menu__details">
                  <h4>Fruit Parfait</h4>
                  <p>
                    Our Fruit Parfait is a delightful culinary masterpiece of
                    freshness and flavor.
                  </p>
                </div>
              </li>
              <li>
                <img src={menu5} alt="menu Image" />
                <div className="menu__details">
                  <h4>Marmalade Selection</h4>
                  <p>
                    Our Marmalade Selection is a delectable medley of vibrant,
                    handcrafted citrus preserves.
                  </p>
                </div>
              </li>
              <li>
                <img src={menu6} alt="menu Image" />
                <div className="menu__details">
                  <h4>Cheese Plate</h4>
                  <p>
                    Our cheese plate is a masterpiece that celebrates rich and
                    diverse world of cheeses.
                  </p>
                </div>
              </li>
            </ul>
            <div className="menu__images">
              <img src={menu7} alt="menu Image" />
              <img src={menu8} alt="menu Image" />
              <img src={menu9} alt="menu Image" />
            </div>
            <ul className="menu__banner">
              <li>
                <span><i className="ri-file-text-line"></i></span>
                <h4>84k</h4>
                <p>Projects are Completed</p>
              </li>
              <li>
                <span><i className="ri-user-line"></i></span>
                <h4>10M</h4>
                <p>Active Around World</p>
              </li>
              <li>
                <span><i className="ri-function-line"></i></span>
                <h4>02k</h4>
                <p>Categories Served</p>
              </li>
              <li>
                <span><i className="ri-lightbulb-flash-line"></i></span>
                <h4>100M</h4>
                <p>Ideas Raised Funds</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section__container news__container" id="news">
          <div className="news__header">
            <div>
              <p className="section__subheader">BLOG</p>
              <h2 className="section__header">News Feeds</h2>
            </div>
            <div className="section__nav">
              <span><i className="ri-arrow-left-line"></i></span>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div className="news__grid">
            <div className="news__card">
              <img src={news1} alt="News Image" />
              <div className="news__card__title">
                <p>25th March 2023</p>
                <p>By Emily</p>
              </div>
              <h4>Exploring Local Culinary Gems: A Foodie s Guide.</h4>
              <p>
                Join Emily as she takes you on a gastronomic adventure through the
                neighborhood surrounding our hotel.
              </p>
            </div>
            <div className="news__card">
              <img src={news2} alt="News Image" />
              <div className="news__card__title">
                <p>15th June 2023</p>
                <p>By David</p>
              </div>
              <h4>Balancing Mind, Body, and Soul at Our Hotel.</h4>
              <p>
                Discover holistic spa treatments, fitness facilities, and
                mindfulness practices that will leave you feeling refreshed.
              </p>
            </div>
            <div className="news__card">
              <img src={news3} alt="News Image" />
              <div className="news__card__title">
                <p>08th August 2023</p>
                <p>By Sarah</p>
              </div>
              <h4>Exploring Outdoor Activities Near Our Hotel.</h4>
              <p>
                From hiking and biking trails to water sports and wildlife
                encounters, she highlights ways to experience nature s wonders.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="section__container footer__container">
            <div className="footer__col">
              <div className="logo footer__logo">
                <div>G</div>
                <span>Gujrati<br />Hotel</span>
              </div>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                laudantium unde. Doloremque eaque debitis laborum labore voluptates
                iste molestiae consectetur. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Laboriosam cum culpa similique illo
                sed consectetur eaque ad omnis consequuntur saepe.
              </p>
              <ul className="footer__socials">
                <li>
                  <a href='#'><FaLinkedin /></a>
                </li>
                {/* <li>
                  <a href='#'><FaGithub /></a>
                </li> */}
                <li>
                  <a href='#'><FaTwitter /></a>
                </li>
                {/* <li>
                  <a href='#'><SiLeetcode /></a>
                </li> */}
              </ul>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <div className="footer__links">
                <li><a href="#">Online Booking</a></li>
                <li><a href="#">Room Customization</a></li>
                <li><a href="#">Virtual Tours</a></li>
                <li><a href="#">Special Offers</a></li>
                <li><a href="#">Concierge Services</a></li>
                <li><a href="#">Customer Support</a></li>
              </div>
            </div>
            <div className="footer__col">
              <h4>Contact Us</h4>
              <div className="footer__links">
                <li>
                  <span><i className="ri-phone-fill"></i></span>
                  <div>
                    <h5>Phone Number</h5>
                    <p>+91 98765*****</p>
                  </div>
                </li>
                <li>
                  <span><i className="ri-record-mail-line"></i></span>
                  <div>
                    <h5>Email</h5>
                    <p>gh@gamil.com</p>
                  </div>
                </li>
                <li>
                  <span><i className="ri-map-pin-2-fill"></i></span>
                  <div>
                    <h5>Location</h5>
                    <p>First St. NYC</p>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="footer__bar">
            Copyright © 2025 Web Developer. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
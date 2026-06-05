import React, { useState } from 'react';
import './index.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
 
// Reusable Package Card Component
const PackageCard = ({ title, rating, price, image }) => (
  <div className="package-card">
    <div className="package-image" style={{ background: `url('${image}') center/cover` }}>
      <button className="heart-btn">♡</button>
    </div>
    <div className="package-details">
      <div className="title-row">
        <h3>{title}</h3>
        <span className="rating">★ {rating}</span>
      </div>
      <p className="duration">3 Days 4 Nights</p>
     
      <div className="amenities-row">
        <div className="amenity"><span className="icon-small">✈️</span><span>2 Flights</span></div>
        <div className="amenity"><span className="icon-small">🏨</span><span>1 Hotel</span></div>
        <div className="amenity"><span className="icon-small">🚗</span><span>2 Transfers</span></div>
        <div className="amenity"><span className="icon-small">🏃</span><span>4 Activities</span></div>
      </div>
 
      <ul className="package-inclusions">
        <li>Tour combo with return airport transfer</li>
        <li>City Tour</li>
        <li>Curious Corner</li>
      </ul>
 
      <div className="price-row">
        <span className="old-price">₹88,952</span>
        <span className="new-price">{price} <span className="per-person">Per Person</span></span>
      </div>
    </div>
  </div>
);
 
export default function App() {
  // State to handle navigation (Home vs Category view)
  const [currentView, setCurrentView] = useState('home');
 
  const handleCategoryClick = (e) => {
    e.preventDefault();
    setCurrentView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll back to top
  };
 
  const handleLogoClick = (e) => {
    e.preventDefault();
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <div className="travel-app">
      {/* --- HERO SECTION --- */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>trxvl.</div>
          <div className="nav-links">
            <button type="button" className="nav-link" onClick={handleLogoClick}>Home</button>
            <button type="button" className="nav-link">Stays</button>
            <button type="button" className="nav-link">Flights</button>
            <button type="button" className="nav-link">Packages</button>
            <button type="button" className="nav-link">Sign Up</button>
          </div>
        </nav>
 
        <div className="hero-content">
          <h1>The whole world<br />awaits.</h1>
         
          {/* Search Pill Widget */}
          <div className="search-widget">
            <div className="search-field flex-2">
              <span className="icon">🔍</span>
              <input type="text" placeholder="Search destinations, hotels" />
            </div>
            <div className="divider desktop-only"></div>
           
            <div className="search-dates-group">
              <div className="search-field">
                <span className="icon">📅</span>
                <input type="text" placeholder="Check in" />
              </div>
              <div className="divider desktop-only"></div>
              <div className="search-field">
                <span className="icon">📅</span>
                <input type="text" placeholder="Check out" />
              </div>
            </div>
           
            <div className="divider desktop-only"></div>
            <div className="search-field">
              <span className="icon">👤</span>
              <input type="text" placeholder="1 room, 2 adults" />
            </div>
            <button className="btn-search-pill">Search</button>
          </div>
        </div>
      </header>
 
      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
       
        {/* Top Categories (Visible on both views) */}
        <section className="section top-categories">
          <h2>Top categories</h2>
          <div className="categories-scroll">
            {['🏖️ Beaches', '🌵 Deserts', '🏔️ Mountains', '🏙️ Iconic Cities', '⛵ Houseboats', '🏡 Countryside', '⛺ Camping', '🏰 Castles', '⛷️ Skiing'].map((cat, index) => (
              <button type="button" className="category-item" key={index} onClick={handleCategoryClick}>
                <div className="category-icon-emoji">{cat.split(' ')[0]}</div>
                <span>{cat.split(' ')[1]}</span>
              </button>
            ))}
          </div>
        </section>
 
        {/* ========================================= */}
        {/* CONDITIONAL RENDERING BASED ON STATE      */}
        {/* ========================================= */}
 
        {currentView === 'home' ? (
          /* ---------- HOME VIEW ---------- */
          <>
            <section className="section">
              <h2>Top Vacation Destinations</h2>
              <div className="grid-4-cols">
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4') center/cover" }}>
                  <div className="card-image-dark"><h3>Bali, Indonesia</h3></div>
                </div>
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1590089415225-401ed6f9db8e') center/cover" }}>
                  <div className="card-image-dark"><h3>Kerry, Ireland</h3></div>
                </div>
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9') center/cover" }}>
                  <div className="card-image-dark"><h3>Sydney, Australia</h3></div>
                </div>
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1511739001486-6bfe10ce785f') center/cover" }}>
                  <div className="card-image-dark"><h3>Paris, France</h3></div>
                </div>
              </div>
            </section>
 
            <section className="section">
              <h2>Offers</h2>
              <div className="grid-2-cols">
                <div className="offer-card">
                  <div className="offer-image-left" style={{ background: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05') center/cover" }}></div>
                  <div className="offer-text">
                    <span className="offer-tag">Domestic Flights</span>
                    <h3>Huge savings on flight with trxvl.</h3>
                    <p>Book domestic flights starting @ just ₹1499</p>
                    <button className="btn-book-now">Book Now</button>
                  </div>
                </div>
                <div className="offer-card">
                  <div className="offer-image-left" style={{ background: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d') center/cover" }}></div>
                  <div className="offer-text">
                    <span className="offer-tag">International Hotels</span>
                    <h3>Enjoy upto 20% off on International Hotels</h3>
                    <p>Make the most of this deal on your booking with trxvl.</p>
                    <button className="btn-book-now">Book Now</button>
                  </div>
                </div>
              </div>
            </section>
 
            <section className="section">
              <h2>Browse by property type</h2>
              <div className="grid-4-cols">
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945') center/cover" }}>
                  <div className="card-image-dark"><h3>Hotels</h3></div>
                </div>
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267') center/cover" }}>
                  <div className="card-image-dark"><h3>Apartments</h3></div>
                </div>
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b') center/cover" }}>
                  <div className="card-image-dark"><h3>Resorts</h3></div>
                </div>
                <div className="destination-basic-card" style={{ background: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9') center/cover" }}>
                  <div className="card-image-dark"><h3>Villas</h3></div>
                </div>
              </div>
            </section>
 
            <section className="section">
              <div className="expert-banner" style={{ background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b') center/cover" }}>
                <h2>Plan your trip with travel expert</h2>
                <p>Our professional advisors can craft your perfect itinerary</p>
              </div>
            </section>
 
            <section className="section">
              <h2>Connect with other travelers in our community</h2>
              <div className="grid-4-cols">
                <div className="community-card">
                  <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da" alt="India" />
                  <div className="community-info">
                    <h3>India</h3>
                    <p>Travel community</p>
                    <span>155,073 travelers</span>
                  </div>
                </div>
                <div className="community-card">
                  <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4" alt="Travel Talk" />
                  <div className="community-info">
                    <h3>Travel Talk</h3>
                    <p>Travel community</p>
                    <span>155,073 travelers</span>
                  </div>
                </div>
                <div className="community-card">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach" />
                  <div className="community-info">
                    <h3>Beach</h3>
                    <p>Travel community</p>
                    <span>155,073 travelers</span>
                  </div>
                </div>
                <div className="community-card">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Mountains" />
                  <div className="community-info">
                    <h3>Mountains</h3>
                    <p>Travel community</p>
                    <span>155,073 travelers</span>
                  </div>
                </div>
              </div>
            </section>
           
            {/* App Promo Banner (Only on Home) */}
            <div className="app-promo-section">
              <div className="app-promo-content">
                <div className="app-mockup">
                  <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" alt="App Mockup" className="phone-img" />
                </div>
                <div className="app-promo-text">
                  <h2>Your all-in-one travel app.</h2>
                  <p>Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>
                 
                  <div className="app-form">
                    <div className="contact-toggles">
                      <button className="active">Mobile</button>
                      <button>Email</button>
                    </div>
                    <p className="small-text">Enter your phone number to receive a text with a link to download the app.</p>
                    <div className="app-input-group">
                      <input type="text" placeholder="+91 Mobile number" />
                      <button className="btn-search-pill">Search</button>
                    </div>
                  </div>
                 
                  <div className="store-badges">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                  </div>
                </div>
              </div>
            </div>
          </>
 
        ) : (
 
          /* ---------- CATEGORY (PACKAGE) VIEW ---------- */
          <>
            <section className="section">
              <div className="section-header-flex">
                <h2>Popular Beach Destinations</h2>
              </div>
              <div className="grid-4-cols">
                <PackageCard title="Swiss Alps" rating="4.7" price="₹88,952" image="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80" />
                <PackageCard title="Hallstatt" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />
                <PackageCard title="Faroe Island" rating="4.5" price="₹88,952" image="https://images.unsplash.com/photo-1513553404607-988bf2703777" />
                <PackageCard title="Innsbruck" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" />
              </div>
            </section>
 
            <section className="section">
              <div className="section-header-flex">
                <h2>Recently Viewed</h2>
              </div>
              <div className="grid-4-cols">
                <PackageCard title="Hallstatt" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80" />
                <PackageCard title="Innsbruck" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80" />
               
                {/* Summer Bonanza Special Card */}
                <div className="summer-bonanza-card">
                  <h3>Summer Bonanza!</h3>
                  <p>Enjoy comfortable transfers in modern coaches</p>
                  <p>Cheese tasting at a local farm</p>
                  <p>Swiss chocolate tasting at the chocolate factory</p>
                </div>
                {/* Empty div for layout spacing to match Figma exactly */}
                <div className="empty-spacer"></div>
              </div>
            </section>
 
            <section className="section">
              <div className="section-header-flex">
                <h2>All Inclusive Packages!</h2>
              </div>
              <div className="grid-4-cols">
                <PackageCard title="Val di Funes" rating="4.7" price="₹88,952" image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" />
                <PackageCard title="Ushuaia" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1518002171953-a080ee817e1f" />
                <PackageCard title="Berchtesgaden" rating="4.5" price="₹88,952" image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05" />
                <PackageCard title="Fussen" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9" />
              </div>
            </section>
 
            <section className="section">
              <div className="section-header-flex">
                <h2>Honeymoon Freebies Special</h2>
              </div>
              <div className="grid-4-cols">
                <PackageCard title="Mauritius" rating="4.7" price="₹88,952" image="https://images.unsplash.com/photo-1566073771259-6a8506099945" />
                <PackageCard title="Havelock" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1537996194471-e657df975ab4" />
                <PackageCard title="Whitsunday Islands" rating="4.5" price="₹88,952" image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" />
                <PackageCard title="Maldives" rating="4.9" price="₹88,952" image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" />
              </div>
            </section>
          </>
        )}
      </main>
 
      {/* --- FOOTER --- */}
      <footer className="bg-[#111111] text-gray-400 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Logo Column */}
        <div className="col-span-1">
          <h2 className="text-white text-3xl font-bold">Trxvl.</h2>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <ul className="space-y-4 text-sm">
            <li><button type="button" className="hover:text-white">Seslendirme ve Alt Jazz</button></li>
            <li><button type="button" className="hover:text-white">Media Market</button></li>
            <li><button type="button" className="hover:text-white">Gillie</button></li>
            <li><button type="button" className="hover:text-white">Size Last</button></li>
          </ul>
          
          <ul className="space-y-4 text-sm">
            <li><button type="button" className="hover:text-white">Self Betimes</button></li>
            <li><button type="button" className="hover:text-white">Yatırımcı İlişkileri</button></li>
            <li><button type="button" className="hover:text-white">Basal Himmler</button></li>
          </ul>

          <ul className="space-y-4 text-sm">
            <li><button type="button" className="hover:text-white">Yard Market</button></li>
            <li><button type="button" className="hover:text-white">İş İmkanları</button></li>
            <li><button type="button" className="hover:text-white">Car Tercihleri</button></li>
          </ul>
        </div>

        {/* Right Column: Socials */}
        <div className="col-span-1 flex flex-col gap-6">
          <button className="border border-gray-600 text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            Helmet KOD
          </button>
          <div className="flex gap-4 text-xl text-white">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-xs">
        © 1997-2021 Trxvl, Inc.
      </div>
    </footer>
 
      {/* --- MOBILE BOTTOM NAV --- */}
      <div className="mobile-bottom-nav">
        <button type="button" className="nav-item active" onClick={handleLogoClick}><span className="icon">🏠</span>Home</button>
        <button type="button" className="nav-item"><span className="icon">🏨</span>Stays</button>
        <button type="button" className="nav-item"><span className="icon">✈️</span>Flights</button>
        <button type="button" className="nav-item"><span className="icon">🧳</span>Packages</button>
      </div>
    </div>
  );
}
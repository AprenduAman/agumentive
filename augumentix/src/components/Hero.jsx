import React, {useState} from 'react'
import '../components/hero.css'
import home from "../image/home.png"
import customer from "../image/customer.png"
import house2 from "../image/house2.jpg"
export default function Hero() {
    const [location, setLocation] = useState('');
    const [houseType, setHouseType] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleHouseTypeChange = (e) => {
    setHouseType(e.target.value);
  };
  const handleSearch = () => {
    
    console.log('Search:', location, houseType);
  };
  const sampleCityStateData = [
    'Mumbai, Maharashtra',
  'Delhi, Delhi',
  'Bangalore, Karnataka',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal',
  'Pune, Maharashtra',
  'Ahmedabad, Gujarat',
  'Lucknow, Uttar Pradesh',
  'Jaipur, Rajasthan',
  'Agra, Uttar Pradesh',
  'Amritsar, Punjab',
  'Goa, Goa',
  'Varanasi, Uttar Pradesh',
  'Chandigarh, Chandigarh',
  'Bhubaneswar, Odisha',
  'Thiruvananthapuram, Kerala',
  'Coimbatore, Tamil Nadu',
  'Nashik, Maharashtra',
    
  ];
  const samplehousetype = [
    'Apartment',
    'Minimalist Modern',
    'Box house',
    'Glass house',
    'Concrete house',
    'Cabin',
    'A-frame house',
    'Split-level house',
    'Tiny house',
    
    
  ];
  return (
    <>
    <div className="all">
    <div className="background1">
        <div className='header'>
            <h2>Looking for a new home?.</h2>
            <p>FInd the right home at the right price. We'll help you define your dream home and help you find it 
               when it hits the market.</p>
        </div>
        <div className="search">
        <div className="search-item">
        
      <i class="ri-map-pin-2-fill"></i>
      <div className='search-name'>
      <p>Location</p>
      <input type="text" list="location" placeholder="Location" value={location} onChange={handleLocationChange}/>
      <datalist id="location">
        {sampleCityStateData.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
      </div>
      </div>
      <div className="search-item">
      
      <i class="ri-home-4-fill"></i>
      <div className='search-name'>
      <p>House Type</p>
      <input type="text" list="housetype"  name="housetype" placeholder="housetype" value={houseType} onChange={handleHouseTypeChange} />
      
      <datalist id="housetype">
        {samplehousetype.map((option, index) => (
          <option key={index} value={option} />
        ))}
      </datalist>
      </div>
      </div>
      

      <button onClick={handleSearch}>Search</button>
        </div>
      <br/>
        <div className="customer">
            <p>We are trusted by 1000+ customers</p>
            <img src={customer}></img>

        </div>
      
        
    </div>
    <div className="background2">
        <div className="home">
        <img id='home' src={home} alt="home" />
        </div>
    </div>
    </div> 
    <div className="last">
    <div className="background3">
    
      <div className='why' >
            <p style={{fontSize:'10px', color:'red'}}>Why us</p>
            </div>
            <div className="whyus">
            <h3>We'll find the
                right home for
                you.</h3>
                </div>
        
        <div className='detail'>Finding the right home can be hard. especially if you're looking for
        something that doesn't exist. Luckily. we'll make it easier. We can help
        you find your dream home by giving you a wide range of options and
        saving your searches such as favorite homes and price range.</div>
    
        </div>  
        <div className='house2'>
          <img src={house2}></img>
        </div>
        </div>
    </>
  )
}

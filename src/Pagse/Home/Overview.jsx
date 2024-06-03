// import { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// const Overview = () => {
//     const [tabIndex, setTabindex] = useState(0);
//     return (
//         <div className='text-center mt-8'>
//             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
//                 <TabList>
//                     <Tab>Overview</Tab>
//                     <Tab>Our Packages</Tab>
//                     <Tab>Meet Our Tour Guides</Tab>
//                 </TabList>
//                 <TabPanel></TabPanel>
//                 <TabPanel></TabPanel>
//                 <TabPanel></TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default Overview;
import  { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YouTubePlayer from './Video';

function App() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (packageTitle) => {
    setWishlist([...wishlist, packageTitle]);
  };

  const packages = [
    {
      id: 1,
      spotPhoto: 'paris.jpg',
      tourType: 'Romantic Escape',
      tripTitle: 'Paris: The City of Love',
      price: '$1,299',
      detailsPageLink: 'paris-package',
    },
    // Add more packages here
  ];

  const tourGuides = [
    {
      id: 1,
      name: 'John Smith',
      specialty: 'Adventure Tours',
      experience: '10 years',
      detailsPageLink: 'john-smith',
    },
    // Add more tour guides here
  ];

  return (
    <div className='text-center mt-8'>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          
          <div className="video-gallery">
            <YouTubePlayer></YouTubePlayer>
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Our Packages</h2>
          <div className="package-cards">
            {packages.map((packageItem) => (
              <div key={packageItem.id} className="package-card">
                <img src={packageItem.spotPhoto} alt="Spot" />
                <span className="wishlist-icon" onClick={() => addToWishlist(packageItem.tripTitle)}>
                  ❤️
                </span>
                <p>{packageItem.tourType}</p>
                <h3>{packageItem.tripTitle}</h3>
                <p>Price: {packageItem.price}</p>
                <a href={packageItem.detailsPageLink}>View Package</a>
              </div>
            ))}
          </div>
          <button onClick={() => console.log('Redirect to All Packages page')}>All Packages</button>
        </TabPanel>

        {/* <TabPanel>
          <h2>Meet Our Tour Guides</h2>
          <div className="tour-guides">
            {tourGuides.map((guide) => (
              <div key={guide.id} className="tour-guide-card">
                <h3>{guide.name}</h3>
                <p>Specialty: {guide.specialty}</p>
                <p>Experience: {guide.experience}</p>
                <a href={guide.detailsPageLink}>Details</a>
              </div>
            ))}
          </div>
        </TabPanel> */}
      </Tabs>
    </div>
  );
}

export default App;

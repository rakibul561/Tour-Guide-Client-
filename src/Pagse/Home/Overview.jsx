
import  { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YouTubePlayer from './Video';
import Packge from './Packge';
import Community from '../../Componet/Pagse/Community';

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
         <Packge></Packge>
        </TabPanel>

        <TabPanel>
          <div>
            <Community></Community>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/iamge/sada pathor.avif'
import img2 from '../../../assets/iamge/beautiful-nature-tropical-beach-sea_74190-6805.jpg'
import img3 from '../../../assets/iamge/hammock_74190-2012.jpg'
import img4 from '../../../assets/iamge/jaflong.avif'
import img5 from '../../../assets/iamge/boat-lake-scene_1150-17962.jpg'
import img6 from '../../../assets/iamge/sasjek.jpg'

const Banner = () => {
    return (
        <div className='mt-2'>
            <Carousel>
                <div>
                    <img  src={img1} />
                </div>
                <div>
                    <img src={img2} />

                </div>
                <div>
                    <img src={img3} />

                </div>
                <div>
                    <img src={img4} />

                </div>
                <div>
                    <img src={img5} />

                </div>
                <div>
                    <img src={img6} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
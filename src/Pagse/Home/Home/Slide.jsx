import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Slide = ({ image }) => {
    return (
        <div
            className='bg-center rounded-2xl bg-cover h-[38rem] relative'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70 px-6'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold text-white lg:text-6xl leading-tight drop-shadow-lg'>
                        Discover Breathtaking Destinations <br /> With Tour Guide!
                    </h1>
                    <p className='mt-4 text-lg text-white/90 lg:text-xl max-w-3xl mx-auto'>
                        Embark on unforgettable journeys, explore hidden gems, and create lifelong memories.  
                        From majestic mountains to serene beaches, your next adventure starts here.
                    </p>
                    <p className='mt-2 text-lg text-[#10B981] font-semibold'>
                        🌍 Explore More | ✈️ Travel Easy | 🏕️ Live Your Dream
                    </p>

                    {/* Buttons */}
                    <div className='mt-6 flex justify-center gap-4'>
                        <Link to= "/blogs" className='px-6 py-3 text-lg font-semibold text-white bg-[#10B981] rounded-full hover:bg-[#0f8a6d] transition duration-300'>
                            Explore Destinations
                        </Link>
                        <Link to='/package' className='px-6 py-3 text-lg font-semibold text-white bg-[#2563EB] rounded-full hover:bg-[#1D4ED8] transition duration-300'>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide;

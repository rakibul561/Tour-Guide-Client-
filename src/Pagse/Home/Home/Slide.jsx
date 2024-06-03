/* eslint-disable react/prop-types */
const Slide = ({ image }) => {
    return (
        <div
            className='bg-center rounded-2xl bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            {/* <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-white lg:text-4xl'>
                        Rest in <span className="text-green-500">Hotel  </span>
                    </h1>
                    <br />
                    <p className="text-sm text-white">Experience seamless hotel booking on our platform with competitive rates, a wide selection of hotels, <br /> exclusive deals, user-friendly interface, and efficient booking management. Enjoy peace of mind knowing your <br />accommodations  are taken care of effortlessly, leaving you free to focus on enjoying your travel experience to the fullest
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default Slide
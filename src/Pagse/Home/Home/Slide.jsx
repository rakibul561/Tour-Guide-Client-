/* eslint-disable react/prop-types */
const Slide = ({ image }) => {
    return (
        <div
            className='bg-center rounded-2xl bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-white lg:text-4xl'>
                       
                    </h1>
                    <br />
                <div className="text-3xl text-[#109E99] ">
                <marquee  direction="">
                <span
  className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
>
         WellCome Tourists Website 
</span>
                </marquee>
                </div>
               
                </div>
            </div>
        </div>
    )
}

export default Slide
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const WishDetails = () => {
    const data = useLoaderData();
    const {images, trip_title, price, description,relative_information} = data;

    return (
        <div>
            <section>
                <div>
                    <Helmet>
                        <title>WishList|| details</title>
                    </Helmet>
                    <div>
                        <h2 className="text-3xl font-bold text-blue-600 mb-8 lg:ml-44">Details Pagse</h2>
                        <div className="md:w-3/4 mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            {images.length > 0 && (
                                <img src={images[0]} alt="" className="object-cover object-center w-full rounded-t-md h-[400px] dark:bg-gray-500" />
                            )}
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-semibold tracking-wide">{trip_title}</h2>
                                    <p className="text-3xl text-blue-700">Price: {price}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="dark:text-gray-800">
                                        {description}
                                    </p>
                                    <p>{relative_information}</p>
                                </div>
                                <Link to='/'>
                                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"> Back To Home pagse</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WishDetails;
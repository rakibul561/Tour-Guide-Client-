import { Link, useParams } from "react-router-dom";
import UseAxiosSecore from "../../Hooks/UseAxiosSecore";
import { useQuery } from "@tanstack/react-query";
import Ask from "./Home/Datils/Ask";
import Community from "../../Componet/Pagse/Community";
import { Helmet } from "react-helmet-async";


const Details = () => {
    const { id } = useParams();
    const axiosSecure = UseAxiosSecore();

    const { data: menu = {}, isLoading, isError } = useQuery({
        queryKey: ['menu', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/menu/${id}`);
            return data;
        }
    });

    if (isLoading) return <progress className="progress w-56"></progress>;
    if (isError) return <div>Failed to load data</div>;

    const { images = [], price, relative_information, description, trip_title } = menu;

    return (
        <div>
            <Helmet>
                <title>Tour || Details</title>
            </Helmet>
            <div>
                <h2 className="text-4xl font-bold lg:ml-32 mt-20 text-blue-600">Tour sports</h2>
                <section className="py-6 dark:bg-gray-100 md:w-3/4 mx-auto mt-20 dark:text-gray-900">
                    {
                        images.length > 0 && (
                            <>
                                <div>
                                    <img src={images[0]} alt="" className="w-full h-[600px] col-span-2 row-span-2 rounded shadow-sm md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                                </div>
                                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-2">
                                    {images.slice(1, 3).map((img, index) => (
                                        <img key={index} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img && img} />
                                    ))}
                                </div>
                            </>
                        )
                    }
                </section>
            </div>
            <div>
                <h2 className="text-3xl font-semibold text-green-700 ml-4 lg:ml-44 mt-4">Tour Team Guide</h2>
                <Community></Community>
            </div>
            <div>
                <Ask></Ask>
            </div>

            <div>
                <section>
                    <div>
                        <div>
                            <h2 className="text-3xl font-bold text-blue-600 mb-8 lg:ml-44">Booking Pagse</h2>
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
                                    <Link to={`/booking/${id}`}>

                                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Book Now</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Details;

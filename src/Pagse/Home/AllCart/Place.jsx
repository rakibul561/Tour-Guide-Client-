/* eslint-disable react/prop-types */
import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../../Hooks/UseAuth";

const Place = ({ item }) => {
    const { user } = UseAuth();
    const { _id, images, trip_title, tour_type, price, description } = item;

    const handleButton = () => {
        const newData = {
            _id,
            images,
            trip_title,
            tour_type,
            price,
            description,
            email: user?.email,
        };
        fetch("https://tour-guide-server-six.vercel.app/wishlist", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Your data added successfully");
                }
            });
    };

    return (
        <div className="p-2 ">
            <div key={item._id} className="relative rounded-md shadow-md bg-white dark:bg-gray-50 dark:text-gray-900">
                <img
                    src={item.images}
                    alt=""
                    className="object-cover w-full rounded-md h-64 sm:h-72 lg:h-80 dark:bg-gray-500"
                />

                <button onClick={handleButton} className="absolute top-4 right-4 text-3xl text-red-500">
                    <FaHeartbeat />
                </button>

                <p className="absolute top-4 left-4 px-3 py-1 bg-[#00B19D] text-white text-sm sm:text-base rounded-md">
                    {price}
                </p>

                <h2 className="text-center mt-6 text-xl md:text-2xl font-semibold">{trip_title}</h2>
                <p className="text-center text-sm md:text-base text-gray-600 mt-2">{tour_type}</p>

                <div className="flex justify-center mt-6">
                    <Link to={`/details/${_id}`}>
                        <button className="btn mb-4 btn-outline  bg-slate-300 btn-accent border-0 border-b-4 px-6 py-2">
                            View Package
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Place;

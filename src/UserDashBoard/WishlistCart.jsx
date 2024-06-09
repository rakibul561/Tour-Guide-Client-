/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const WishlistCart = ({ cart }) => {
    const { images, trip_title, tour_type, description } = cart
    console.log(cart);
    return (
        <div className="">
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={images} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <h2 className="text-center mt-8 text-2xl">{trip_title}</h2>
                <div className="divider divider-success">
                    <p>{tour_type}</p>
                </div>
                <div className="card-actions justify-center mt-8">
                    <Link>
                        <button
                            // onClick={() => handleAddtoCart(item)}
                            className="btn btn-outline bg-purple-600 btn-accent border-0 border-b-4"
                        >
                            view Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default WishlistCart;
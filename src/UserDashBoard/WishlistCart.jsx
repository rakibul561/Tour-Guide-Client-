/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";

const WishlistCart = ({ cart, handleDeleteLove }) => {
    const { images, trip_title, tour_type, _id } = cart;


    return (
        <div className="">
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={images} alt="" className="object-cover  object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <button onClick={() => handleDeleteLove(_id)} className="btn absolute top-0 mt-14 btn-circle btn-outline btn-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h2 className="text-center mt-8 text-2xl">{trip_title}</h2>
                <div className="divider divider-success">
                    <p>{tour_type}</p>
                </div>
                <div className="card-actions justify-center mt-8">
                    <Link to={`/wishlist/${_id}`}>
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
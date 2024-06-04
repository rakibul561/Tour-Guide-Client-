/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Place = ({ item }) => {


    // eslint-disable-next-line no-unused-vars
    const { _id, images, trip_title, tour_type, } = item;

    return (
        <div>
            <div key={item._id} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={item.images} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-center text-2xl">{item.trip_title}</h2>
                    <div className="divider divider-success">
                        <p>{item.tour_type}</p>
                    </div>
                    <div className="card-actions justify-center mt-8">
                        <Link to={`/details/${_id}`}>
                            <button
                                // onClick={() => handleAddtoCart(item)}
                                className="btn btn-outline bg-slate-300 btn-accent border-0 border-b-4"
                            >
                                view Package
                            </button>
                        </Link>

                    </div>
                 

                </div>

            </div>
            
        </div>
    );
};

export default Place;
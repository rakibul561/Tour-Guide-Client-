/* eslint-disable react/prop-types */
import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../../../Hooks/UseAuth";

const Place = ({ item }) => {
    // eslint-disable-next-line no-unused-vars
    const {user} = UseAuth();
    const {email } = user;
    const { _id, images, trip_title, tour_type, price, description } = item;
    // console.log(item);

    const handleButton = () => {
        const newData = {
            //  jei data gula show korba
            _id,
            images,
            trip_title,
            tour_type,
            price,
            description,
            email,
            
        };
        fetch("http://localhost:5000/wishlist", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Your data added  successfully");
                }
            });
    };

    return (
        <div>
            <div key={item._id} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={item.images} alt="" className="object-cover  object-center w-full rounded-md h-72 dark:bg-gray-500" />
                
                    <button onClick={handleButton} className="absolute  ml-20 lg:ml-96 px-4 text-3xl">
                        <FaHeartbeat>
                        </FaHeartbeat>
                    </button>
             


                <p className=" absolute  mr-4 px-4 bg-slate-900 text-white">{price}</p>

                <h2 className="text-center mt-8 text-2xl">{item.trip_title}</h2>
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

    );
};

export default Place;
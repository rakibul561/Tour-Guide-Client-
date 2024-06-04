import { useEffect, useState } from "react";
import Place from "../AllCart/Place";

const AllPackages = () => {
    const [items, setItems] = useState([]);
    console.log(items);

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>

            <div className="grid md:grid-cols-3 gap-10">
                {
                    items.map(item => <Place
                        item={item}
                        key={item._id}
                    ></Place>

                    )
                }
            </div>

            {/* <div >
                {
                    items.map(item =>
                        <div key={item._id} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                            <img src={item.images} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="mt-6 mb-2">
                                <h2 className="text-center text-2xl">{item.trip_title}</h2>
                                <div className="divider divider-success">
                                    <p>{item.tour_type}</p>
                                </div>
                                <div className="card-actions justify-center mt-8">
                                    <button
                                        // onClick={() => handleAddtoCart(item)}
                                        className="btn btn-outline bg-slate-300 btn-accent border-0 border-b-4"
                                    >
                                        view Package
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                }
            </div> */}
        </div>
    );
};

export default AllPackages;
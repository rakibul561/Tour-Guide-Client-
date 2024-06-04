import { useEffect, useState } from "react";

const AllPackages = () => {
    const [items, setItems] = useState([]);
    console.log(items);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            {/* <div className="grid md:grid-cols-3 gap-10">
                {items.map(item => (
                    <div key={item.id} className="card lg:h-[500px] mt-20 bg-base-100 shadow-xl">
                        <figure><img className="" src={item.images} alt="Food" /></figure>
                        <p className="absolute bottom-52 right-2 px-4 bg-red-500 text-white">{item.price}</p>
                        <div className="card-body flex flex-col items-center">
                            <h2 className="card-title">{item.trip_title}</h2>
                          
                            <div className="divider">
                            <p>{item.tour_type}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button
                                    // onClick={() => handleAddtoCart(item)}
                                    className="btn btn-outline bg-slate-100 btn-accent border-0 border-b-4"
                                >
                                    view Package
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div> */}
            <div className="grid md:grid-cols-3 gap-10">
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
            </div>
        </div>
    );
};

export default AllPackages;
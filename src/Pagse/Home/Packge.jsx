import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Package = () => {
    const [menu, setMenu] = useState([]);
    // console.log(menu);
    const data = menu.slice(0, 3);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
            .catch(error => console.error('Error fetching menu:', error));
    }, []);
    // const data = 

    return (
        <div>
            {/* <div className="grid md:grid-cols-3 mt-12 gap-10">
                {data.map(item => (
                    <div key={item.id} className="card lg:h-[500px] bg-base-100 shadow-xl">
                        <figure><img className="" src={item.images} alt="Food" /></figure>
                        <p className="absolute bottom-52 right-2 px-4 bg-red-500 text-white">{item.price}</p>
                        <div className="card-body flex flex-col items-center">
                            <h2 className="card-title">{item.trip_title}</h2>
                          
                            <div className="divider divider-primary">
                            <p className="text-xl">{item.tour_type}</p>
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
                    data.map(item =>
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
            <div className="mt-12 mb-8">
                <Link to='/package'>
                    <button className="btn btn-outline text-white btn-success ">All Packages</button>
                </Link>
            </div>
        </div>
    );
};

export default Package;

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
            <div className="grid md:grid-cols-3 mt-12 gap-10">
                {data.map(item => (
                    <div key={item.id} className="card lg:h-[500px] bg-base-100 shadow-xl">
                        <figure><img className="" src={item.images} alt="Food" /></figure>
                        <p className="absolute bottom-48 right-2 px-4 bg-red-500 text-white">{item.price}</p>
                        <div className="card-body flex flex-col items-center">
                            <h2 className="card-title">{item.trip_title}</h2>
                            <p>{item.tour_type}</p>
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

            </div>
            <div className="mt-12 mb-8">
              <Link to= '/package'>
              <button className="btn btn-outline text-white btn-success ">All Packages</button>
              </Link>
            </div>
        </div>
    );
};

export default Package;

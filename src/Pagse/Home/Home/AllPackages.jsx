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
            <div className="grid md:grid-cols-3 gap-10">
                {items.map(item => (
                    <div key={item.id} className="card lg:h-[500px] mt-20 bg-base-100 shadow-xl">
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
        </div>
    );
};

export default AllPackages;
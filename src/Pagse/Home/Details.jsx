import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ask from "./Home/Datils/Ask";


const Details = () => {
    const { id } = useParams();

    const [services, setServies] = useState({});
    console.log(services);

    useEffect(() => {
        fetch(`http://localhost:3000/menu/${id}`)
            .then(res => res.json())
            .then(data => setServies(data))
    }, [id])

    const { images, price, relative_information, description, trip_title } = services



    return (
        <div >
            <div className="">
                <h2 className="text-4xl font-bold lg:ml-32 mt-20 text-blue-600">Tour sports</h2>
                <section className="py-6 dark:bg-gray-100 md:w-3/4 mx-auto mt-20 dark:text-gray-900">
                    {
                        images && <>
                            <div>
                                <img src={images[0]} alt="" className=" w-full h-[600px] col-span-2 row-span-2 rounded shadow-sm  md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                            </div>
                            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-2 ">
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={images[1]} />
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={images[2]} />

                            </div>
                        </>
                    }

                </section>
            </div>
            <Ask></Ask>

        </div>
    );
};

export default Details;
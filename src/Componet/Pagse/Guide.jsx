import { Link } from "react-router-dom";


const Guide = ({ tour }) => {
    const { _id, photo } = tour;
    console.log(tour);
    return (
        <div>
           
            <div  className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">

                    <Link to={`/tour/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border dark:bg-violet-600 dark:text-gray-50 btn-outline btn-accent"> See Details </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Guide;
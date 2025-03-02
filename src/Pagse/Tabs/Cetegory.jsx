/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Cetegory = ({ tabs }) => {
    console.log(tabs);
    const { images, trip_title,
        description,tour_type,price,_id ,
    } = tabs;
    return (
        <Link to={`/details/${_id}`}>
        
        <div>
          <div className="relative bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
        <img src={images} alt="Shoes" className="lg:h-96 w-full" />
    </figure>
    
    {/* Price badge at top-right */}
    <p className="absolute top-4 right-11 mt-7 px-4 py-1  rounded-md bg-[#00B19D] text-white shadow-lg">
        {price}
    </p>

    <div className="card-body items-center text-center">
        <h2 className="card-title">{trip_title}!</h2>
        <div className="divider">{tour_type}</div>
        <p>
            {description.split(" ").slice(0, 30).join(" ")} {description.split(" ").length > 30 && "........."}
        </p>
    </div>
</div>

        </div>
        </Link>
    );
};

export default Cetegory;
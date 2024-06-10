

const Cetegory = ({ tabs }) => {
    console.log(tabs);
    const { images, trip_title,
        description,tour_type,price,
    } = tabs;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={images} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 px-4 lg:mr-12 mt-4 bg-orange-700 text-white">{price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {trip_title}!</h2>
                    <div className="divider">{tour_type}</div>

                    <p>{
                        description
                    }</p>

                </div>
            </div>
        </div>
    );
};

export default Cetegory;
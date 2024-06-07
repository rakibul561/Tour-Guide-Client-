


const BookingRow = ({ booking,handleDelete }) => {
    const { service, _id, price, role, date, status } = booking;




    return (
        <tr>

            <td>
                {service}
            </td>
            <td>
                {role}
            </td>
            <td> {date} </td>
            <td> {price} </td>
            <td> {status} </td>
            <div>
                <td>
                    {/* {booking.status === 'In Review' && ( */}
                        <a onClick={()=>handleDelete(_id)} href="#_" className="relative btn-sm inline-block px-4 mr-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Cencel</span>
                        </a>

                    {/* )} */}


                    {booking.status === 'Accepted' && (
                        <a href="#_" className="relative btn-sm inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Pay</span>
                        </a>

                    )}

                    <a href="#_" className="relative btn-sm inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Pay</span>
                    </a>
                </td>
            </div>
            

        </tr>
    );
};

export default BookingRow;
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import BookingRow from "./BookingRow";
import toast, { Toaster } from "react-hot-toast";

const MyBooking = () => {
    const { user } = UseAuth();

    const [bookings, setBookings] = useState([]);

    const url = `https://tour-guide-server-six.vercel.app/booking/${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])
    



    const handleDelete = id => {
        // const proced = confirm('Are you sure you want to Delete')
        if (id) {
            fetch(`https://tour-guide-server-six.vercel.app/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('package deleted')
                        const remaing = bookings.filter(booking => booking._id !== id)
                        setBookings(remaing)
                    }
                })
        }
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Package Name</th>

                            <th> Tour Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingRow>)
                        }


                    </tbody>



                </table>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MyBooking;
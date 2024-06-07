import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import BookingRow from "./BookingRow";

const MyBooking = () => {
    const { user } = UseAuth();

    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/booking?.email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Package Name</th>
                            <th> Guide Name</th>
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
                            ></BookingRow> )
                        }
                       
                       
                    </tbody>
                
                  

                </table>
            </div>
        </div>
    );
};

export default MyBooking;
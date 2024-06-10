/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecore";
import { useEffect, useState } from "react";

const BookingRow = ({ booking, handleDelete }) => {
    const { service, _id, price, date, status } = booking;
    const axiosSecure = UseAxiosSecure();
    const [guides, setGuides] = useState([]);

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    useEffect(() => {
        const guide = users.filter(item => item.role === "Tour Guide");
        setGuides(guide);
    }, [users]);
console.log(users);
    return (
        <tr>
            <td>{service}</td>
            
            <td>{date}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>
                
                    <a onClick={() => handleDelete(_id)} href="#_" className="relative btn-sm inline-block px-4 mr-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Cancel</span>
                    </a>
             
              
                    <a href="#_" className="relative btn-sm inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Pay</span>
                    </a>
            
            </td>
        </tr>
    );
};

export default BookingRow;

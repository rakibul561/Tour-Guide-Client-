/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecore";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";

const BookingRow = ({ booking, handleDelete }) => {
    const { service, _id, price, date, status } = booking;
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth();
   
    
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
  
    



    const handlepayment = async () => {
        console.log("Original Price:", price);
        console.log("Type of Price:", typeof price);
    
        const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
    

    
        const payment = {
            email: user?.email,
            price: numericPrice, 
            transactionId: "",
            date: date,
            status: "pending",
            cardId: _id,
        };
    
    
        const response = await axios.post('https://tour-guide-server-six.vercel.app/create-ssl-payment', payment);
    
         if(response.data?.gatewayUrl){
            window.location.replace(response.data.gatewayUrl)
           
         }
    };
    
    return (
        <tr>
            <td>{user?.email}</td>
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
             
              
                    <button onClick={handlepayment } href="#_" className="relative btn-sm inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Pay</span>
                    </button>
            
            </td>
        </tr>
    );
};

export default BookingRow;

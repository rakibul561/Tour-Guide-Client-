import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import PaymentRow from "./Payments/PaymentRow";

const PaymentHistory = () => { 
      

    const { user } = UseAuth();

    const [payments, setPayments] = useState([]);

    const url = `http://localhost:5000/payment/${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [url])
    
     console.log(payments);
     
     

    



       
    return (
        <div> 

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-[#1F2937] text-white text-xl">
      <tr>
       
        <th>Email</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {
        payments?.map((payment)=> <PaymentRow
        payment={payment}
        key={payment._id}
        ></PaymentRow>)
      }
    
     
    </tbody>
    {/* foot */}
  
  </table>
</div>
             





        </div>
    );
};

export default PaymentHistory;
import { useEffect, useState } from "react";
import PaymentRow from "../../UserDashBoard/Payments/PaymentRow";


const AllPayment = () => { 

      const [allpayments, setAllPayments] = useState([]);
    
        const url = 'http://localhost:5000/payment'
    
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setAllPayments(data))
        }, [url])
        
         console.log(allpayments)

    return (
        <div> 
         
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
        allpayments?.map((payment)=> <PaymentRow
        payment={payment}
        key={payment._id}
        ></PaymentRow>)
      }
    
     
    </tbody>
    {/* foot */}
  
  </table>
          
            
        </div>
    );
};

export default AllPayment;
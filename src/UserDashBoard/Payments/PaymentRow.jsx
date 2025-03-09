/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const PaymentRow = ({payment}) => { 
    console.log(payment);
    
   


    const {price, date, email, status} = payment ;
  
    
    
    return (
       

       <tr>
       
       <td>
        {email}
         
       </td>
       <td>
      
      {date}
        
       </td>
       <td>
         {price}
       </td>
       <th>
       {status}
       </th>
       <th>
           
              
    <Link to= '/package'> 
    <button  href="/package" className="relative btn-sm inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white"> 

                           More Package
                        </span>
                    </button>
    
    
    </Link>
       </th>
     </tr>
            
      
    );
};

export default PaymentRow;
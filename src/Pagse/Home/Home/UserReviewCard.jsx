// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */

// const UserReviewCard = ({ stor }) => {
//     return (
//       <div>
//         <div className="carousel w-full">
//           {stor.map((item, index) => (
//             <div
//               key={index}
//               id={`item${index + 1}`}
//               className="carousel-item w-full"
//             >
//               <img src={item.photo} alt={item.name} className="w-full h-60 object-cover rounded-lg" />
//               <div className="p-4 text-center">
//                 <h2 className="text-lg font-bold">{item.name}</h2>
//                 <p className="text-sm text-gray-600">{item.email}</p>
//                 <p className="text-sm text-gray-500 italic">{item.story}</p>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         {/* Pagination Buttons */}
//         <div className="flex w-full justify-center gap-2 py-2">
//           {stor.map((_, index) => (
//             <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
//               {index + 1}
//             </a>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default UserReviewCard;
  
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import WishlistCart from "./WishlistCart";

const MyWhislist = () => {
    const { user } = UseAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/wishlist/${user?.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return res.json();
                })
                .then(data => {
                    setUsers(data);
                })
                .catch(error => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    }, [user]);
    // console.log(users);

    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
            {
                users.map(cart=> <WishlistCart
                key={cart._id}
                cart={cart}
                ></WishlistCart>)
            }
           
        </div>
    );
};

export default MyWhislist;

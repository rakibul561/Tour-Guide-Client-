import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import WishlistCart from "./WishlistCart";
import toast from "react-hot-toast";

const MyWhislist = () => {
    const { user } = UseAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/wishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setUsers(data);
            });
    }, [user])
    console.log(users);


    const handleDeleteLove = id => {

        if (id) {
            fetch(`http://localhost:5000/wishlist/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('package deleted')
                        const remaing = users.filter(wishlist => wishlist._id !== id)
                        setUsers(remaing)
                    }
                })
        }
    }


    return (
        <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
            {
                users.map(cart => <WishlistCart
                    key={cart._id}
                    cart={cart}
                    handleDeleteLove={handleDeleteLove}
                ></WishlistCart>)
            }

        </div>
    );
};

export default MyWhislist;

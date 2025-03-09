/* eslint-disable no-unused-vars */
import {  useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const Booking = () => {
    const { user } = UseAuth();
    const booking = useLoaderData();
    const { images, trip_title, price, _id } = booking;



    const axiosSecure = UseAxiosSecure();
    const [guide, setGuide] = useState([]);
    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            // const res = await axiosSecure.get('/users');
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });



    useEffect(() => {
        const filterData = users?.filter(user => user?.role === "Tour Guide")
        setGuide(filterData)
    }, [users])


    // console.log(user);

    const handleBooking = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const rider = form.role.value;
        console.log(rider);
        const order = {
            customerName: name,
            email,
            images,
            rider,
            date,
            service_id: _id,
            service: trip_title,
            price: price,
            status: 'In Review'
        }
      
         console.log(price);
         
         
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Booking has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div>
            <div className="bg-base-300 rounded-lg mt-8">
                <h2 className="text-3xl font-bold text-center">Book Service </h2>
                <form onSubmit={handleBooking} className="card-body">
                    <div className="grid w-3/4 mx-auto grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" readOnly required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Guide</span>
                            </label>
                            <select name="role"
                                className="select select-bordered w-full ">
                                {
                                    guide && guide?.map(user => (
                                        <option key={user?._id} value={user?._id}>{user?.name}</option>
                                    ))
                                }


                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input defaultValue={price} type="text" className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" defaultValue={images} className="input input-bordered" readOnly required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="form-control w-3/4 mx-auto mt-6">

                        <input className="  flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md 0 text-xl  btn btn-outline btn-accent" type="submit" value=" Confrom Bookings" />
                        
                    

                    </div>

                </form>
            </div>

        </div>
    );
};

export default Booking;
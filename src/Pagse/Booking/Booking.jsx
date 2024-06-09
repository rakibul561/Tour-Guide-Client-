import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";


const Booking = () => {
    const { user } = UseAuth();
    const booking = useLoaderData();
    const { images, trip_title, price, _id } = booking;


    // console.log(user);

    const handleBooking = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const role = form.role.value;
        const order = {
            customerName: name,
            email,
            images,
            role,
            date,
            service_id: _id,
            service: trip_title,
            price: price,
            status: 'In Review'
        }
        console.log(order);
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
                                <option value="Rakibul Hasan">Rakibul Hasan</option>
                                <option value="Olivia Martinez">Olivia Martinez</option>
                                <option value="Alexander Johnson">Alexander Johnson</option>
                                <option value="Noah Wright">Noah Wright</option>

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

                    <input className="btn  bg-success btn-block" type="submit" value=" Confrom Bookings" />

                    </div>

                </form>
            </div>

        </div>
    );
};

export default Booking;
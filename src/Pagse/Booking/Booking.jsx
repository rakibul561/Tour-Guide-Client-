import { useForm } from "react-hook-form";


const Booking = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    // const axiosPublic = usePublic();
    // const axiosSecure = UseAxiosSecure();
    // const onSubmit = async (data) => {
    //     console.log(data);
    //     //   upload to imaggebb
    //     const imageFile = { image: data.image[0] }
    //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    //     if (res.data.success) {
    //         // now send the menu item data to the server withthe
    //         const menuItem = {
    //             name: data.name,
    //             cetegory: data.cetegory,
    //             price: parseFloat(data.price),
    //             recipe: data.recipe,
    //             image: res.data.data.display_url
    //         }
    //         // 
    //         const menuRes = await axiosSecure.post('/menu', menuItem);
    //         console.log(menuRes.data);
    //         if (menuRes.data.insertedId) {
    //             // show success pop up
    //             reset();
    //             Swal.fire({
    //                 position: "top-end",
    //                 icon: "success",
    //                 title: `${data.name} is added to the menu`,
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }
    //     }
    //     console.log("with image url", res.data);

    // };


    return (
        <div>

            <div className="w-3/4 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Name*</span>
                            </label>
                            <input
                                type="text" placeholder="Name"
                                {...register('name', { required: true })}
                                required

                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Email*</span>
                            </label>
                            <input
                                type="text" placeholder="your email"
                                {...register('email', { required: true })}
                                required

                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Image*</span>
                        </label>
                        <input
                            type="text" placeholder=""
                            {...register('photo', { required: true })}
                            required

                            className="input input-bordered w-full " />
                    </div>


                    <div className="flex gap-6">
                        {/* category  */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tour Guide </span>
                            </label>
                            <select defaultValue="default" {...register('cetegory')}
                                className="select select-bordered w-full ">
                                <option disabled value="default" >Select a cetegory?</option>
                                <option value="salad">Salad</option>
                                <option value="pizaa">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price </span>
                            </label>
                            <input
                                type="number" placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full " />
                        </div>


                    </div>

                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Date*</span>
                        </label>
                        <input
                            type="date" placeholder=""
                            {...register('date', { required: true })}
                            required

                            className="input input-bordered w-full " />
                    </div>
                    {/* recipe details  */}


                    <button className="btn bg-orange-400 text-white">
                        Add item
                        {/* <FaUtensils className="ml-2"></FaUtensils> */}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
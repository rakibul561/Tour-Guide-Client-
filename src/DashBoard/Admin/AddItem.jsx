import { useForm } from "react-hook-form";

import UseAxiosSecure from "../../Hooks/UseAxiosSecore";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import usePublic from "../../Hooks/usePublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = usePublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        //   upload to imaggebb
        const imageFile = { image: data.images[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if (res.data.success) {
            // now send the menu item data to the server withthe
            const menuItem = {
                relative_information: data.relative_information,
                tour_type: data.tour_type,
                description: data.description,
                price: parseFloat(data.price),
                trip_title: data.trip_title,
                images: res.data.data.display_url,
                
            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // show success pop up
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.trip_title} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log("with image url", res.data);

    };


    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text" placeholder=""
                                {...register('trip_title', { required: true })}
                                required

                                className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Tour Type</span>
                            </label>
                            <input
                                type="text" placeholder=""
                                {...register('tour_type', { required: true })}
                                required

                                className="input input-bordered w-full " />
                        </div>
                    </div>


                    <div className="flex gap-4">
                        {/* category  */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text" placeholder=""
                                {...register('description', { required: true })}
                                required

                                className="input input-bordered w-full " />
                        </div>

                        {/* price */}
                        <div className="form-control w-full ">
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
                            <span className="label-text">Relative Information</span>
                        </label>
                        <input
                            type="text" placeholder=""
                            {...register('relative_information', { required: true })}
                            required

                            className="input input-bordered w-full " />
                    </div>
                    {/* recipe details  */}

                    <div className="form-control w-full my-6">
                        <input {...register('images', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn bg-orange-400 text-white">
                        Add item
                        <FaUtensils className="ml-2"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
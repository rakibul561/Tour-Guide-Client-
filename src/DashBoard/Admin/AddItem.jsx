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
        try {
            const imageFiles = [data.images[0], data.images1[0], data.images2[0]];
            const imageUrls = [];

            for (const file of imageFiles) {
                const formData = new FormData();
                formData.append('image', file);
                
                const res = await axiosPublic.post(image_hosting_api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (res.data.success) {
                    imageUrls.push(res.data.data.display_url);
                } else {
                    throw new Error("Image upload failed");
                }
            }

            const menuItem = {
                relative_information: data.relative_information,
                tour_type: data.tour_type,
                description: data.description,
                price: parseFloat(data.price),
                trip_title: data.trip_title,
                images: imageUrls
            };

            const menuRes = await axiosSecure.post('/menu', menuItem);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.trip_title} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            {...register('trip_title', { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-full">
    <label className="label">
        <span className="label-text">Tour Type</span>
    </label>
    <select
        {...register('tour_type', { required: true })}
        className="select select-bordered w-full"
    >
        <option value="">Select a Tour Type</option>
        <option value="Adventure">Adventure</option>
        <option value="Cultural">Cultural</option>
        <option value="Wildlife">Wildlife</option>
        <option value="Nature">Nature</option>
        <option value="Historical">Historical</option>
    </select>
</div>

                </div>
                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            {...register('description', { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Relative Information</span>
                    </label>
                    <input
                        type="text"
                        {...register('relative_information', { required: true })}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="flex">
                    <div className="form-control w-full my-6">
                        <input {...register('images', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('images1', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('images2', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                </div>
                <button className="btn bg-orange-400 text-white">
                    Add item
                    <FaUtensils className="ml-2" />
                </button>
            </form>
        </div>
    );
};

export default AddItem;

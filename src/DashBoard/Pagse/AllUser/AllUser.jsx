import { useQuery } from "@tanstack/react-query";
import UseAxiosSecore from "../../../Hooks/UseAxiosSecore";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = UseAxiosSecore();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',);
            return res.data;
        }
        
    });
    

    const handleMakeAdmin = (role, user) => {
        axiosSecure.patch(`/users/admin/${user._id}`, { role: role })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an ${role}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `Failed to make ${user.name} an ${role}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: `Failed to delete ${user.name}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tour Guide</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'Tour Guide' ? 'Tour Guide' : (
                                        <button onClick={() => handleMakeAdmin('Tour Guide', user)} className="btn btn-ghost text-2xl">
                                            <FaUsers />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : (
                                        <button onClick={() => handleMakeAdmin('admin', user)} className="btn btn-ghost text-2xl">
                                            <FaUsers />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost">
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;

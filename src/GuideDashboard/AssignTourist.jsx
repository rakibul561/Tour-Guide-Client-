const AssignTourist = ({ assingedData }) => {

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Email</th>
                            <th> Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assingedData.map(item => (
                                <tr key={item._id}>
                                    <td>{item.service}</td>
                                    <td>{item.email}</td>
                                    <td>{item.date}</td>
                                    <td>

                                        <a href="#_" className="relative btn-sm inline-block px-4 mr-4 py-2 font-medium group">
                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                            <span className="relative text-black group-hover:text-white">Reject</span>
                                        </a>
                                    </td>
                                    <td>
                                    <a href="#_" className="relative btn-sm inline-block px-4 py-2 font-medium group">
                                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full bg-red-500 border-2 border-black group-hover:bg-black"></span>
                                            <span className="relative text-black group-hover:text-white">Accept</span>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AssignTourist;

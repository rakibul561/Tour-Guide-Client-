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
                                        <button className="btn btn-ghost ">Reject</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost ">Accept</button>
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

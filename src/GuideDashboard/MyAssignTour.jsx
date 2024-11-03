import { useEffect } from "react";
import { useState } from "react";
import AssignTourist from "./AssignTourist";
import useFetchSingleUser from "../Hooks/useFindSingleUser";
import UseAuth from "../Hooks/UseAuth";
import { FaUserShield } from "react-icons/fa";
// i    


const MyAssignTour = () => {
    const { user } = UseAuth()
    const { singleUser } = useFetchSingleUser(user?.email)


    const [books, setBooks] = useState([]);
    const [assingedData, setAssignedData] = useState([])
    const url = `https://tour-guide-server-six.vercel.app/booking`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [url])

    useEffect(() => {
        const popolar = books.filter(item => item.rider === singleUser?._id);
        setAssignedData(popolar)

    }, [books, singleUser?._id])

    console.log(assingedData);

    return (
        <div>

            <div className="flex justify-between text-2xl mb-20 border p-4 rounded-lg">
                <h1> {user?.displayName} </h1>
                <h2 className="font-bold ">My Assigned Tours </h2>

                <h2 className=" font-bold"> {user?.email}</h2>
            </div>


            <AssignTourist
                assingedData={assingedData}
            ></AssignTourist>


        </div>
    );
};

export default MyAssignTour;
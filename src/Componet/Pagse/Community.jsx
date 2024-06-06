import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecore";
import { Link } from "react-router-dom";
import Guide from "./Guide";


const Community = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            // const res = await axiosSecure.get('/users');
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    const tourGuide = users.filter(item => item.role === 'Tour Guide');
    // console.log(tourGuide);

    return (
        <div>
            <h2 className="text-green-700 text-3xl font-bold mt-10 ml-8 lg:ml-20">Community</h2>
            <div className="grid lg:grid-cols-4 w-3/4 mx-auto mt-10 gap-4">


                {
                    tourGuide.map(tour=> <Guide
                    key={tour._id}
                    tour={tour}
                    ></Guide>)
                }
         
            </div>

        </div>
    );
};

export default Community;

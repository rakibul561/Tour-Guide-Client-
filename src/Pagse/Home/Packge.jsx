
import { Link } from "react-router-dom";
import Place from "./AllCart/Place";
import UseAxiosSecore from "../../Hooks/UseAxiosSecore";
import { useQuery } from "@tanstack/react-query";

const Package = () => {
    const axiosSecure = UseAxiosSecore();

    const { data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/menu');
            return data;
        }
    });

    if (isLoading) return <progress className="progress w-56"></progress>;

    const data = menu.slice(0, 3);

    return (
        <div>
            <div className="grid md:grid-cols-3 ">
                {data.map(item => (
                    <Place
                        item={item}
                        key={item._id}
                    ></Place>
                ))}
            </div>
            <div className="mt-12 mb-8">
                <Link to='/package'>
                    <button className="btn btn-outline text-white btn-success ">All Packages</button>
                </Link>
            </div>
        </div>
    );
};

export default Package;

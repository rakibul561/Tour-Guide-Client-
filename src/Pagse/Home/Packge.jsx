
import { Link } from "react-router-dom";
import Place from "./AllCart/Place";
import UseAxiosSecore from "../../Hooks/UseAxiosSecore";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";

const Package = () => {
    const axiosSecure = UseAxiosSecore();

    const { data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/menu');
            return data;
        }
    });

    if (isLoading) return <Loading/>;

    const data = menu.slice(0, 4);

    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-4 ">
                {data.map(item => (
                    <Place
                        item={item}
                        key={item._id}
                    ></Place>
                ))}
            </div>
            <div className="mt-12 mb-8">
                <Link to='/package'>
                    <button className=" btn btn-outline btn-accent ">All Packages</button>
                   
                </Link>
            </div>
        </div>
    );
};

export default Package;

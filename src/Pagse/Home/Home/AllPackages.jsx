
import Place from "../AllCart/Place";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecore from "../../../Hooks/UseAxiosSecore";
import Loading from "../../../Loading/Loading";

const AllPackages = () => {
    // const [items, setItems] = useState([]);
    // console.log(items);


    const axiosSecure = UseAxiosSecore();

    const { data: items = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/menu');
            return data;
        }
    });

    if (isLoading) return <Loading/>


    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-4">
                {
                    items.map(item => <Place
                        item={item}
                        key={item._id}
                    ></Place>

                    )
                }
            </div>

        
        </div>
    );
};

export default AllPackages;
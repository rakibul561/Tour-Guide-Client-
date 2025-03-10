import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecore";
import Loading from "../../../Loading/Loading";

const UserReview = () => {  
    const axiosSecure = UseAxiosSecure();
    
    const { data: storys = [], isLoading, error } = useQuery({
        queryKey: ['storys'],
        queryFn: async () => {
            const res = await axiosSecure.get('/storys'); 
            return res.data;
        }
    });  
   
     
    if(isLoading){
        return <Loading/>
    }

    return (
        <div className="bg-[#00B19D] rounded-xl mb-10 px-4 py-6">
            <div className="carousel w-full mt-10">
                {storys.map((item, index) => (
                    <div key={index} id={`item${index + 1}`} className="carousel-item w-full flex flex-col items-center">
                        <img 
                            src={item.photo} 
                            alt={item.name} 
                            className="w-full lg:w-44 h-auto object-cover rounded-lg"
                        />
                        <div className="text-center space-y-2 mt-3">
                            <h2 className="text-xl md:text-2xl text-white font-bold">{item.name}</h2>
                            <p className="text-sm md:text-base text-white font-bold">{item.email}</p>
                            <p className="text-sm text-black italic">{item.story}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
                {storys.map((_, index) => (
                    <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
                        {index + 1}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default UserReview;

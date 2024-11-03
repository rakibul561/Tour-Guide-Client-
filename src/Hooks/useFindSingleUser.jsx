import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecore";

const useFetchSingleUser = (email) => {
    const axiosSecure = UseAxiosSecure();
    const { data: singleUser, isLoading: loading } = useQuery({
        queryKey: [email, 'singleUserInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/single-user/${email}`);
            return res?.data;
        }
    });

    return { singleUser, loading };
};

export default useFetchSingleUser;

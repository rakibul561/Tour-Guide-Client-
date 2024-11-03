import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tour-guide-server-six.vercel.app'
})


const usePublic = () => {
    return axiosPublic
};

export default usePublic;
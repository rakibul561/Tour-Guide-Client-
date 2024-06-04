import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect } from "react";
import axios from 'axios';

const UseAxiosSecore = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000', 
    });

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => res,
            async error => {
                const status = error.response ? error.response.status : null;
                console.log('status error in the interceptors', status);
                if (status === 401 || status === 403) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return axiosSecure;
};

export default UseAxiosSecore;

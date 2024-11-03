import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    baseURL: 'https://tour-guide-server-six.vercel.app',
});

const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();
    useEffect(() => {
        // Request interceptor
        axiosSecure.interceptors.request.use(
            config => {
                const token = localStorage.getItem('access-token');
                // console.log('request stopped interceptors', token);
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        // Response interceptor
        axiosSecure.interceptors.response.use(function (response) {
            return response;

        }, async (error) => {
            const status = error.response.status;
            console.log('status error in the interceptors', status);
            if (status === 401 || status === 403) {
                // Handle 401 or 403 errors here
                // For example: Redirect to login page
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        }
        );
    }, []);

    return axiosSecure;
};

export default UseAxiosSecure;

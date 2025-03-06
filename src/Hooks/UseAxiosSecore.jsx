/* eslint-disable no-undef */
import { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();

    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');  // টোকেনটি localStorage থেকে নেওয়া হবে

                if (token) {
                   
                    config.headers.Authorization = `Bearer ${token}`;
                } else {
                    console.log('No token found');
                }

                return config;
            },
            (error) => Promise.reject(error)
        );
    }, []);

    return axiosSecure;
};

export default UseAxiosSecure;

import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://car-doctor-server-psi-five.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
    return axiosSecure()
};

export default useAxiosSecure;
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

const LogIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const logedInUser = result.user;
                const user = { email }
                if (logedInUser) {
                    // Access Token 
                    axios.post('https://car-doctor-server-psi-five.vercel.app/jwt', user, { withCredentials: true })
                        .then(res => {
                            if (res.data.success) {
                                Swal.fire(
                                    'Log In',
                                    'Log In Successfully',
                                    'success'
                                )
                                navigate(location?.state ? location?.state : '/')
                            }
                        })

                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Opps!',
                    text: error.code,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:mr-16 lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                    <h1 className="text-4xl font-bold text-center py-5">Login</h1>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn hover:bg-[#FF3811] border-2 border-[#FF3811] text-[#FF3811] hover:text-white">Sign In</button>
                        </div>
                    </form>
                    
                    <p className="text-center">Are you New Here? <Link to="/signup" className="text-[#FF3811] font-bold">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
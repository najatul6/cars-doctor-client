import { FcGoogle } from "react-icons/fc";
import { ImTwitter } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../Pages/provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser, googleLogIn, twitterLogIn, facebookLogIn } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    Swal.fire(
                        'Success',
                        'UserCreated Successfully',
                        'success'
                    )
                    form.reset()
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

    const handleSocialLogin = (media) => {
        media()
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:mr-16 lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                    <h1 className="text-4xl font-bold text-center py-5">Sign Up</h1>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn hover:bg-[#FF3811] border-2 border-[#FF3811] text-[#FF3811] hover:text-white">Sign In</button>
                        </div>
                    </form>
                    <p className="text-center text-[#444] text-lg">Or Sign In with</p>
                    <div className="flex justify-center gap-5 my-3">
                        <button onClick={() => handleSocialLogin(facebookLogIn)} className="btn py-2 p-[15px] rounded-full text-xl text-blue-500">
                            <BsFacebook></BsFacebook>
                        </button>
                        <button onClick={() => handleSocialLogin(twitterLogIn)} className="btn py-2 p-[15px] rounded-full text-xl text-blue-500">
                            <ImTwitter></ImTwitter>
                        </button>
                        <button onClick={() => handleSocialLogin(googleLogIn)} className="btn py-2 p-[15px] rounded-full text-xl">
                            <FcGoogle></FcGoogle>
                        </button>
                    </div>
                    <p className="text-center">Already have an account? <Link to="/login" className="text-[#FF3811] font-bold">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
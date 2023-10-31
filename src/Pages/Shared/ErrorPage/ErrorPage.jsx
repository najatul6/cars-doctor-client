import { Link } from 'react-router-dom';
import errorframe from '../../../assets/images/ErrorPage/Error.png'
import NavBar from '../NavBar/NavBar';
import { BsArrow90DegLeft } from "react-icons/bs";

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <img className='mx-auto' src={errorframe} alt="" />

            <Link to='/' className='flex justify-center mt-2'>
                <button
                    className="btn btn-outline hover:text-[#FF3811] hover:bg-transparent hover:border-[#FF3811] border-2 hover:border-2 bg-[#FF3811] text-white">
                    <BsArrow90DegLeft />
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;
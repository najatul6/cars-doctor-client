import { AiOutlineArrowRight, AiFillFileText } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServicesRightSide = ({ service }) => {
    const { _id, price } = service;
    return (
        <div>
            <div className='lg:col-span-1 px-2 md:px-4 lg:p-0'>
                <div className='bg-[#F3F3F3] px-3 py-10 rounded-xl'>
                    <h2 className='text-2xl font-bold mb-3'>Services</h2>
                    <div className='px-0 space-y-5'>
                        <div className='flex items-center p-4 justify-between rounded-xl text-lg font-bold bg-white hover:bg-[#FF3811] text-black hover:text-white'>
                            <h2>Full Car Repair</h2>
                            <AiOutlineArrowRight />
                        </div>
                        <div className='flex items-center p-4 justify-between rounded-xl text-lg font-bold bg-white hover:bg-[#FF3811] text-black hover:text-white'>
                            <h2>Engine Repair</h2>
                            <AiOutlineArrowRight />
                        </div>
                        <div className='flex items-center p-4 justify-between rounded-xl text-lg font-bold bg-white hover:bg-[#FF3811] text-black hover:text-white'>
                            <h2>Automatic Services</h2>
                            <AiOutlineArrowRight />
                        </div>
                        <div className='flex items-center p-4 justify-between rounded-xl text-lg font-bold bg-white hover:bg-[#FF3811] text-black hover:text-white'>
                            <h2>Engine Oil Change</h2>
                            <AiOutlineArrowRight />
                        </div>
                        <div className='flex items-center p-4 justify-between rounded-xl text-lg font-bold bg-white hover:bg-[#FF3811] text-black hover:text-white'>
                            <h2>Battery Charge</h2>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] p-4 rounded-xl my-5'>
                    <h2 className='text-2xl font-bold text-white'>Download</h2>
                    <div className='space-y-5 mt-5'>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <AiFillFileText className='text-3xl text-white'></AiFillFileText>
                                <div className='text-white'>
                                    <h2 className='text-lg font-bold'>Our Brochure</h2>
                                    <p className='text-[#A2A2A2]'>Download</p>
                                </div>
                            </div>
                            <div className='text-2xl font-bold bg-[#FF3811] rounded-xl text-white p-5'>
                                <AiOutlineArrowRight />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <AiFillFileText className='text-3xl text-white'></AiFillFileText>
                                <div className='text-white'>
                                    <h2 className='text-lg font-bold'>Company Details</h2>
                                    <p className='text-[#A2A2A2]'>Download</p>
                                </div>
                            </div>
                            <div className='text-2xl font-bold bg-[#FF3811] rounded-xl text-white p-5'>
                                <AiOutlineArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] px-5 py-11 rounded-xl'>
                    <img className='mx-auto' src={logo} alt="" />
                    <h2 className='text-center text-xl font-bold text-white my-2'>Need Help? We Are Here To Help You</h2>
                    <div className='bg-white rounded-xl py-10 relative'>
                        <div>
                            <h2 className='text-black text-xl font-bold text-center'><span className='text-[#FF3811]'>Car Doctor</span> Special</h2>
                            <p className='text-[#737373] font-bold text-center'>Save up to <span className='text-[#FF3811]'>60% off</span></p>
                        </div>
                        <div className='absolute flex justify-center w-full -bottom-5'>
                            <button className='btn bg-[#FF3811] border-0 text-white hover:bg-[#ff3911ef]'>
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>

                <h2 className='text-2xl font-bold flex items-center my-5 px-5'>Price : <BsCurrencyDollar /> {price}</h2>
                <Link to={`/checkout/${_id}`}>
                    <button className='w-full bg-[#FF3811] py-4 text-xl font-bold text-white rounded-xl'>
                        Proceed Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

ServicesRightSide.propTypes = {
    service: PropTypes.array,
}

export default ServicesRightSide;
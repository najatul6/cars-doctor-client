import { BsCurrencyDollar } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from "../../../../assets/images/products/1.png"
import image2 from "../../../../assets/images/products/2.png"
import image3 from "../../../../assets/images/products/3.png"
import image4 from "../../../../assets/images/products/4.png"
import image5 from "../../../../assets/images/products/5.png"
import image6 from "../../../../assets/images/products/6.png"
import { useEffect } from "react";

const PopularProductsCard = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card bg-white shadow-2xl p-2 relative">
                <figure>
                    <img className="h-[260px] rounded-xl" src={image1} alt="Car Engine Plug" />
                </figure>
                <div className="card-body px-0 items-center">
                    <Rating style={{ maxWidth: 150 }} value={5} />
                    <h2 className="text-[#444] text-2xl font-semibold">Car Engine Plug</h2>
                    <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />20.00</h2>
                </div>
                <div className="bg-red-400 absolute border rounded-lg px-3 py-4 right-4 top-5">
                    <BiCartAdd />
                </div>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card bg-white shadow-2xl p-6">
                <figure><img className="h-[260px] rounded-xl" src={image2} alt="Car Air Filter" /></figure>
                <div className="card-body px-0 items-center">
                    <Rating style={{ maxWidth: 150 }} value={5} />
                    <h2 className="text-[#444] text-2xl font-semibold">Car Air Filter</h2>
                    <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />20.00</h2>
                </div>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card bg-white shadow-2xl p-6">
                <figure><img className="h-[260px] rounded-xl" src={image3} alt="Shoes" /></figure>
                <div className="card-body px-0 items-center">
                    <Rating style={{ maxWidth: 150 }} value={5} />
                    <h2 className="text-[#444] text-2xl font-semibold">Cools Led Light</h2>
                    <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />20.00</h2>
                </div>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card bg-white shadow-2xl p-6">
                <figure><img className="h-[260px] rounded-xl" src={image4} alt="Shoes" /></figure>
                <div className="card-body px-0 items-center">
                    <Rating style={{ maxWidth: 150 }} value={5} />
                    <h2 className="text-[#444] text-2xl font-semibold">Cools Led Light</h2>
                    <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />20.00</h2>
                </div>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card bg-white shadow-2xl p-6">
                <figure><img className="h-[260px] rounded-xl" src={image5} alt="Shoes" /></figure>
                <div className="card-body px-0 items-center">
                    <Rating style={{ maxWidth: 150 }} value={5} />
                    <h2 className="text-[#444] text-2xl font-semibold">Cools Led Light</h2>
                    <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />20.00</h2>
                </div>
            </div>
            <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card bg-white shadow-2xl p-6">
                <figure><img className="h-[260px] rounded-xl" src={image6} alt="Shoes" /></figure>
                <div className="card-body px-0 items-center">
                    <Rating style={{ maxWidth: 150 }} value={5} />
                    <h2 className="text-[#444] text-2xl font-semibold">Cools Led Light</h2>
                    <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />20.00</h2>
                </div>
            </div>
        </div>
    );
};

export default PopularProductsCard;
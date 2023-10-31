import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div>
            <div className="card bg-white shadow-2xl p-6">
                <figure><img className="h-[260px] rounded-xl" src={img} alt="Shoes" /></figure>
                <div className="card-body px-0">
                    <h2 className="text-[#444] text-2xl font-semibold">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <h2 className="text-[#FF3811] flex items-center font-bold text-xl"><span>Price :</span> <BsCurrencyDollar />{price}</h2>
                        <Link to={`/serviceDetails/${_id}`}>
                            <button className="btn bg-transparent border-none hover:bg-[#FF3811] hover:text-white  text-[#FF3811] text-2xl font-bold"><AiOutlineArrowRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;
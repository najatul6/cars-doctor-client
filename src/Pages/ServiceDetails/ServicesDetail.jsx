import { useLoaderData } from 'react-router-dom';
import bgimg from '../../assets/images/checkout/checkout.png';
import ServicesRightSide from './ServicesRightSide';
import ServicesLeftSide from './servicesLeftSide';


const ServicesDetail = () => {
    const service = useLoaderData();

    return (
        <div>
            <div className='relative w-full'>
                <img className='w-full h-60 md:h-auto' src={bgimg} alt="" />
                <div className='absolute flex items-center top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl'>
                    <h2 className='text-4xl font-bold text-white pl-10'>Service Details</h2>
                </div>
                <div className='absolute text-xl font-bold text-white bottom-0 w-full flex justify-center'>
                    <h2 className=' px-10 py-4 rounded-t-3xl bg-[#FF3811]'>Home/Service Details/{service.title}</h2>
                </div>
            </div>
            <div className='my-10 grid lg:grid-cols-4 gap-5'>
                <div className='lg:col-span-3 px-2'>
                    <ServicesLeftSide service={service}></ServicesLeftSide>
                </div>
                <ServicesRightSide service={service}></ServicesRightSide>
            </div>
        </div>
    );
};

export default ServicesDetail;
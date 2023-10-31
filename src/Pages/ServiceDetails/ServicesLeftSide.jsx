import FacilityBox from "./FacilityBox/FacilityBox";
import PropTypes from 'prop-types';

const ServicesLeftSide = ({ service }) => {
    const { img, title, description, facility } = service;

    return (
        <div>
            <img className="w-full rounded-xl" src={img} alt="" />
            <div className="mt-10 space-y-8">
                <h2 className="text-4xl text-[#444] my font-bold">{title}</h2>
                <p className="text-[#737373]">{description}</p>

                {/* Facilitys Box  */}
                <div className="grid md:grid-cols-2 gap-7">
                    {
                        facility?.map(facilitys => <FacilityBox key={facilitys.idx} facilitys={facilitys}></FacilityBox>)
                    }
                </div>
                <p className="text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.
                </p>
                <h2 className="text-3xl font-bold text-[#444]">3 Simple Steps to Process</h2>
                <p className="text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text
                </p>

                {/* Steps Cards  */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-[#E8E8E8] border-2 rounded-xl text-center px-9 py-11">
                        <div className="bg-[#FF38111A] flex justify-center w-20 h-20 mx-auto items-center rounded-full">
                            <div className="bg-[#FF3811] h-14 w-14 flex justify-center items-center rounded-full">
                                <h1 className="text-white text-xl font-bold">01</h1>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[#151515]">Step One</h2>
                        <p className="text-[#737373] capitalize">It uses a dictionary of over 200 .</p>
                    </div>
                    <div className="border-[#E8E8E8] border-2 rounded-xl text-center px-9 py-11">
                        <div className="bg-[#FF38111A] flex justify-center w-20 h-20 mx-auto items-center rounded-full">
                            <div className="bg-[#FF3811] h-14 w-14 flex justify-center items-center rounded-full">
                                <h1 className="text-white text-xl font-bold">02</h1>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[#151515]">Step Two</h2>
                        <p className="text-[#737373] capitalize">It uses a dictionary of over 200 .</p>
                    </div>
                    <div className="border-[#E8E8E8] border-2 rounded-xl text-center px-9 py-11">
                        <div className="bg-[#FF38111A] flex justify-center w-20 h-20 mx-auto items-center rounded-full">
                            <div className="bg-[#FF3811] h-14 w-14 flex justify-center items-center rounded-full">
                                <h1 className="text-white text-xl font-bold">03</h1>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[#151515]">Step Three</h2>
                        <p className="text-[#737373] capitalize">It uses a dictionary of over 200 .</p>
                    </div>
                </div>

                {/* Demo Video  */}
                <div>
                    <iframe className="w-full h-[350px] rounded-xl"
                        src="https://www.youtube.com/embed/ARAUXc6Cbxw?si=dVx9OroYI2rrDx7y"

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

ServicesLeftSide.propTypes = {
    service: PropTypes.array
}

export default ServicesLeftSide;
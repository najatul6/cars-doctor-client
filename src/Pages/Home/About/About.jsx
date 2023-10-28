import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 border-white border-8 absolute right-0 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2 text-black">
                    <h1 className="text-xl mb-5 font-bold text-[#FF3811]">About Us</h1>
                    <h2 className="text-6xl w-3/4 font-bold">We are qualified & of experience in this field</h2>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.
                    </p>
                    <button className="btn mt-10 border-white btn-secondary bg-[#FF3811] border-2 hover:bg-transparent hover:border-[#FF3811] hover:text-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
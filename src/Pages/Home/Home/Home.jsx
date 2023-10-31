import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";
import Team from "../Team/Team";




const Home = () => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
        >
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <PopularProducts></PopularProducts>
            <Team></Team>
        </div>
    );
};

export default Home;
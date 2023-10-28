import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularProducts from "../PopularProducts/PopularProducts";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <PopularProducts></PopularProducts>
            <Team></Team>
        </div>
    );
};

export default Home;